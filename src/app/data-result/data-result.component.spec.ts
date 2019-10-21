import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataResultComponent } from './data-result.component';

describe('DataResultComponent', () => {
  let component: DataResultComponent;
  let fixture: ComponentFixture<DataResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
