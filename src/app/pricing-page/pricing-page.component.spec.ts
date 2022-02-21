import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPageComponent } from './pricing-page.component';

describe('PricingPageComponent', () => {
  let component: PricingPageComponent;
  let fixture: ComponentFixture<PricingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('a pricing-page komponens létezik', () => {
    expect(component).toBeTruthy();
  });

  // Nevek.
  it('első név: Free', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card:first-child h4').textContent).toContain('Free');
  });
  it('második név: Pro', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card:nth-child(2) h4').textContent).toContain('Pro');
  });
  it('harmadik név: Enterprise', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card:nth-child(3) h4').textContent).toContain('Enterprise');
  });

  // Árak.
  it('első ár: $0', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.card:nth-child(1) .card-body .pricing-card-title').textContent;
    expect(content).toContain('$0');
  });
  it('második ár: $15', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.card:nth-child(2) .card-body .pricing-card-title').textContent;
    expect(content).toContain('$15');
  });
  it('harmadik ár: $29', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.card:nth-child(3) .card-body .pricing-card-title').textContent;
    expect(content).toContain('$29');
  });

  // Opciók.
  it('első opciók egyeznek', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.card:nth-child(1) .card-body .list-unstyled').textContent;
    expect(content).toContain('10 tanuló');
  });
  it('második opciók egyeznek', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.card:nth-child(2) .card-body .list-unstyled').textContent;
    expect(content).toContain('Kiemelt email támogatás');
  });
  it('harmadik opciók egyeznek', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.card:nth-child(3) .card-body .list-unstyled').textContent;
    expect(content).toContain('100 GB tárhely');
  });

  // Gombok.
  it('első gomb szövege: Ingyenes regisztráció', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.card:nth-child(1) button').textContent;
    expect(content).toContain('Ingyenes regisztráció');
  });
  it('második gomb szövege: Kezdő lépések', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.card:nth-child(2) button').textContent;
    expect(content).toContain('Kezdő lépések');
  });
  it('harmadik gomb szövege: Kontakt', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.card:nth-child(3) button').textContent;
    expect(content).toContain('Kontakt');
  });

});
