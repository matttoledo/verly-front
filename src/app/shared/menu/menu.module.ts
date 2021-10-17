import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [ MenuComponent ],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    InputTextModule,
    MenubarModule
  ],
  exports:[ MenuComponent ]

})
export class MenuModule { }
