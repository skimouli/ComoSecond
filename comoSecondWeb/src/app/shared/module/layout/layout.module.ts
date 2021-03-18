import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SafePipe } from './SafePipe';

const importe = [
  FlexLayoutModule,
  
]

@NgModule({
  declarations: [SafePipe],
  imports: [...importe],
  exports: [...importe, SafePipe]
})
export class LayoutModule {

}
