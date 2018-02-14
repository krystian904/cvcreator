import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DaneOsoboweComponent } from './dane-osobowe/dane-osobowe.component';
import { CelZawodowyComponent } from './cel-zawodowy/cel-zawodowy.component';
import { WyksztalcenieComponent } from './wyksztalcenie/wyksztalcenie.component';
import { DoswiadczenieComponent } from './doswiadczenie/doswiadczenie.component';
import { JezykiComponent } from './jezyki/jezyki.component';
import { CertyfikatyComponent } from './certyfikaty/certyfikaty.component';
import { HobbyComponent } from './hobby/hobby.component';
import { GotoweComponent } from './gotowe/gotowe.component';



@NgModule({
  declarations: [
    AppComponent,
    DaneOsoboweComponent,
    CelZawodowyComponent,
    WyksztalcenieComponent,
    DoswiadczenieComponent,
    JezykiComponent,
    CertyfikatyComponent,
    HobbyComponent,
    GotoweComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
