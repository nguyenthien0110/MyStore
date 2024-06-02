import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css'],
})
export class PaymentSuccessComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PaymentSuccessComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}
