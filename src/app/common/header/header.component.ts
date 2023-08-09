import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public service:MainService,public router:Router) { }

  ngOnInit(): void {
  }

  selected = -1
  c_selected :any []= []

  hover(n:any){
    this.selected = n;
  }

  show(n:any){
    this.c_selected[n] = !this.c_selected[n];
  }
}
