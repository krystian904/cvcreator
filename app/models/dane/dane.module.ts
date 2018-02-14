import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DaneModule {
imie: string;
adres: string;
email: string;
telefon: string;

constructor(imie: string , adres: string, email: string, telefon: string){
  this.imie = imie;
  this.adres = adres;
  this.email = email;
  this.telefon = telefon;


}

}
