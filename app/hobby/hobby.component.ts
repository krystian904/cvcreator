import { Component, OnInit } from '@angular/core';
import {CvDoumentService} from '../cv-doument.service';
import {HobyModule} from '../models/hoby/hoby.module';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css'],
  providers: [CvDoumentService]
})
export class HobbyComponent implements OnInit {
  
  constructor(private service: CvDoumentService) { }

  ngOnInit() {
  }

  wyslji( hoby: string){
    this.service.hobyWyslji(hoby);
  }

}
