import { Component, OnInit } from '@angular/core';
import { article } from '../models/article';

@Component({
  selector: 'app-articles-component-component',
  templateUrl: './articles-component-component.component.html',
  styleUrls: ['./articles-component-component.component.css']
})
export class ArticlesComponentComponentComponent implements OnInit {
  listArticle:article[]=[];
    constructor() { }

  ngOnInit(): void {
    this.listArticle=[
{titre:'Le championnat du monde',contenu:'Le champion du monde de cette anneeest ....',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'},
{titre:'Les nouveaux parents',contenu:'Les nouveaux parents....',auteur:'Ahmed Said',date:'11/11/2018',categorie:'Education'},
{titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'}

    ];

}
}
