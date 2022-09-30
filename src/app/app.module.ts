import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  //aqui van los componentes (las clases)
  declarations: [
    AppComponent,
    // ContadorComponent,

  ],
  //aqui van otros modulos
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  //nuestros providers
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
