import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenResultComponent } from './token-result.component';

describe('TokenResultComponent', () => {
  let component: TokenResultComponent;
  let fixture: ComponentFixture<TokenResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
