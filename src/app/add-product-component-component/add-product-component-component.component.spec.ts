import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponentComponentComponent } from './add-product-component-component.component';

describe('AddProductComponentComponentComponent', () => {
  let component: AddProductComponentComponentComponent;
  let fixture: ComponentFixture<AddProductComponentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
