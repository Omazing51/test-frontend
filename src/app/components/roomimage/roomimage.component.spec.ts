import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomimageComponent } from './roomimage.component';

describe('RoomimageComponent', () => {
  let component: RoomimageComponent;
  let fixture: ComponentFixture<RoomimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
