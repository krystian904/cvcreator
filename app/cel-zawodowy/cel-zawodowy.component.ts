import {CelModule} from '../models/cel/cel.module';
import {CvDoumentService} from '../cv-doument.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cel-zawodowy',
  templateUrl: './cel-zawodowy.component.html',
  styleUrls: ['./cel-zawodowy.component.css'],
  providers: [CvDoumentService]
})
export class CelZawodowyComponent implements OnInit {
  cel : CelModule;
constructor(private service : CvDoumentService) { }

  ngOnInit() {
  }


zatwierdz(text :string){
  this.cel = new CelModule(text);
  this.service.celWyslji(this.cel);
  console.log(this.service.cel.text);

}
}
