import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  constructor(private dataService : DataService){}

  projects! : Array<ProjectModel>

  url = '../../assets/information.json'

  ngOnInit(): void {
    this.dataService.getAllData().subscribe(res => {
      this.projects = res["projects"]
    })
  }

}
