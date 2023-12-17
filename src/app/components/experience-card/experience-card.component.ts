import { Component, Input } from '@angular/core';
import { ExperienceModel } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent {
  @Input() experienceData! : ExperienceModel;
}
