import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TooltipDirective} from "./tooltip.directive";
import {TooltipComponent} from "./tooltip.component";



@NgModule({
  declarations: [
    TooltipComponent,
    TooltipDirective,
  ],
  exports: [
    TooltipDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TooltipModule { }
