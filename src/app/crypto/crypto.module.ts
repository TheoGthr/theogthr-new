import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoComponent } from './crypto.component';
import { CryptoRoutingModule } from './crypto-routing.module';
import { CoreModule } from '../core.module';

@NgModule({
  declarations: [CryptoComponent],
  imports: [CommonModule, CryptoRoutingModule, CoreModule],
  exports: [CryptoComponent],
})
export class CryptoModule {}
