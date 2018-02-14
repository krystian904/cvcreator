import {DaneModule} from './models/dane/dane.module';
import {CelModule} from './models/cel/cel.module';
import {WyksztalcenieModule} from './models/wyksztalcenie/wyksztalcenie.module';
import {DoswiadczenieModule} './models/doswiadczenie/doswiadczenie.module.ts';
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

    console.log("stworzono constructor CvDoumentService");
}

  daneWyslji(dane: DaneModule) {
    this.dane = dane;

  }

  celWyslji(cel: CelModule )  {
  this.cel = cel;

  }

  wyksztalcenieWyslji( wyksz: WyksztalcenieModule) {
  this.wyksztalcenie.push(wyksz);
  console.log(this.wyksztalcenie.length);
  }

  doswiadczenieWyslji( doswiadczenie: DoswiadczenieModule){
      this.doswiadczenie.push(doswiadczenie);
      console.log(this.doswiadczenie.length);

  }

  jezykWyslji( jezyk: JezykModule){
    this.jezyki.push(jezyk);
    console.log(this.jezyki.length);

  }
  certyfikatWyslji( certyfikat : CertyfikatModule){
    this.certyfikaty.push(certyfikat);
    console.log(this.certyfikaty.length);

  }

  hobyWyslji(hoby: string){
    this.hoby.push(new HobyModule(hoby));
    console.log(this.hoby.length);
  }


}
