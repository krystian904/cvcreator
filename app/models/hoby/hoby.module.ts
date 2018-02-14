import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class HobyModule {
  nazwa: string;

  constructor(nazwa: string){
    this.nazwa = nazwa;
  }


}
