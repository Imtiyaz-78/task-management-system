import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { cn } from '../../../../lib/utils';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  isCollapsed = signal(false);
  isMobileOpen = signal(false);

  toggleSidebar() {
    this.isCollapsed.set(!this.isCollapsed());
  }

  toggleMobile() {
    this.isMobileOpen.set(!this.isMobileOpen());
  }

  getMainClasses() {
    return cn(
      'flex-1 transition-all duration-300 min-h-screen',
      this.isCollapsed() ? 'lg:ml-[72px]' : 'lg:ml-64'
    );
  }
}
