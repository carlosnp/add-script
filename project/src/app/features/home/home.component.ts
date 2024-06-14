import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { pixelScript } from '../../../assets';
import { HomeSandboxService } from './home-sandbox.service';

const SCRIPT_PATH = "/assets/scripts/pixel.script.ts";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy {
  /**
   * Component destroyed stream
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * Constructor del componente
   * @param renderer 
   * @param sandbox 
   */
  constructor(
    private renderer: Renderer2,
    private sandbox: HomeSandboxService
  ) {}
  /**
   * Despues de iniciar la vista
   */
  ngAfterViewInit() {
    const text = pixelScript('12312312312321');
    const scriptElement = this.sandbox.loadScript(
      this.renderer,
      SCRIPT_PATH,
      text
    );
    scriptElement.onload = () => {
      console.log("Google API Script loaded");
    };
    scriptElement.onerror = () => {
      console.log("Could not load the Google API Script!");
    };
  }
  /**
   * Destructor del componente
   */
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
