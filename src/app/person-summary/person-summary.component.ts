import { Component, OnInit } from '@angular/core';
import { PersonService } from "../person.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Person } from "../person";

@Component({
  selector: 'app-person-summary',
  templateUrl: './person-summary.component.html',
  styleUrls: ['./person-summary.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ps: PersonService, private router: Router) { }

  persons: Person[];
  searchTerm: string;

  amountPerPage = 20;
  totalPages = 0;
  currentPage = 0;

  ngOnInit() {
    //Wipe
    this.persons = null;

    this.route.queryParams.subscribe(params => {

      this.persons = null

      this.currentPage = params['page'];
      if (this.currentPage) {
        this.currentPage = Number(this.currentPage);
      } else {
        this.currentPage = 0;
      }

      var query = params['query'];

      this.getPeople(query, this.currentPage);

    });
  }

  changePage(changeTo) {
    this.router.navigate([], { queryParamsHandling: "merge", queryParams: { page: changeTo } });
  }

  getPeople(query, page) {
    this.persons = [];
    this.ps.getPeople(query, page).then((people) => {
      this.persons = people;

      return this.ps.getPeopleCount(query).then((total) => {
        this.totalPages = Math.floor(total / this.amountPerPage);
      });
    })
  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.router.navigate(['people'], { queryParams: { query: searchTerm } });
    } else {
      //Clear the search term
      this.router.navigate(['people']);
    }
  }

}
