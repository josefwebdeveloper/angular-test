import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileViewComponent } from './tile-view.component';

describe('TileViewComponent', () => {
  let component: TileViewComponent;
  let fixture: ComponentFixture<TileViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TileViewComponent]
    });
    fixture = TestBed.createComponent(TileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
