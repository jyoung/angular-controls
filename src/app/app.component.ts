import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { createCounterRangeValidator } from './components/counter-input/counter-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-controls';
  outerCounterValue2 = 5;
  outerCounterValue3 = 7;

  form4: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form4 = this.fb.group({
      outerCounterValue4: [9, createCounterRangeValidator(10, 0)]
    });
  }
}
