import { Component, OnInit } from '@angular/core';
import { SimoService } from '../Simo.Services';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  active:string[] = [];
  int = 1;

  constructor(private simoService:SimoService) { }

  ngOnInit(): void {
    this.active = this.simoService.active;
    this.simoService.simo.next(this.int);
  }

  onSetToInactive(id:number){
    this.simoService.setActiveToInactive(id);
  }

}
