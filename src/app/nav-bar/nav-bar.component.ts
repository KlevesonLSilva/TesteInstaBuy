import { Component} from '@angular/core';
import { ServiceService } from '../services/service.service';
import { CollectionItems } from '../interface/CollectionItems';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  collectionItems: CollectionItems[]=[];
  
  
  
  
  
  
  constructor( private service: ServiceService) { }
  ngOnInit() {
    this.CollectionItems();
  }


  CollectionItems() {
    this.service.getLayout('supermercado').subscribe((response) => {
      
      this.collectionItems = response.data.collection_items;
      
    });
  }
  

  scrollToCollectionTitle(title: string, event: Event) {
    const element = document.getElementById(`collection-${title}`);
    event.preventDefault();
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
 
}

