import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  
  tl = gsap.timeline();
  ngAfterViewInit(): void {
    // this.tl.fromTo(".anim-typewriter", 8, {
    //   width: "0",
    // }, {
    //   width: "20.18em", /* same as CSS .line-1 width */
    //   ease: SteppedEase.config(37)
    // }, 0);
    // // text cursor animation
    // this.tl.fromTo(".anim-typewriter", 0.5, {
    //   "border-right-color": "rgba(255,255,255,0.75)"
    // }, {
    //   "border-right-color": "rgba(255,255,255,0)",
    //   repeat: -1,
    //   ease: SteppedEase.config(37)
    // }, 0);

    this.tl.fromTo(".txt", { opacity: 0,}, { opacity: 1,duration: 2, delay:2 })
    this.tl.fromTo(".zoom", { opacity: 0, scale:0}, { opacity: 1, scale:1 , duration: 1 })
    this.tl.fromTo(".but", { opacity: 0, x:-100}, { opacity: 1, x:0 , duration: 1.5 })

      $(".owl-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
  }

  caro = [
    {
      "head": "Signature Spices",
      "con": "Our secret spices mixture, carefully crafted and closely guarded, elevates our fried chicken and beef steak to a level that is simply irresistible."
    },
    {
      "head": "Freshness at Its Best",
      "con": "We never compromise on freshness. Every item on our menu is prepared to order, ensuring that our customers experience the fullness of flavor in every bite."
    },
    {
      "head": "Hygiene First",
      "con": "We adhere to the highest standards of cleanliness and hygiene in our preparation process, guaranteeing that our food is not only delicious but also safe for consumption."
    },
    {
      "head": "Health-conscious Choices",
      "con": "Our dedication to providing healthier options sets us apart from conventional fast-food chains. We are committed to catering to the needs of health-conscious consumers without compromising on taste."
    },
    {
      "head": "Menu Innovation",
      "con": "Participate in the creation of new menu items and stay ahead of evolving food trends"
    },
  ]

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
