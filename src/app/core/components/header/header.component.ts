import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './interface/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'CATEGORÍAS',
      // icon: 'help',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      path: 'categories',
    },
    {
      label: 'INICIAR SESIÓN',
      // icon: 'login',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      path: 'login',
    },
  ];

  constructor(private router: Router) {

  }

  ngOnInit(): void {}

  checkRoute(): boolean {
    return  this.router.url === '/login' ||  this.router.url.includes('/signup');
  }

  checkRouteLanding(): boolean {
    return !this.router.url.includes('/login') &&  !this.router.url.includes('/signup');
  }
}
