import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Outil } from 'src/Modals/Outil';
import { OutilService } from 'src/Services/outil.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  dataSource: MatTableDataSource<Outil>;

  constructor(private OutilService : OutilService, private dialog : MatDialog) {
    this.dataSource= new MatTableDataSource(this.OutilService.tab) ;
   }


  ngOnInit(): void {
    this. fetch ()
  }

  displayedColumns : string[] = ['id' ,'date' , 'source', 'actions']

  Delete(id : string): void{
    //1. ouvrir boite de dialogue
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    //2.attente de reour de l'utilisateur
    dialogRef.afterClosed().subscribe(result => {
      //4. si result = true
      if (result){
        this.OutilService.deleteOutil(id).then(()=>{this.fetch()})
      }
    });
  }

  fetch (): void{
    this.OutilService.getAllOutils().then((tab)=> {this.dataSource.data = tab;})
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
