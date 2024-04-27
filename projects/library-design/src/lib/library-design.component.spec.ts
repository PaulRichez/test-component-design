import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDesignComponent } from './library-design.component';

describe('LibraryDesignComponent', () => {
  let component: LibraryDesignComponent;
  let fixture: ComponentFixture<LibraryDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
