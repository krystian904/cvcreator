import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class JezykModule {
poziom: string;
nazwaJezyka: string;


    constructor(poziom: string, nazwaJezyka: string){
        this.poziom = poziom;
        this.nazwaJezyka = nazwaJezyka;


    }


}
