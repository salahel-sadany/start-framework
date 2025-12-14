import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.html',
  styleUrl: './section-title.css',
  host: {
    '[style.--divider-background]': 'color()',
  },
})
export class SectionTitle {
  title = input.required<string>();
  color = input<string>();
}
