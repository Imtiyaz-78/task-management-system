import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { cn } from '../../../../../lib/utils';

type Variant = 'default' | 'primary' | 'success' | 'warning' | 'destructive';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './stats-card.html',
})
export class StatsCard {
  readonly cn = cn;

  // Default values set kar di taaki bina props ke error na aaye
  @Input() title: string = 'Stat';
  @Input() value: number | string = 0;
  @Input() icon: any = null;
  @Input() trend?: { value: number; isPositive: boolean };
  @Input() variant: Variant = 'default';
  @Input() className: string = '';

  get containerClasses() {
    const variantStyles: Record<Variant, string> = {
      default: 'bg-card border-border',
      primary: 'bg-primary/10 border-primary/20',
      success: 'bg-success/10 border-success/20',
      warning: 'bg-warning/10 border-warning/20',
      destructive: 'bg-destructive/10 border-destructive/20',
    };
    return this.cn(
      'relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg',
      variantStyles[this.variant],
      this.className
    );
  }

  get iconContainerClasses() {
    const iconStyles: Record<Variant, string> = {
      default: 'bg-muted text-foreground',
      primary: 'bg-primary/20 text-primary',
      success: 'bg-success/20 text-success',
      warning: 'bg-warning/20 text-warning',
      destructive: 'bg-destructive/20 text-destructive',
    };
    return this.cn('rounded-lg p-3', iconStyles[this.variant]);
  }
}
