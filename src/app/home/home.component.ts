import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTab, MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule,MatToolbar,MatTabsModule,MatExpansionModule,MatSlideToggle,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
