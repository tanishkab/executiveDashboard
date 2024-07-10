import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateDataService {

  constructor() { }

  getPageViewData() {
    let data = [
      { y: this.getRandomInteger(100), label: "Referral" },
      { y: this.getRandomInteger(100), label: "Organic Search" },
      { y: this.getRandomInteger(100), label: "Direct" }
    ]
    return data;
  }

  getMRRStatsByCountryData() {
    let data = [
      { x: this.getRandomInteger(100), y: this.getRandomInteger(100), z: this.getRandomInteger(1000), label: "United States" },
      { x: this.getRandomInteger(100), y: this.getRandomInteger(100), z: this.getRandomInteger(1000), label: "United States" },
      { x: this.getRandomInteger(100), y: this.getRandomInteger(100), z: this.getRandomInteger(1000), label: "Austraila" },
      { x: this.getRandomInteger(100), y: this.getRandomInteger(100), z: this.getRandomInteger(1000), label: "Austraila" },
      { x: this.getRandomInteger(100), y: this.getRandomInteger(100), z: this.getRandomInteger(1000), label: "United Kingdom" },
      { x: this.getRandomInteger(100), y: this.getRandomInteger(100), z: this.getRandomInteger(1000), label: "United Kingdom" },
      { x: this.getRandomInteger(100), y: this.getRandomInteger(100), z: this.getRandomInteger(1000), label: "Canada" },
      { x: this.getRandomInteger(100), y: this.getRandomInteger(100), z: this.getRandomInteger(1000), label: "Canada" },
      { x: this.getRandomInteger(100), y: this.getRandomInteger(100), z: this.getRandomInteger(1000), label: "Canada" },
    ]
    console.log(data);
    return data;
  }

  getMRRData() {
    let data = [
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Referral' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Referral' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Referral' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Referral' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Referral' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Referral' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Referral' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Referral' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Search' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Search' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Search' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Search' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Search' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Search' },
      { y: this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Search' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Organic Search' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Organic Search' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Organic Search' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Organic Search' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Organic Search' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Organic Search' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Organic Search' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Direct' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Direct' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Direct' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Direct' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Direct' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Direct' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Direct' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Direct' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Direct' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Direct' },
      { y: -1 * this.getRandomInteger(), x: new Date(2023, this.getRandomMonth()), label: 'Direct' }
    ]
    return data;
  }

  getRandomInteger(multiply: number = 10) {
    return Math.floor(this.getRandomNumber(multiply));
  }

  getRandomNumber(multiply: number) {
    return Math.random() * multiply
  }

  getRandomMonth() {
    var randomMonth = this.getRandomInteger((11 + 1))
    return randomMonth
  }
}
