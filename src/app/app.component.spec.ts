import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('1. Az oldal címe: Struktúraváltás', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top h5').textContent;
    expect(content).toContain('Struktúraváltás');
  });

  // Menüpontok.
  it('első menüpont: Szolgáltatások', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top nav a:nth-child(1)').textContent;
    expect(content).toContain('Szolgáltatások');
  });
  it('első menüpont linkje: /services', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('.sticky-top nav a:nth-child(1)').getAttribute('href');
    expect(link).toContain('/services');
  });

  it('második menüpont: Vállalati ügyfelek', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top nav a:nth-child(2)').textContent;
    expect(content).toContain('Vállalati ügyfelek');
  });
  it('második menüpont linkje: /enterprise', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('.sticky-top nav a:nth-child(2)').getAttribute('href');
    expect(link).toContain('/enterprise');
  });

  it('harmadik menüpont: Támogatás', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top nav a:nth-child(3)').textContent;
    expect(content).toContain('Támogatás');
  });
  it('harmadik menüpont linkje: /support', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('.sticky-top nav a:nth-child(3)').getAttribute('href');
    expect(link).toContain('/support');
  });

  it('negyedik menüpont: Árak', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top nav a:nth-child(4)').textContent;
    expect(content).toContain('Árak');
  });
  it('negyedik menüpont linkje: /prices', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('.sticky-top nav a:nth-child(4)').getAttribute('href');
    expect(link).toContain('/prices');
  });

  it('regisztráció gomb szövege: Regisztráció', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top .btn-outline-primary').textContent;
    expect(content).toContain('Regisztráció');
  });



});
