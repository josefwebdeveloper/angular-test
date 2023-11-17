import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileEventComponent } from './tile-event.component';

describe('TileComponent', () => {
  let component: TileEventComponent;
  let fixture: ComponentFixture<TileEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TileEventComponent]
    });
    fixture = TestBed.createComponent(TileEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
