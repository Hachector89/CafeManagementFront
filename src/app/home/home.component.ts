import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BestSellerComponent } from '../best-seller/best-seller.component';


@Component({
  selector: 'app-home',
  imports: [MatIconModule, BestSellerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

}
