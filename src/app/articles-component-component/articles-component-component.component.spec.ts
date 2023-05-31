import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesComponentComponentComponent } from './articles-component-component.component';

describe('ArticlesComponentComponentComponent', () => {
  let component: ArticlesComponentComponentComponent;
  let fixture: ComponentFixture<ArticlesComponentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesComponentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
