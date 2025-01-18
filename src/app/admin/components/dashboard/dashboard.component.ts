import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-dashboard',
  standalone: true, // Standalone component
  imports: [CommonModule, ButtonModule, CardModule, ChartModule, RippleModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}
