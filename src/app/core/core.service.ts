import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: any, action: any = 'Done') {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
