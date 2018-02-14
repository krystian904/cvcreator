import {DaneModule} from '../models/dane/dane.module';
import {CvDoumentService} from '../cv-doument.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dane-osobowe',
  templateUrl: './dane-osobowe.component.html',
  styleUrls: ['./dane-osobowe.component.css'] ,
  providers: [CvDoumentService]
})
export class DaneOsoboweComponent implements OnInit {

dane: DaneModule;

  constructor(private service: CvDoumentService) {

  }

  ngOnInit() {
  }

  zatwierdz(imie: string , adres: string ,
     email: string, telefon: string)
  {


    this.dane = new DaneModule(imie , adres, email , telefon);
    this.service.daneWyslji(this.dane);
    /*console.log(this.dane.imie);
    console.log(this.dane.adres);
    console.log(this.dane.email);
    console.log(this.dane.telefon);*/
  }

}
