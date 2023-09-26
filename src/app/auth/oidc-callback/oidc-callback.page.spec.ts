import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OidcCallbackPage } from './oidc-callback.page';

describe('OidcCallbackPage', () => {
  let component: OidcCallbackPage;
  let fixture: ComponentFixture<OidcCallbackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OidcCallbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
