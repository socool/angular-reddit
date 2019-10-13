import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import {Article} from './article.model';
import { from } from 'rxjs';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = new Article('Angular 2','http://angular.io',10);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initial votes', () => {
    expect(component.article.votes).toEqual(10);
  });

  it('should valid voteUP', () => {
    component.article.voteUp();
    expect(component.article.votes).toEqual(11);
  });

  it('should valid voteDown', () => {
    component.article.voteDown();
    expect(component.article.votes).toEqual(9);
  });
});
