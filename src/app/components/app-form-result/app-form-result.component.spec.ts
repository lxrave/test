import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormResultComponent } from './app-form-result.component';

describe('AppFormResultComponent', () => {
  let component: AppFormResultComponent;
  let fixture: ComponentFixture<AppFormResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
