import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BitcoinApiService {

  constructor(private http: HttpClient) { }

  getCryptoPair() {
    return this.http.get('http://csf5bitcoin-be.herokuapp.com/bitcoin/BTCSGD')
  }
}
