import { Component, OnInit } from '@angular/core';
import {CvDoumentService} from '../cv-doument.service';
import { CertyfikatModule } from '../models/certyfikat/certyfikat.module';

@Component({
  selector: 'app-certyfikaty',
  templateUrl: './certyfikaty.component.html',
  styleUrls: ['./certyfikaty.component.css'],
  providers: [CvDoumentService]
})
export class CertyfikatyComponent implements OnInit {

  constructor(private service: CvDoumentService) { }

  ngOnInit() {
  }

  wyslji(nr: string , nazwa: string , gdzie: string , data: string) {
    this.service.certyfikatWyslj(new CertyfikatModule(nr , nazwa , gdzie , data));

  }

}
