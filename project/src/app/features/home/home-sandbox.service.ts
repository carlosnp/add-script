import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class HomeSandboxService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {}
  /**
   * Carga el script
   * @param renderer 
   * @param src 
   * @returns 
   */
  public loadScript(renderer: Renderer2, src: string, text: string): HTMLScriptElement {
    const script = renderer.createElement('script');
    script.type = 'text/html';
    script.src = src;
    script.text = text;
    renderer.appendChild(this.document.body, script);
    return script;
  }
}
