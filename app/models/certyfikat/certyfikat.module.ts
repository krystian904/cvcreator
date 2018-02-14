import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CertyfikatModule {
  nr: string;
  nazwa: string;
  gdzie: string;
  data: string;


  constructor(nr: string , nazwa: string , gdzie: string , data: string) {
    this.nr = nr;
    this.nazwa = nazwa;
    this.gdzie = gdzie;
    this.data = data;

  }

}
