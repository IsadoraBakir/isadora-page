import { Component } from '@angular/core';
import { FeaturesModule } from '../../features/features.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
