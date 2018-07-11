import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})

export class FormvalidationComponent implements OnInit {
 model:any = {}
  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    alert(JSON.stringify(this.model))
  }
  
 
 

}
