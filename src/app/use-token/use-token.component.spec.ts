import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseTokenComponent } from './use-token.component';

describe('UseTokenComponent', () => {
  let component: UseTokenComponent;
  let fixture: ComponentFixture<UseTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
