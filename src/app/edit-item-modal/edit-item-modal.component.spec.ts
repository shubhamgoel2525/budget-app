import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditItemModalComponent } from './edit-item-modal.component';

describe('EditItemModalComponent', () => {
  let component: EditItemModalComponent;
  let fixture: ComponentFixture<EditItemModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
