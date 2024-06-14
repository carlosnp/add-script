import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicScriptSandboxService } from './dynamic-script-sandbox.service';
import { FaacebookScriptComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [FaacebookScriptComponent],
  exports: [FaacebookScriptComponent],
  providers: [DynamicScriptSandboxService]
})
export class DynamicScriptModule {}
