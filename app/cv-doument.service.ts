import {DaneModule} from './models/dane/dane.module';
import {CelModule} from './models/cel/cel.module';
import {WyksztalcenieModule} from './models/wyksztalcenie/wyksztalcenie.module';
import {DoswiadczenieModule} from './models/doswiadczenie/doswiadczenie.module.ts';
import {JezykModule} from './models/jezyk/jezyk.module';
import {CertyfikatModule} from './models/certyfikat/certyfikat.module';
import {HobyModule} from './models/hoby/hoby.module';

import { Injectable } from '@angular/core';

@Injectable()
export class CvDoumentService {

  public dane: DaneModule ;
  public cel: CelModule;
  public wyksztalcenie: WyksztalcenieModule[];
  public doswiadczenie: DoswiadczenieModule[];
  public jezyki: JezykModule[];
  public certyfikaty: CertyfikatModule[];
  public hoby: HobyModule[];



  constructor() {
    this.dane = null;
    this.cel = null;
    this.wyksztalcenie = [];
    this.doswiadczenie = [];
    this.jezyki = [];
    this.certyfikaty = [];
    this.hoby = [];

    console.log ('stworzono constructor CvDoumentService');
}

  daneWyslji(dane: DaneModule) {
    this.dane = dane;
    this.daneZapisz();
  }

  // info
  // https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage

  daneZapisz: void () {
    localStorage.setItem('dane', JSON.stringify(this.dane));
  }

  daneOdczyt : DaneModul () {
    return JSON.parse(localStorage.getItem('dane'));

  }

  celWyslji: void (cel: CelModule )  {
  this.cel = cel;
  this.celZapisz();
  }

  celZapisz: void () {
    localStorage.setItem('cel', JSON.stringify(this.cel));
  }

  celOdczyt: CelModule () {
    return JSON.parse(localStorage.getItem('cel'));

  }


  wyksztalcenieWyslji( wyksz: WyksztalcenieModule) {
  this.wyksztalcenie.push(wyksz);
  this.wyksztalcenieZapisz();
  //console.log(this.wyksztalcenie.length);
  }


  wyksztalcenieZapisz: void () {
    localStorage.setItem('wyksztalcenie', JSON.stringify(this.wyksztalcenie));
    console.log(this.wyksztalcenie.length);
  }

  wyksztalcenieOdczyt: WyksztalcenieModule () {
    return JSON.parse(localStorage.getItem('wyksztalcenie'));

  }

  doswiadczenieWyslji( doswiadczenie: DoswiadczenieModule){
      this.doswiadczenie.push(doswiadczenie);
      this.doswiadczenieZapisz();
      console.log(this.doswiadczenie.length);

  }

  doswiadczenieZapisz: void  () {
    localStorage.setItem('doswiadczenie', JSON.stringify(this.doswiadczenie));
    //console.log(this.doswiadczenie.length);
  }

  doswiadczenieOdczyt: DoswiadczenieModule () {
    return JSON.parse(localStorage.getItem('doswiadczenie'));

  }


  jezykWyslji: void ( jezyk: JezykModule){
    this.jezyki.push(jezyk);
    this.jezykZapisz();
    //console.log(this.jezyki.length);

  }

  jezykZapisz: void () {
    localStorage.setItem('jezyk', JSON.stringify(this.jezyki));
    console.log(this.jezyki.length);
  }

  jezykOdczyt: JezykModule () {
    return JSON.parse(localStorage.getItem('jezyk'));

  }

  certyfikatWyslji: void ( certyfikat: CertyfikatModule){
    this.certyfikaty.push(certyfikat);
    this.certyfikatZapisz ();
    // console.log(this.certyfikaty.length);

  }

  certyfikatZapisz: void () {
    localStorage.setItem('certyfikat', JSON.stringify(this.certyfikaty));
    console.log(this.certyfikaty.length);
  }

  certyfikatOdczyt: CertyfikatModule () {
    return JSON.parse(localStorage.getItem('certyfikat'));

  }

  hobyWyslji: void  (hoby: string) {
    this.hoby.push(new HobyModule(hoby));
    this.hobyZapisz();
    console.log(this.hoby.length);
  }

  hobyZapisz: void () {
    localStorage.setItem('hoby', JSON.stringify(this.hoby));
    console.log(this.hoby.length);
  }

  hobytOdczyt: HobyModule () {
    return JSON.parse(localStorage.getItem('hoby'));

  }

}
