import {WyksztalcenieModule} from '../models/wyksztalcenie/wyksztalcenie.module';
import {CvDoumentService} from '../cv-doument.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wyksztalcenie',
  templateUrl: './wyksztalcenie.component.html',
  styleUrls: ['./wyksztalcenie.component.css'],
  providers: [CvDoumentService]
})
export class WyksztalcenieComponent implements OnInit {

  constructor(private service: CvDoumentService) { }

  ngOnInit() {

  }

  wyslWyksztalcenie(dataStart: string , dataKoniec: string , opis){
    this.service.wyksztalcenieWyslji(new WyksztalcenieModule(dataStart,dataKoniec,opis));
  }

}
