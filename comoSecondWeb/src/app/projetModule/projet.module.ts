import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjetRoutingModule } from './project.routing.modul';
import { LayoutModule } from '../shared/module/layout/layout.module';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PorjectDetailsComponent } from './porject-details/porject-details.component';



@NgModule({
  declarations: [ProjectComponent, ProjectsComponent, ProjectFormComponent, PorjectDetailsComponent],
  imports: [
    CommonModule,
    ProjetRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class ProjetModule { }
