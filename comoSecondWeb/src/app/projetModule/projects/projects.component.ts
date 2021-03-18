import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/model/projet';
import { ResourceService } from '../../shared/module/core/service/resourceService';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor(private service: ResourceService) {

  }
  ngOnInit(): void {

    this.service.fetch<Project[]>('https://localhost:44371/Projet').subscribe(

      (data: Project[]) => {
        this.projects = data;
      });
    
  }

}
