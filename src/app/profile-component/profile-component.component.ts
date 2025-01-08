import { BottomNavigationComponent } from './../bottom-navigation/bottom-navigation.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  standalone: true,
  imports: [BottomNavigationComponent],
  templateUrl: './profile-component.component.html',
  styleUrl: './profile-component.component.css'
})
export class ProfileComponentComponent {

}
