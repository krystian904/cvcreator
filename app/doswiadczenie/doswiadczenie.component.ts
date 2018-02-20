import {DoswiadczenieModule} from '../models/doswiadczenie/doswiadczenie.module';
import {CvDoumentService} from '../cv-doument.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doswiadczenie',
  templateUrl: './doswiadczenie.component.html',
  styleUrls: ['./doswiadczenie.component.css'] ,
 providers: [CvDoumentService]
})
export class DoswiadczenieComponent implements OnInit {

  doswiadczenie: DoswiadczenieModule;
  constructor(private service: CvDoumentService) {
   this.doswiadczenie = new DoswiadczenieModule("eeq" , "efsfes", "fewfes");
  }

  ngOnInit() {
  }

  wyslji(dataStart: string , dataKoniec: string, opis: string){
      this.service.doswiadczenieWyslji();

  }

}
