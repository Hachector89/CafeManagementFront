import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material-module';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
})
export class DashboardComponent {

  ngAfterViewInit() { }

	constructor() {
	}

}
