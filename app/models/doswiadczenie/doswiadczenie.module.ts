import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DoswiadczenieModule {
  dataZaczecia: string;
  dataZakonczenia: string;
  opis: string;

    constructor( dataZaczecia: string, dataZakonczenia: string, opis: string) {
        this.dataZaczecia = dataZaczecia;
        this.dataZakonczenia = dataZakonczenia;
        this.opis = opis;

    }

 }
