import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { app } from '../../server';
import { share } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CardComponent,
    ButtonComponent,
    ModalComponent,
    CommonModule,
    SharedModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule { }
