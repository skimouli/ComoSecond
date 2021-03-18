import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../shared/model/projet';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() project: Project;
  ngOnInit(): void {
  }
  navigation() {
    this.router.navigate(['/project/details'], { queryParams: this.project  });
  }
}
