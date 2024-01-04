import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  terms=[
    {
      "topic":"Grant of Franchise:",
      "desc": "The Franchisor hereby grants the Franchisee the non-exclusive right and license to operate a Crispy Chicken franchise at [Location] for a term of [Term Length] years, subject to the terms and conditions set forth in this Agreement."
    },
    {
      "topic":"Franchise Fees:",
      "desc": "a. Initial Franchise Fee: The Franchisee shall pay an initial franchise fee of [Initial Fee Amount] upon signing this Agreement.<br>b. Royalty Fee: The Franchisee shall pay a monthly royalty fee of [Royalty Percentage] of gross sales.<br>c. Advertising Fund: The Franchisee shall contribute [Advertising Percentage] of gross sales to the national advertising fund."
    },
    {
      "topic":"Training and Support:",
      "desc": "The Franchisor shall provide initial training to the Franchisee and their designated employees. Ongoing support shall be offered in areas of operations, marketing, and management."
    },
    {
      "topic":"Site Selection and Development:",
      "desc": "The Franchisee shall select a suitable location for the franchise, complying with the Franchisor's specifications for design, layout, and equipment."
    },
    {
      "topic":"Operations:",
      "desc": "The Franchisee shall adhere to the Franchisor's operating procedures, ensuring consistent quality, service, and customer experience."
    },
    {
      "topic":"Supplies and Inventory:",
      "desc": "The Franchisee shall purchase approved supplies, ingredients, and equipment from designated suppliers. Sourcing from non-approved suppliers requires prior written consent."
    },
    {
      "topic":"Intellectual Property:",
      "desc": "The Franchisee is granted a limited, non-transferable right to use the Franchisor's trademarks, logos, and branding solely for the operation of the Crispy Chicken franchise."
    },
    {
      "topic":"Termination and Renewal:",
      "desc": "The Franchisee acknowledges that the Franchisor reserves the right to terminate the Agreement under specified circumstances. Renewal of the franchise term shall be subject to meeting renewal criteria."
    },
    {
      "topic":"Dispute Resolution:",
      "desc": "Any disputes arising under this Agreement shall be resolved through mediation or arbitration in accordance with [Jurisdiction]'s laws."
    },
  ]

}
