import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { cn } from '../../../../lib/utils';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-home-page',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  // state management using signals
  isCollapsed = signal(false);
  isMobileOpen = signal(false);

  toggleSidebar() {
    this.isCollapsed.update((v) => !v);
  }

  toggleMobile() {
    this.isMobileOpen.update((v) => !v);
  }

  // helper function for dynamic classes (cn utility)
  getMainClasses() {
    return cn(
      'flex-1 transition-all duration-300 min-h-screen',
      this.isCollapsed() ? 'lg:ml-[72px]' : 'lg:ml-64'
    );
  }
}
