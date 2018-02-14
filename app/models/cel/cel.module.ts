import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CelModule {

text : string;

constructor( text : string){
  this.text = text;

}


}
