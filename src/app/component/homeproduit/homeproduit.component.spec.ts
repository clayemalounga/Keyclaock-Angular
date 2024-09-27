import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeproduitComponent } from './homeproduit.component';

describe('HomeproduitComponent', () => {
  let component: HomeproduitComponent;
  let fixture: ComponentFixture<HomeproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeproduitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
