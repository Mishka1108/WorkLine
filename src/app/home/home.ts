import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PersonalComponent } from '../personal-component/personal-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [PersonalComponent, CommonModule ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None
})
export class Home {
showRegistration = false;
}
