
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  receivedData = {
    contactNo: "83225070",
    dob: "1994-06-05T16:00:00.000Z",
    gender: "female",
    name: "Chong Lu Khei",
    orderDate: "2020-11-26T16:00:00.000Z",
    orderType: "sell",
    orderUnit: "1"
  }
  constructor(private router: Router) {
    /* console.log(history.state.data) */


    /* const data = this.router.getCurrentNavigation().extras.state.data
    console.log(data)
    this.receivedData = JSON.parse(data) 
    console.log(this.receivedData)
   */

  }

  ngOnInit(): void {

  }

}
