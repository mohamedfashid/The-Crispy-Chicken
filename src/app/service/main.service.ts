import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  scroll = false

  ngOnInit(): void {
    this.scroll = false;
  }

  menu = [
    {
      "name": "Home",
      "open": false,
      "url": "/home",
    },
    {
      "name": "Services",
      "open": false,
      "url": "/services",
      "child": [
        {
          "name": "Franchise",
          "url": "https://degreed.com/pathway/o84qlvqlp4/pathway",
        },
        {
          "name": "Catering",
          "url": "https://degreed.com/pathway/o84qlvqlp4/pathway",
        },
        {
          "name": "Party",
          "url": "https://degreed.com/pathway/o84qlvqlp4/pathway",
        },
      ]
    },
    {
      "name": "About us",
      "open": false,
      "url": "/aboutus",
      "child": [
        {
          "name": "CC India",
          "url": "https://degreed.com/pathway/o84qlvqlp4/pathway",
        },
        {
          "name": "Join us",
          "url": "https://degreed.com/pathway/o84qlvqlp4/pathway",
        },
      ]
    },
    {
      "name": "Contact us",
      "open": false,
      "url": "/contactus",
    },
    {
      "name": "Our food",
      "open": false,
      "url": "ourfood",
    },
    {
      "name": "Help & Support",
      "open": false,
      "url": "",
      "child": [
        {
          "name": "FAQs",
          "url": "https://degreed.com/pathway/o84qlvqlp4/pathway",
        },
        {
          "name": "Terms & Conditions",
          "url": "https://degreed.com/pathway/o84qlvqlp4/pathway",
        },
      ]
    },
  ]
}
