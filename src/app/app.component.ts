import { Component } from '@angular/core';
import { SimoService } from './Simo.Services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 int:number =24;

  constructor(private simoService:SimoService){}

  onSimo(){
    this.simoService.simo.next(this.int);
  }

}
