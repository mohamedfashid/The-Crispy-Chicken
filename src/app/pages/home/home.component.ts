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

    this.tl.fromTo(".txt", { opacity: 0, }, { opacity: 1, duration: 2, delay: 2 })
    this.tl.fromTo(".zoom", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 })
    this.tl.fromTo(".but", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.5 })

    $(".img-owl-carousel .owl-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.img-owl-carousel .custom-nav',
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    });

    $(".owl-carousel").owlCarousel({
      autoplay: false,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: true,
      loop: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });

    
  }

  imgcaro = [
    {
      "img": "assets/image/caro/caro1.jpg",
    },
    {
      "img": "assets/image/caro/caro2.jpg",
    },
    {
      "img": "assets/image/caro/caro3.jpg",
    },
    {
      "img": "assets/image/caro/caro4.jpg",
    },
  ]

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



}
