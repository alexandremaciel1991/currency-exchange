import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-previous-cards',
  templateUrl: './previous-cards.component.html',
  styleUrls: ['./previous-cards.component.scss'],
})
export class PreviousCardsComponent {
  @Input() open!: number;
  @Input() high!: number;
  @Input() low!: number;
  @Input() close!: number;
  @Input() date!: string;
  @Input() closeDiff!: number;

  getCloseDiff() {
    return '<mat-icon> expand_less </mat-icon>';
  }
}
