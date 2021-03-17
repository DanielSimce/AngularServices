import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CounterService } from './Counter.Services';

@Injectable()
export class SimoService{
    active = ['Daniel','Stefani','Tomi'];
    inactive = ['Simce','Stefi','Teo'];
    simo = new Subject<number>();

   

    constructor(private counter: CounterService) {}
    setActiveToInactive(id:number){
        this.inactive.push(this.active[id]);
        this.active.splice(id,1);
        this.counter.incrementInActive();
    }

    setInactiveToActive(id:number){
        this.active.push(this.inactive[id]);
        this.inactive.splice(id,1);
        this.counter.incrementActive();
    }

    
}