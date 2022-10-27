import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormResultsComponent } from './app-form-results.component';

describe('AppFormResultsComponent', () => {
  let component: AppFormResultsComponent;
  let fixture: ComponentFixture<AppFormResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
