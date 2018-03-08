import {DaneModule} from '../models/dane/dane.module';
import {CelModule} from '../models/cel/cel.module';
import {WyksztalcenieModule} from '../models/wyksztalcenie/wyksztalcenie.module';
import {DoswiadczenieModule} from '../models/doswiadczenie/doswiadczenie.module';
import {JezykModule} from '../models/jezyk/jezyk.module';
import {CertyfikatModule} from '../models/certyfikat/certyfikat.module';
import {HobyModule} from '../models/hoby/hoby.module';

import { Component, OnInit } from '@angular/core';
import {CvDoumentService} from '../cv-doument.service';

@Component({
  selector: 'app-gotowe',
  templateUrl: './gotowe.component.html',
  styleUrls: ['./gotowe.component.css'],
  providers: [CvDoumentService]
})
export class GotoweComponent implements OnInit {

  dane: DaneModule;
  cel: CelModule;
  wyksztalcenie: WyksztalcenieModule[];
  doswiadczenie: DoswiadczenieModule[];
  jezyki: JezykModule[] ;
  certyfikaty: CertyfikatModule[];
  hoby: HobyModule[] ;

  constructor(private service: CvDoumentService) {

}

  ngOnInit() {
    /*this.dane = this.service.daneOdczyt();
    this.cel = this.service.celOdczyt();
    this.wyksztalcenie = this.service.wyksztalcenieOdczyt();
    this.doswiadczenie = this.service.doswiadczenieOdczyt();
    this.jezyki = this.service.jezykOdczyt();
    this.certyfikaty = this.service.certyfikatOdczyt();
    this.hoby = this.service.hobytOdczyt();*/



    console.log("aktualizacia gotowe");
    console.log(this.service.daneOdczytPrawda());
    console.log(this.service.celOdczytPrawda());
    console.log(this.service.wyksztalcenieOdczytPrawda());
    console.log(this.service.doswiadczenieOdczytPrawda());
    console.log(this.service.jezykOdczytPrawda());
    console.log(this.service.certyfikatOdczytPrawda());
    console.log(this.service.hobytOdczytPrawda());


    if(this.service.daneOdczytPrawda()){
      this.dane = this.service.daneOdczyt();
    }
    if(this.service.celOdczytPrawda()){
      this.cel = this.service.celOdczyt();
    }
    if(this.service.wyksztalcenieOdczytPrawda()){
      this.wyksztalcenie = this.service.wyksztalcenieOdczyt();
    }else{
      this.wyksztalcenie =[];
    }
    if(this.service.doswiadczenieOdczytPrawda()){
      this.doswiadczenie = this.service.doswiadczenieOdczyt();
    }else{
        this.doswiadczenie =[];
    }
    if(this.service.jezykOdczytPrawda()){
      this.jezyki = this.service.jezykOdczyt();
    }else{
      this.jezyki =[];
    }
    if(this.service.certyfikatOdczytPrawda()){
      this.certyfikaty = this.service.certyfikatOdczyt();
    }else{
      this.certyfikaty =[];
    }
    if(this.service.hobytOdczytPrawda()){
      this.hoby = this.service.hobytOdczyt();
    }else{
      this.hoby =[];
    }

  }

}
