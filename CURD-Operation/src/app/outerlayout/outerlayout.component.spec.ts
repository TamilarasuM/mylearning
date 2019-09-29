import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterlayoutComponent } from './outerlayout.component';

describe('OuterlayoutComponent', () => {
  let component: OuterlayoutComponent;
  let fixture: ComponentFixture<OuterlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
