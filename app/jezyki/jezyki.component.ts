import { Component, OnInit } from '@angular/core';
import {CvDoumentService} from '../cv-doument.service';
import { JezykModule } from '../models/jezyk/jezyk.module'

@Component({
  selector: 'app-jezyki',
  templateUrl: './jezyki.component.html',
  styleUrls: ['./jezyki.component.css'],
  providers: [CvDoumentService]
})
export class JezykiComponent implements OnInit {

  constructor(private service: CvDoumentService) { }

  ngOnInit() {
  }

  wyslji(poziom: string, jezyk: string){
    this.service.jezykWyslji(new JezykModule(poziom , jezyk));
  }

}
