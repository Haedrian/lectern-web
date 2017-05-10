import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from "../person";
import 'rxjs/add/operator/switchMap';

import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  public person: Person;

  constructor(private personService: PersonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.person = null;
    this.route.params.subscribe(params => {
      this.route.queryParams.subscribe((query) => {
        this.personService.getPerson(params['name'], query['page']).then((person) => {
          this.person = person;
        });
      });
    });
  }

}
