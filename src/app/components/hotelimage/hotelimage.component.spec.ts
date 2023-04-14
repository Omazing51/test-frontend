import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelimageComponent } from './hotelimage.component';

describe('HotelimageComponent', () => {
  let component: HotelimageComponent;
  let fixture: ComponentFixture<HotelimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
