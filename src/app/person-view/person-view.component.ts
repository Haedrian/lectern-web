import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
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

  amountPerPage = 20;
  totalPages = 0;
  currentPage = 0;

  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.person = null;

    this.currentPage = this.route.queryParamMap['page'];
    if (this.currentPage) {
      this.currentPage = Number(this.currentPage);
    } else {
      this.currentPage = 0;
    }

    this.person = this.route.snapshot.data['person'];

    return this.personService.getPersonArticleCount(this.route.paramMap['name']).then((total) => {
      this.totalPages = Math.floor(total / this.amountPerPage);
    })

  }

  changePage(changeTo) {
    this.router.navigate([], { queryParamsHandling: "merge", queryParams: { page: changeTo } });
  }

}
