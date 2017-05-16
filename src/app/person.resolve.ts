import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PersonService } from './person.service';
import { Person } from "./person";
import { Location } from "@angular/common";

@Injectable()
export class PersonResolve implements Resolve<Person> {

    constructor(private personService: PersonService, private location: Location) { }

    resolve(route: ActivatedRouteSnapshot): Promise<Person> {
        return this.personService.getPerson(route.paramMap.get('name'), route.queryParamMap.get('page') ? Number(route.queryParamMap.get('page')) : 0).then((person) => {

            if (person) {
                return Promise.resolve(person);
            }
            else {
                //Stop them?
                return Promise.reject("Person not found");
            }

        })
    }
}