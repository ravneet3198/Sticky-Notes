import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestickyComponent } from './updatesticky.component';

describe('UpdatestickyComponent', () => {
  let component: UpdatestickyComponent;
  let fixture: ComponentFixture<UpdatestickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestickyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
