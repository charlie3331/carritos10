import { Component } from '@angular/core';
import { SafePipe } from '../safe.pipe';

@Component({
  selector: 'app-about',
  imports: [SafePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


}
