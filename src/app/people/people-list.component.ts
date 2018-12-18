
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'people-list',
  templateUrl: `peopleList.template.html`
})


export class PeopleListComponent {
  @Input() people;
  @Output() addPerson = new EventEmitter<any>();
  @Output() editPerson = new EventEmitter<any>();
}


