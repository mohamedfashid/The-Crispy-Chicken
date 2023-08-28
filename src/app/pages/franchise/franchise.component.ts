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

}
