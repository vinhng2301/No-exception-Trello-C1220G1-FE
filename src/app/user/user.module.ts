import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { BoardComponent } from './board/board.component';
import { WorkspaceComponent } from './workspace/workspace.component';



@NgModule({
  declarations: [HomepageComponent, BoardComponent, WorkspaceComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
