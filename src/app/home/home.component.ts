import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  type: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  type: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(WorkspaceDialog, {
      width: '250px',
      data: {name: this.name, type: this.type}
    });
  }

  // ngOnInit() {
  // }

}

@Component({
  selector: 'app-home',
  templateUrl: './home-dialog.component.html',
})
export class WorkspaceDialog {

  constructor(
    public dialogRef: MatDialogRef<WorkspaceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
