import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdemoComponent } from './selectdemo.component';

describe('SelectdemoComponent', () => {
  let component: SelectdemoComponent;
  let fixture: ComponentFixture<SelectdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
