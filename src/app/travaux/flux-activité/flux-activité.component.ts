import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flux-activité',
  templateUrl: './flux-activité.component.html',
  styleUrls: ['./flux-activité.component.css']
})
export class FluxActivitéComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ajouter() {
    this.router.navigate(['liste-travaux/ajout']);
  }



}
