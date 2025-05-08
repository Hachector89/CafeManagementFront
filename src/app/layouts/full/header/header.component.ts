import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatMenuModule,MatIconModule],
  templateUrl: './header.component.html',
  standalone: true
})
export class HeaderComponent {

    role: any;
    constructor(private router: Router,
      private dialog: MatDialog) {
  
    }

}
