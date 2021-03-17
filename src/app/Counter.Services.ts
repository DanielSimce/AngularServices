export class CounterService{
    activeCounter = 0;
    inactiveCounter = 0;

    incrementActive(){
        this.activeCounter++;
        console.log('Active ' + this.activeCounter);     
    }

    incrementInActive(){
        this.inactiveCounter++;
        console.log('Inactive ' + this.inactiveCounter);     
    }
}