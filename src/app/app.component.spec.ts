import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const instancia = fixture.componentInstance;
    expect(instancia).toBeTruthy();
  });

  it(' "mynewapp"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const instancia = fixture.componentInstance;
    expect(instancia.title).toBe('mynewapp');
  });

  it('h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const elemento = fixture.nativeElement as HTMLElement;
    expect(elemento.querySelector('h1')?.textContent).toContain('Hello, mynewapp');
  });

});
