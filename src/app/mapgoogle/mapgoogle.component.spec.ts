import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapgoogleComponent } from './mapgoogle.component';

describe('MapgoogleComponent', () => {
  let component: MapgoogleComponent;
  let fixture: ComponentFixture<MapgoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapgoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapgoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
