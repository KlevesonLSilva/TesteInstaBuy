import { Component, ElementRef } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Banner } from '../interface/banner';
import { Promocao } from '../interface/promocao';
import { CollectionItems } from '../interface/CollectionItems';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  banners: Banner[] = [];
  promocao: Promocao[] = [];
  groupPromocoes: Promocao[][] = [];
  collectionItems: CollectionItems[]=[];
  collectionItemsGroup: CollectionItems[][]=[];
  
  

  


  constructor(private service: ServiceService, private router: Router) {

  }

  ngOnInit() {
    this.getLayout();
  }

  getLayout(){
    this.service.getLayout('supermercado').subscribe((response) => {
      this.banners = response.data.banners;
      this.promocao = response.data.promo;
      this.groupPromocoes = this.groupPromocoesPorTres(this.promocao);
      this.collectionItems = response.data.collection_items;
       this.collectionItemsGroup = this.groupCollectionItemsPorTres(this.collectionItems); 
       
    });
  }

  adicionarAoCarrinho(item: any) {
    
    const subdomain = 'supermercado';
    const slug = item.slug;
    this.service.getItem(subdomain, slug).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/p',slug],{state: {produto:response}});
    });
  }

  getImagemUrl(imagem: string): string {
    return this.service.getImagemUrl(imagem);
  }
  
  
  getBannerUrl(imagem: string): string {
    return this.service.getBannerUrl(imagem);
  }

  groupPromocoesPorTres(promocoes: Promocao[]): Promocao[][] {
    const groups: Promocao[][] = [];
    let currentGroup: Promocao[] = [];

    promocoes.forEach((promocao, index) => {
      currentGroup.push(promocao);

      if ((index + 1) % 3 === 0 || index === promocoes.length - 1) {
        groups.push(currentGroup);
        currentGroup = [];
      }
    });

    return groups;
  }

 
  groupCollectionItemsPorTres(items: any[]): any[] {
    const groups = [];
    let currentGroup = [];
  
    for (let i = 0; i < items.length; i++) {
      currentGroup.push(items[i]);
  
      if (currentGroup.length === 3 || i === items.length - 1) {
        groups.push({
          length: currentGroup.length,
          items: currentGroup
        });
        currentGroup = [];
      }
    }
  
    return groups;
  }

  scrollToSection(title: string) {
    const collectionTitleElements = Array.from(document.querySelectorAll('h2'));
    for (const element of collectionTitleElements) {
      if (element.getAttribute('title') === title) {
        element.scrollIntoView({ behavior: 'smooth' });
        break;
      }
    }
  }
  
  
}
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 



  




