import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { ResourceService } from './service/resourceService';

@NgModule({
  providers: [ResourceService],
  imports: [HttpClientModule]
})

export class coreModule {

}
