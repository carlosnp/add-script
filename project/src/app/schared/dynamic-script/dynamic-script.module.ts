import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicScriptSandboxService } from './dynamic-script-sandbox.service';
import { FaacebookScriptComponent, GoogleScriptComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [FaacebookScriptComponent, GoogleScriptComponent],
  exports: [FaacebookScriptComponent,GoogleScriptComponent],
  providers: [DynamicScriptSandboxService]
})
export class DynamicScriptModule {}
