import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: {
    '(window:scroll)': 'updateHeaderPadding()',
  },
})
export class Header {
  protected isScrolled = signal(false);
  protected isNavOpened = signal(false);

  updateHeaderPadding() {
    if (window.scrollY > 15) {
      this.isScrolled.set(true);
    } else {
      this.isScrolled.set(false);
    }
  }

  toggleNav() {
    this.isNavOpened.update((current) => !current);
  }
}
