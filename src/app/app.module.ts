import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PopoverModule } from 'ngx-bootstrap/popover';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { ProfilComponent } from './profil/profil.component';
import { CreationComponent } from './authentefication/creation/creation.component';
import { LoginComponent } from './authentefication/login/login.component';
import { AjoutMessageComponent } from './discussion/ajout-message/ajout-message.component';
import { FluxMessageComponent } from './discussion/flux-message/flux-message.component';
import { HorizontaleComponent } from './navigation/horizontale/horizontale.component';
import { VirtecalComponent } from './navigation/virtecal/virtecal.component';
import { AjoutComponent } from './participant/ajout/ajout.component';
import { ListComponent } from './participant/list/list.component';
import { ModificationComponent } from './participant/modification/modification.component';
import { AjoutActivitéComponent } from './travaux/ajout-activité/ajout-activité.component';
import { FluxActivitéComponent } from './travaux/flux-activité/flux-activité.component';
import { IndexComponent } from './index/index.component';



@NgModule({
   declarations: [
      AppComponent,
      CreationComponent,
      ProfilComponent,
      LoginComponent,
      AjoutMessageComponent,
      FluxMessageComponent,
      HorizontaleComponent,
      VirtecalComponent,
      AjoutComponent,
      ListComponent,
      ModificationComponent,
      AjoutActivitéComponent,
      FluxActivitéComponent,
      IndexComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      TabsModule.forRoot(),
      CollapseModule.forRoot(),
      PopoverModule.forRoot(),
      //AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
