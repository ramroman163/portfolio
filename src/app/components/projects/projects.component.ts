import { Component, OnInit } from '@angular/core';
import { projectModel } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  constructor(private projectService : ProjectsService){}

  projects! : Array<projectModel>

  url = '../../assets/information.json'

  ngOnInit(): void {
    this.projectService.getAllProjects(this.url).subscribe(res => {
      this.projects = res["projects"]
    })
  }

}
