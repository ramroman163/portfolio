import { Component, Input } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() projectData! : ProjectModel
}
