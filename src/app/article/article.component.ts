import { Component, OnInit, HostBinding } from '@angular/core';
import {Article} from './article.model'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;
  
  constructor() { 
    this.article = new Article('Angular 2','http://angular.io',10);
  }

  ngOnInit() {
  }

  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }

}
