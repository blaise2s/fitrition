import { Component, OnInit } from '@angular/core';
import { LinkData } from 'neutron-components-angular';

@Component({
  selector: 'fitrition-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Fitrition';
  links: LinkData[] = [
    // { title: 'Fitness', path: '/fitness' },
    // { title: 'Nutrition', path: '/nutrition' },
    // { title: 'Recipes', path: '/recipes' },
    // { title: 'Health', path: '/health' },
    // { title: 'Wellness', path: '/wellness' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
