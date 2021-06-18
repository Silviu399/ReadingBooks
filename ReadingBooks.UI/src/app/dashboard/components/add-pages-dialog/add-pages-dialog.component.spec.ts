import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPagesDialogComponent } from './add-pages-dialog.component';

describe('AddPagesDialogComponent', () => {
  let component: AddPagesDialogComponent;
  let fixture: ComponentFixture<AddPagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPagesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
