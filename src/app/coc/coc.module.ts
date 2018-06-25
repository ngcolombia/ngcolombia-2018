import { CocComponent } from './coc/coc.component';
import { CocRoutingModule } from './coc-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, CocRoutingModule, SharedModule],
  declarations: [CocComponent],
})
export class CocModule {}
