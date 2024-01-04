import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.scss']
})
export class FranchiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  card = [
    {
      "title": "Established Brand",
      "content": "Join a recognized brand with a loyal customer base and a reputation for excellence.",
      "img": "fa-3x fa-regular fa-copyright",
    },
    {
      "title": "Proven Business Model",
      "content": "Benefit from a time-tested business model that has proven successful in multiple locations.",
      "img": "fa-3x fa-solid fa-briefcase",
    },
    {
      "title": "Training and Support",
      "content": "Receive comprehensive training and ongoing support from our experienced team to help you run your franchise smoothly.",
      "img": "fa fa-3x fa-user-tie",
    },
    {
      "title": "Marketing Assistance",
      "content": "Avail of marketing strategies and materials to boost your presence in the local market and attract more customers.",
      "img": "fa-3x fa-solid fa-chart-simple",
    },
    // {
    //   "title": "Menu Innovation",
    //   "content": "Participate in the creation of new menu items and stay ahead of evolving food trends",
    //   "img": "fa-3x fa-solid fa-lightbulb",
    // },
  ]

  cardnew = [
    {
      "title": "Submit Your Inquiry",
      "content": "Fill out the franchise inquiry form below to express your interest in joining our franchise family. ",
      "img": "fa-3x fa-solid fa-square-phone",
    },
    {
      "title": "Initial Consultation ",
      "content": "Our team will reach out to schedule an initial consultation to discuss your business goals and answer any questions you may have.",
      "img": "fa-3x fa-solid fa-briefcase",
    },
    {
      "title": "Location Selection",
      "content": "We'll work together to find the ideal location for your Crispy Chicken restaurant.",
      "img": "fa-3x fa-solid fa-map-location",
    },
    {
      "title": "Franchise Agreement",
      "content": "Review and sign the franchise agreement, outlining the terms and conditions of our partnership. ",
      "img": "fa-3x fa-solid fa-handshake",
    },
    {
      "title": "Training and Support",
      "content": "Attend our comprehensive training program to equip you with all the knowledge needed to run a successful Crispy Chicken franchise. ",
      "img": "fa-3x fa-solid fa-headset",
    },
    {
      "title": "Grand Opening",
      "content": " With our support, launch your Crispy Chicken restaurant with a grand opening event that attracts customers from day one. ",
      "img": "fa-3x fa-solid fa-shop",
    },
  ]

}
