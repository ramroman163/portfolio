import { Component, Input } from '@angular/core';
import { skillModel } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent {

  @Input() skillData! : skillModel;

}
