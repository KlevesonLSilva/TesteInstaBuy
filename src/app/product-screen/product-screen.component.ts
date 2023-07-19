import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
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
  

   constructor(private service: ServiceService, private route: ActivatedRoute) { 
  
   }
   ngOnInit(): void {
    this.produtoCarregado = history.state.produto.data[0];
  }

  getImagemUrl(imagem: string): string {
    return this.service.getImagemUrl(imagem);
    
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

