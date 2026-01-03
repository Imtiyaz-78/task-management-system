import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  CheckSquare,
  Users,
  BarChart3,
  Shield,
  ArrowRight,
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  // Define icons for use in the template
  readonly CheckSquare = CheckSquare;
  readonly Users = Users;
  readonly BarChart3 = BarChart3;
  readonly Shield = Shield;
  readonly ArrowRight = ArrowRight;

  features = [
    { icon: this.CheckSquare, title: 'Task Management', desc: 'Create, assign, and track tasks' },
    { icon: this.Users, title: 'Role-Based Access', desc: 'Admin, Manager, Employee roles' },
    { icon: this.BarChart3, title: 'Analytics', desc: 'Track progress with dashboards' },
    { icon: this.Shield, title: 'Secure', desc: 'Enterprise-grade security' },
  ];
}
