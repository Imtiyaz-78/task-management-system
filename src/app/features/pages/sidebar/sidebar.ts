import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideAngularModule,
  LayoutDashboard,
  ListTodo,
  Users,
  Settings,
  LogOut,
  Sun,
  Moon,
  Menu,
  X,
  ChevronLeft,
  BarChart3,
} from 'lucide-angular';
import { cn } from '../../../../lib/utils';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  @Input() isCollapsed = false;
  @Input() isMobileOpen = false;
  @Output() onToggle = new EventEmitter<void>();
  @Output() onMobileToggle = new EventEmitter<void>();

  private router = inject(Router);
  user = { name: 'John Doe', role: 'admin' };
  theme = 'light';

  readonly LayoutDashboard = LayoutDashboard;
  readonly ListTodo = ListTodo;
  readonly Users = Users;
  readonly BarChart3 = BarChart3;
  readonly Settings = Settings;
  readonly LogOut = LogOut;
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly Menu = Menu;
  readonly X = X;
  readonly ChevronLeft = ChevronLeft;

  navItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      path: '/dashboard',
      roles: ['admin', 'manager', 'employee'],
    },
    {
      icon: ListTodo,
      label: 'Tasks',
      path: '/dashboard/tasks',
      roles: ['admin', 'manager', 'employee'],
    },
    {
      icon: Users,
      label: 'Team',
      path: '/dashboard/team',
      roles: ['admin', 'manager'],
    },

    {
      icon: BarChart3,
      label: 'Reports',
      path: '/dashboard/team',
      roles: ['admin', 'manager'],
    },
    {
      icon: Settings,
      label: 'Settings',
      path: '/dashboard/team',
      roles: ['admin', 'manager'],
    },
  ];

  get filteredNavItems() {
    return this.navItems.filter((item) => item.roles.includes(this.user.role));
  }

  getInitials(name: string) {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }

  handleLogout() {
    console.log('Logging out...');
    this.router.navigate(['/auth']);
  }

  cn(...args: any[]) {
    return cn(...args);
  }
}
