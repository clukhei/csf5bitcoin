export class BitCoinForm {
    constructor(
        public name: string,
        public contactNo: string,
        public gender: string,
        public dob: Date,
        public orderDate: Date,
        public orderType: String,
        public orderUnit: String,
        public cryptoPair: String,
        public cryptoPrice: String,
        public qrURL: string,
        public bitcoinAdd: string,


    ) { }
}