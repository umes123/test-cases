import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 form = new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  email: new FormControl('', [
    Validators.required,
    Validators.email
  ]),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ])
  
 });
  constructor() { }

  get firstname(){
    return this.form.get('firstName')
  }
  ngOnInit() {
  }

  onSubmit(){
    alert(JSON.stringify(this.form.value));
  }

}
