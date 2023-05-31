import { Component, OnInit } from '@angular/core';
import { InfosG } from '../models/InformationsGenerales';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
infosg:InfosG=new InfosG();
  constructor() { }

  ngOnInit(): void {
  }
    Add(){
      console.log(this.infosg)
    }
  

}
