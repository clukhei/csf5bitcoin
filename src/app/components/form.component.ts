import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  bitCoinForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactNo: new FormControl('', [Validators.required, Validators.pattern('^(8|9|6)[0-9]{0,7}$')]),
    gender: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    orderDate: new FormControl('', [Validators.required]),
    orderType: new FormControl('', [Validators.required]),
    orderUnit: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,45}$')]),
  })

  constructor() { }

  ngOnInit(): void {
    this.bitCoinForm
  }

}
