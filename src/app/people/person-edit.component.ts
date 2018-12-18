
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'person-edit',
  templateUrl: `PersonEdit.template.html`
})

export class PersonEditComponent implements OnInit {

  personForm: FormGroup;

  @Input() person;
  @Output() savePerson = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    
    this.personForm = this.fb.group({
                        id: '',
                        name: '',
                        surname: '',
                        twitter: ''
                      });

  }

  ngOnInit() {

    this.personForm.setValue({
      id: this.person.id || -1,
      name: this.person.name || '',
      surname: this.person.surname || '',
      twitter: this.person.twitter || ''
    });
    
  }

  onPersonFormSubmit() {
    let dataModel = this.personForm.value;
    this.savePerson.emit(dataModel);
  }

}
