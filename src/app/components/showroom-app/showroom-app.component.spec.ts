import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomAppComponent } from './showroom-app.component';

describe('ShowroomAppComponent', () => {
  let component: ShowroomAppComponent;
  let fixture: ComponentFixture<ShowroomAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
