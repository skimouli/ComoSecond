import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

const importe = [
  FlexLayoutModule
]

@NgModule({
  imports: [...importe],
  exports: [...importe]
})
export class LayoutModule {

}
