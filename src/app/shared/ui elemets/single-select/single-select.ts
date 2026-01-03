import { Component } from '@angular/core';
import { StatsCard } from '../../../features/dashboard/components/stats-card/stats-card';
import { CheckCircle, ListTodo } from 'lucide-angular';

@Component({
  selector: 'app-single-select',
  imports: [StatsCard],
  templateUrl: './single-select.html',
  styleUrl: './single-select.css',
})
export class SingleSelect {
  readonly ListTodo = ListTodo;
  readonly CheckCircle = CheckCircle;
}
