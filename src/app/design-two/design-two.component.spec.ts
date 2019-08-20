import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTwoComponent } from './design-two.component';

describe('DesignTwoComponent', () => {
  let component: DesignTwoComponent;
  let fixture: ComponentFixture<DesignTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
