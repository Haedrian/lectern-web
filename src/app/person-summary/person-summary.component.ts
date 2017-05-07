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

  ngOnInit() {
    //Wipe
    this.persons = null;

    this.route.queryParams.subscribe(params => {

      this.persons = null

      var page = params['page'];
      if (page) {
        page = Number(page);
      }

      var query = params['query'];
      
      this.getPeople(query, page);

    });
  }

  getPeople(query, page) {
    this.persons = [];
    this.ps.getPeople(query, page).then((people) => {
      this.persons = people;
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
