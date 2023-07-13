import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Banner } from '../interface/banner';
import { Promocao } from '../interface/promocao';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  banners: Banner[] = [];
  promocao: Promocao[] = [];

  constructor(private service: ServiceService) {

  }

  ngOnInit() {
    this.service.getLayout('supermercado').subscribe((response) => {
      this.banners = response.data.banners;
      this.promocao = response.data.promo;
    });

  }

  getImagemUrl(imagem: string): string {
    return 'https://assets.instabuy.com.br/ib.item.image.medium/m-' + imagem;
  }
  getBannerUrl(imagem: string): string {
    return 'https://assets.instabuy.com.br/ib.store.banner/bnr-' + imagem;
  }

}
