import { Component } from '@angular/core';
import { SectionTitle } from '../shared/section-title/section-title';

@Component({
  selector: 'app-home-page',
  imports: [SectionTitle],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
