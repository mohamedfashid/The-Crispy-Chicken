import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss'],
})
export class NutritionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  card = [
    {
      title: 'Classic Crispy Chicken Sandwich',
      content: `<ul class="py-2 ms-3">
      <li>Serving Size: 1 sandwich (180g)</li>
      <li>Calories: 400 kcal</li>
      <li>Total Fat: 15g</li>
      <li>Saturated Fat: 3.5g</li>
      <li>Trans Fat: 0g</li> 
      <li>Cholesterol: 35mg</li> 
      <li>Sodium: 600mg</li> 
      <li>Total Carbohydrates: 50g</li> 
      <li>Dietary Fiber: 3g</li> 
      <li>Sugars: 5g</li> 
      <li>Protein: 20g</li>     
  </ul>`,
      img: 'assets/image/sandwich.jpg',
    },
    {
      title: 'Spicy Crispy Chicken Sandwich',
      content: `<ul class="py-2 ms-3">
      <li>Serving Size: 1 sandwich (180g)</li>
      <li>Calories: 420 kcal</li>
      <li>Total Fat: 16g</li>
      <li>Saturated Fat: 3.8g</li>
      <li>Trans Fat: 0g</li> 
      <li>Cholesterol: 40mg</li> 
      <li>Sodium: 620mg</li> 
      <li>Total Carbohydrates: 51g</li> 
      <li>Dietary Fiber: 3.5g</li> 
      <li>Sugars: 6g</li> 
      <li>Protein: 22g</li>     
  </ul>`,
      img: 'assets/image/signature_sandwich.png',
    },
    {
      title: 'Crispy Chicken Tenders (4 pieces)',
      content: `<ul class="py-2 ms-3">
      <li>Serving Size: 4 pieces (150g)</li>
      <li>Calories: 350 kcal</li>
      <li>Total Fat: 12g</li>
      <li>Saturated Fat: 2.5g</li>
      <li>Trans Fat: 0g</li> 
      <li>Cholesterol: 30mg</li> 
      <li>Sodium: 580mg</li> 
      <li>Total Carbohydrates: 45g</li> 
      <li>Dietary Fiber: 3.5g</li> 
      <li>Sugars: 2g</li> 
      <li>Protein: 18g</li>     
  </ul>`,
      img: 'assets/image/fcpic.png',
    },
    {
      title: 'Juicy Beef Steak',
      content: `<ul class="py-2 ms-3">
      <li>Serving Size: 1 steak (200g)</li>
      <li>Calories: 460 kcal</li>
      <li>Total Fat: 25g</li>
      <li>Saturated Fat: 10g</li>
      <li>Trans Fat: 0g</li> 
      <li>Cholesterol: 90mg</li> 
      <li>Sodium: 680mg</li> 
      <li>Total Carbohydrates: 0g</li> 
      <li>Dietary Fiber: 0g</li> 
      <li>Sugars: 0g</li> 
      <li>Protein: 55g</li>     
  </ul>`,
      img: 'assets/image/beefsteak.jpg',
    },
  ];
}
