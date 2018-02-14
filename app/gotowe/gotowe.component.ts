import {DaneModule} from '../models/dane/dane.module';
import {CelModule} from '../models/cel/cel.module';
import {WyksztalcenieModule} from '../models/wyksztalcenie/wyksztalcenie.module';
import {DoswiadczenieModule} '../models/doswiadczenie/doswiadczenie.module';
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
  jezyki: JezykModule[];
  certyfikaty: CertyfikatModule[];
  hoby: HobyModule[];

  constructor(private service: CvDoumentService) {


}

  ngOnInit() {
    //this.dane = this.service.dane;
    this.cel = this.service.cel;
    this.wyksztalcenie = this.service.wyksztalcenie;
    this.doswiadczenie = this.service.doswiadczenie;
    this.jezyki = this.service.jezyki;
    this.certyfikaty = this.service.certyfikaty;
    this.hoby = this.service.hoby;

    


  }

}
