import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from 'src/app/models/experience.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  constructor(private dataService : DataService){}

  experiences! : Array<ExperienceModel>

  url = '../../assets/information.json'

  ngOnInit(): void {
    this.dataService.getAllData().subscribe(res => {
      this.experiences = res["experiences"]
    })
  }
}
