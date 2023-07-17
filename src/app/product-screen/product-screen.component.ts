import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/Prouct';


@Component({
  selector: 'app-product-screen',
  templateUrl: './product-screen.component.html',
  styleUrls: ['./product-screen.component.css']
})
export class ProductScreenComponent {
  produtoCarregado: Product | undefined;
  valor =0;
  

   constructor(private route: ActivatedRoute) { 
  
   }
   ngOnInit(): void {
    this.produtoCarregado = history.state.produto.data[0];
  }

  getImagemUrl(imagem: string): string {
    return 'https://assets.instabuy.com.br/ib.item.image.medium/m-' + imagem;
  }
  
  decrement() {
    if (this.valor > 0) {
      this.valor--;
    }
  }
 

  increment() {
    this.valor++;
  }
}

