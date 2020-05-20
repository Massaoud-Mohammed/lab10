import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  participant() {
    this.router.navigate(['liste-participant']);
  }
  tavaux() {
    this.router.navigate(['liste-travaux']);
  }

  discussion() {
    this.router.navigate(['liste-dicussion']);
  }

 /* ajouter() {
    this.router.navigate(['ajout']);
  }


  ajouter() {
    this.router.navigate(['ajout']);
  }*/


}
