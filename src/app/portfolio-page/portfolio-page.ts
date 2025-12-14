import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { SectionTitle } from '../shared/section-title/section-title';

@Component({
  selector: 'app-portfolio-page',
  imports: [SectionTitle],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.css',
})
export class PortfolioPage {
  protected readonly imagePaths = signal([
    'poert1.png',
    'port2.png',
    'port3.png',
    'poert1.png',
    'port2.png',
    'port3.png',
  ]);

  modal = viewChild<ElementRef<HTMLDialogElement>>('modal');

  protected readonly selectedImagePath = signal<string | undefined>(undefined);

  onShowModal(path: string) {
    this.selectedImagePath.set(path);
    this.modal()?.nativeElement.showModal();
  }
}
