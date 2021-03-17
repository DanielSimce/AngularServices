import { Component, OnInit } from '@angular/core';
import { SimoService } from '../Simo.Services';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {
  inactive:string[] = [];
  simce:number;

  constructor(private simo:SimoService) { }

  ngOnInit(): void {
    this.inactive = this.simo.inactive;
    this.simo.simo.subscribe(
      data => {
        this.simce = data;
      }
    )
    ;
  }

  onSetToActive(id:number){
    this.simo.setInactiveToActive(id);
  }

}
