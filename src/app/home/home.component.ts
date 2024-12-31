import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  rooms = [
    { image: '/assets/room1.jpg' },
    { image: '/assets/room1.jpg' },
    { image: '/assets/room1.jpg' },
    { image: '/assets/room1.jpg' },
    { image: '/assets/room1.jpg' },
    { image: '/assets/room1.jpg' }
  ];

}
