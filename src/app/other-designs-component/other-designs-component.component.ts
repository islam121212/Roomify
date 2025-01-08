import { BottomNavigationComponent } from './../bottom-navigation/bottom-navigation.component';
import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-other-designs-component',
  standalone: true,
  imports: [BottomNavigationComponent],
  templateUrl: './other-designs-component.component.html',
  styleUrl: './other-designs-component.component.css'
})
export class OtherDesignsComponentComponent {

}
