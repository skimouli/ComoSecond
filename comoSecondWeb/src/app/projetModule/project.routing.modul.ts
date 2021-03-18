import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PorjectDetailsComponent } from './porject-details/porject-details.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Route[] = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/form', component: ProjectFormComponent },
  { path: 'project/details', component: PorjectDetailsComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule {

}
