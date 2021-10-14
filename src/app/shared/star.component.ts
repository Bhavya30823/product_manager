import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']

})
export class StarComponent implements OnChanges{
    cropWidth: number= 75;
    @Input() rating: number= 0;

    ngOnChanges():void{
        this.cropWidth = this.rating * 75/5; 
    }

    onClick():void{
       console.log();
    }
}