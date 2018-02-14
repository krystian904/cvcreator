import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class WyksztalcenieModule {
dataZaczecia: string;
dataSkonczenia: string;
nazwaSzkoly: string;

  constructor( dataStart: string, dataKoniec: string , opis: string){
    this.dataZaczecia = dataStart;
    this.dataSkonczenia = dataKoniec;
    this.nazwaSzkoly = opis;

  }

}
