import { Component } from '@angular/core';
import { skillModel } from 'src/app/models/skill.model';
import { SkillsService } from 'src/app/services/skills.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private skillsService : SkillsService){}

  skillsArray!: Array<skillModel>

  url : string = '../../assets/information.json'

  ngOnInit() {
    this.skillsService.getAllSkills(this.url).subscribe((res : any) => {
      this.skillsArray = res["skills"]
    })
  }
}
