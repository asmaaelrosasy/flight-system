import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  NavigateToScreen1() {
    // (document.getElementById('contact') as HTMLInputElement).setAttribute('style', 'display:none');
    this.router.navigate(['screen1']);
  }

  NavigateToScreen3() {
    console.log('asmo4a');
    // (document.getElementById('screen1') as HTMLInputElement).setAttribute('style', 'display:none');
    this.router.navigate(['screen3']);
  }
}
