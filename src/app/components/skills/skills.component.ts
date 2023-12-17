import { Component } from '@angular/core';
import { skillModel } from 'src/app/models/skill.model';
import { DataService } from 'src/app/services/data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private dataService : DataService){}

  skillsArray!: Array<skillModel>

  url : string = '../../assets/information.json'

  ngOnInit() {
    this.dataService.getAllData().subscribe((res : any) => {
      this.skillsArray = res["skills"]
    })
  }
}
