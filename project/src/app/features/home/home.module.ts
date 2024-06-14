import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { HomeSandboxService } from './home-sandbox.service';
import { DynamicScriptModule } from '../../schared';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, DynamicScriptModule],
  declarations: [HomeComponent],
  exports: [],
  providers: [HomeSandboxService],
})
export class HomeModule {}
