import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignThreeComponent } from './design-three.component';

describe('DesignThreeComponent', () => {
  let component: DesignThreeComponent;
  let fixture: ComponentFixture<DesignThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
