import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationComponent } from './authentefication/creation/creation.component';
import { LoginComponent } from './authentefication/login/login.component';
import { AjoutComponent } from './participant/ajout/ajout.component';
import { ListComponent } from './participant/list/list.component';
import { IndexComponent } from './index/index.component';
import { AjoutActivitéComponent } from './travaux/ajout-activité/ajout-activité.component';
import { FluxActivitéComponent } from './travaux/flux-activité/flux-activité.component';
import { AjoutMessageComponent } from './discussion/ajout-message/ajout-message.component';
import { FluxMessageComponent } from './discussion/flux-message/flux-message.component';


const routes: Routes = [
  {path: '',   redirectTo: '/', pathMatch: 'full'},
  { path: 'login/creation', component: CreationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'liste-participant/ajout', component: AjoutComponent },
  { path: 'liste-participant', component: ListComponent },

  { path: 'liste-travaux/ajout', component: AjoutActivitéComponent },
  { path: 'liste-travaux', component: FluxActivitéComponent },

  { path: 'liste-dicussion/ajout', component: AjoutMessageComponent },
  { path: 'liste-dicussion', component: FluxMessageComponent },
  
  { path: 'index', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
