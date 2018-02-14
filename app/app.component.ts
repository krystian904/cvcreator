import { Component } from '@angular/core';
import {CvDoumentService} from './cv-doument.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CvDoumentService]
})
export class AppComponent {
  title = 'CV creator';

  cursor: number;

/*1 - dane osobowe
2 cel cel zawodowy
3 Wyksztalcenie
4 Dosjwiadczenie
5 jezyki
6 Certyfikaty
7 Hoby
*/
menu: boolean[];

constructor( private service: CvDoumentService ) {
  this.menu = [ false,false,false,false,false,false,false, false ];

  this.cursor = 0;
}

  wybierzOpcie(wskaznik: number){
    while(this.cursor < 8){
        if(wskaznik == this.cursor){
          this.menu[this.cursor] = true;
        }else{
            this.menu[this.cursor] = false;
        }
      this.cursor++;
    }
    this.cursor = 0;
  }
}
