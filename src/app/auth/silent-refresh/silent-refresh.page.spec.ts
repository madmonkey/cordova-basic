import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SilentRefreshPage } from './silent-refresh.page';

describe('SilentRefreshPage', () => {
  let component: SilentRefreshPage;
  let fixture: ComponentFixture<SilentRefreshPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SilentRefreshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
