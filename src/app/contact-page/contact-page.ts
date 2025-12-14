import { Component } from '@angular/core';
import { SectionTitle } from '../shared/section-title/section-title';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  imports: [SectionTitle, FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  onSubmit() {
    console.log('form submitted');
  }
}
