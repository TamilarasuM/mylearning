import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProdcutComponent } from './update-prodcut.component';

describe('UpdateProdcutComponent', () => {
  let component: UpdateProdcutComponent;
  let fixture: ComponentFixture<UpdateProdcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProdcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProdcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
