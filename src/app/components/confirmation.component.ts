
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  receivedData/*  = {
    contactNo: "83225070",
    dob: "1994-06-05T16:00:00.000Z",
    gender: "female",
    name: "Chong Lu Khei",
    orderDate: "2020-11-26T16:00:00.000Z",
    orderType: "buy",
    orderUnit: "1",
    cryptoPair: "SGD/BTC",
    cryptoPrice: 200,
    totalAmt: 400,
    bitcoinAdd: "ldjflksdjfsdga0987",
    qrURL: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.google.com%2F&chs=180x180&choe=UTF-8&chld=L|2'
  } */
  constructor(private router: Router) {
    /* console.log(history.state.data) */


    const data = this.router.getCurrentNavigation().extras.state.data
    console.log(data)
    this.receivedData = JSON.parse(data)
    console.log(this.receivedData)


  }

  ngOnInit(): void {

  }

}
