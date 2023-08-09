import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  menu = [
    {
      "name": "Home",
      "open": false,
      "url": "",
    },
    {
      "name": "Services",
      "open": false,
      "url": "",
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
      "url": "",
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
      "url": "",
    },
    {
      "name": "Our food",
      "open": false,
      "url": "",
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
