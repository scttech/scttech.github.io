import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWelcomeComponent } from './tutorials.component';

describe('BlogWelcomeComponent', () => {
  let component: BlogWelcomeComponent;
  let fixture: ComponentFixture<BlogWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
