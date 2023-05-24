import { Component, OnInit } from '@angular/core';
import { Emploi } from '../models/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
listEmploi:Emploi[]=[];
bilan!:number;
  constructor() { }

  ngOnInit(): void {
  this.listEmploi=[
      {reference:'ref1',titre:'titre1',entreprise:'entreprise1',etat:true},
      {reference:'ref2',titre:'titre2',entreprise:'entreprise2',etat:false},
      {reference:'ref3',titre:'titre3',entreprise:'entreprise3',etat:true}

    ];
  }

  bilanCalculer(){
    this.bilan=0;
    this.bilan=this.listEmploi.filter(e=>e.etat==true).length;
    }

}
