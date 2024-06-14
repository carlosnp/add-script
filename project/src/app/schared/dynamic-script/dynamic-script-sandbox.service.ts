import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { TypeMimeEnum } from './models';

@Injectable()
export class DynamicScriptSandboxService {
  /**
   * Construtor de servicio
   * @param document 
   */
  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {}
  /**
   * Carga un script
   * @param renderer 
   * @param src 
   * @param text 
   * @param type 
   * @returns 
   */
  public loadScript(renderer: Renderer2, src: string, text: string, type: TypeMimeEnum): HTMLScriptElement {
    const script = renderer.createElement('script');
    script.type = type;
    script.src = src;
    script.text = text;
    renderer.appendChild(this.document.body, script);
    return script;
  }
}
