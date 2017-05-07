import { Component, OnInit } from '@angular/core';
import { PersonService } from "../person.service";
import { Person } from "../person";

@Component({
  selector: 'app-person-summary',
  templateUrl: './person-summary.component.html',
  styleUrls: ['./person-summary.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private ps: PersonService) { }

  persons: Person[];

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.persons = [];
    this.ps.getPeople().then((people) => {
      this.persons = people;
    })
  }

}
