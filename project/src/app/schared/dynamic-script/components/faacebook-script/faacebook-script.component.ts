import { Component, Input, OnDestroy, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { DynamicScriptSandboxService } from '../../dynamic-script-sandbox.service';
import { pixelScript } from '../../../../../assets';
import { TypeMimeEnum } from '../../models';
import { FACEBOOK_SCRIPT_PATH } from '../../constants';

const SCRIPT_PATH = FACEBOOK_SCRIPT_PATH;
const SCRIPT_TYPE = TypeMimeEnum['text/html'];

@Component({
  selector: 'app-faacebook-script',
  template: ''
})
export class FaacebookScriptComponent implements OnDestroy {
  /**
   * Component destroyed stream
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * Id de facebook
   */
  @Input()
  facebookId: string = '';
  /**
   * Constructor del componente
   * @param renderer 
   * @param sandbox 
   */
  constructor(
    private renderer: Renderer2,
    private sandbox: DynamicScriptSandboxService
  ) { }
  /**
   * Despues de iniciar la vista
   */
  ngAfterViewInit() {
    const text = pixelScript(this.facebookId);
    const scriptElement = this.sandbox.loadScript(
      this.renderer,
      SCRIPT_PATH,
      text,
      SCRIPT_TYPE,
    );
    scriptElement.onload = (data: any) => {
      console.log("Google API Script loaded", data);
    };
    scriptElement.onerror = (err: any) => {
      console.log("Could not load the Google API Script!", err);
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
