import { CommonModule } from '@angular/common';
import { EventService } from './event/event.service';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [FooterComponent, MenuComponent],
  providers: [EventService],
  exports: [FooterComponent, MenuComponent],
})
export class CoreModule {}
