import { Component } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Add';
  ab: number ;
  ba: number ;
  result: number ;

  parsetint(x){
    return parseInt(x);
  }

  bba()
  {
         // this.result = parseInt(this.ab) + parseInt(this.ba);
          this.result = this.parsetint(this.ab) + this.parsetint(this.ba);
          
         // console.log(this.ab);
          //console.log(this.ba);
          //console.log(this.result);
         

  }
 
  }



