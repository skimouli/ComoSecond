import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../shared/model/projet';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }
  @Input() project: Project;
  ngOnInit(): void {
  }

}
