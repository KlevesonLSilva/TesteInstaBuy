import { Component } from '@angular/core';
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
    this.service.getLayout('supermercado').subscribe((response) => {
      this.banners = response.data.banners;
      this.promocao = response.data.promo;
      this.groupPromocoes = this.groupPromocoesPorTres(this.promocao);
      this.collectionItems = response.data.collection_items
       this.collectionItemsGroup = this.groupCollectionItemsPorTres(this.collectionItems); 
       debugger
       
    });
    

  }

  adicionarAoCarrinho(item: any) {
    
    const subdomain = 'supermercado';
    const slug = item.slug;
    debugger
    this.service.getItem(subdomain, slug).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/caminho-para-a-pagina']);
    });
  }

  getImagemUrl(imagem: string): string {
    return 'https://assets.instabuy.com.br/ib.item.image.medium/m-' + imagem;
  }
  getBannerUrl(imagem: string): string {
    return 'https://assets.instabuy.com.br/ib.store.banner/bnr-' + imagem;
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

 


  
  groupCollectionItemsPorTres(collectionItems: any[]): CollectionItems[][] {
    const groups: CollectionItems[][] = [];
  
    for (const item of collectionItems) {
      const slug = item.slug;
      const items = item.items;
  
      let slugGroups: CollectionItems[] = [];
      let currentGroup: { id: string; images: string[]; item_type: string; main_subcategory: string; min_price_valid: string; name: string; }[] = [];
  
      for (let i = 0; i < items.length; i++) {
        currentGroup.push(items[i]);
  
        if (currentGroup.length  % 3 === 0 || i === items.length - 1) {
          slugGroups.push({
            length: currentGroup.length,
            id: slug,
            slug: slug,
            title: item.title,
            items: currentGroup
          });
          currentGroup = [];
        }
      }
  
      groups.push(slugGroups);
    }
  
    return groups;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 



  
}



