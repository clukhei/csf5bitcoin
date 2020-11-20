import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import * as moment from 'moment'
import { Router } from '@angular/router';
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
    dob: new FormControl('', [Validators.required, dateValidator()]),
    orderDate: new FormControl('', [Validators.required]),
    orderType: new FormControl('', [Validators.required]),
    orderUnit: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,45}$')]),
    cryptoPair: new FormControl({ value: 'SGD/BTC', disabled: true }),
    cryptoPrice: new FormControl(''),
    qrURL: new FormControl(''),
    bitcoinAdd: new FormControl('')
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.bitCoinForm
    console.log(this.bitCoinForm.get('dob').value)

    console.log(new Date().getTime())
    console.log(this.bitCoinForm.get('name').invalid)
  }

  todayDate: Date = new Date()

  submitOrder() {
    console.log(this.bitCoinForm.get('name').value)
    const parsedForm = JSON.stringify(this.bitCoinForm.value)
    this.router.navigate(['/confirmation'], { state: { data: parsedForm } })
  }

  reset(formDirective) {
    formDirective.reset()
    this.bitCoinForm.reset()
  }
  getErrorMsg() {
    return "Error"
  }
}


function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const today = moment()
    const minDOB = today.subtract(21, 'years')

    if (!control && control.value) {
      return null
    }
    return minDOB.isBefore(control.value) ? { invalidDate: 'You must be 21 years old or older' } : null
  }
}