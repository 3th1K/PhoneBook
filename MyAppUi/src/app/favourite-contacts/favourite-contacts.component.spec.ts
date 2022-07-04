import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteContactsComponent } from './favourite-contacts.component';

describe('FavouriteContactsComponent', () => {
  let component: FavouriteContactsComponent;
  let fixture: ComponentFixture<FavouriteContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
