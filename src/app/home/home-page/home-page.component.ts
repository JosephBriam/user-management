// home-page.component.ts
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state('default', style({
        transform: 'scale(1)',
        boxShadow: 'none'
      })),
      state('hovered', style({
        transform: 'scale(1.05)',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)'
      })),
      transition('default <=> hovered', animate('300ms ease-in-out')),
    ]),
  ]
})
export class HomePageComponent {
  hovered = false;
  hovered2 = false;
}
