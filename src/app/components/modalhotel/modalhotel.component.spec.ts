import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalhotelComponent } from './modalhotel.component';

describe('ModalhotelComponent', () => {
  let component: ModalhotelComponent;
  let fixture: ComponentFixture<ModalhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalhotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
