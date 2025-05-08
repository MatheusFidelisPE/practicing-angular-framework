import { Component } from '@angular/core';
import { MasterComponent } from './components/master/master.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [MasterComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  
  title = 'Aurora Tuors - Travel with us';
}
