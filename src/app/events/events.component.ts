import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Evenement } from 'src/Modals/Evenement';
import { EvenemetService } from 'src/Services/evenemet.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  dataSource : MatTableDataSource<Evenement>;


  constructor(private EvenementService: EvenemetService , private dialog:MatDialog) {
    this.dataSource = new MatTableDataSource(this.EvenementService.tab);
   }

  ngOnInit(): void {
    this.fetch();
  }

  displayedColumns: string[] = ['id', 'titre', 'lieu', 'date','actions'];

  Delete(id:string):void{
    //1. ouert la boite de dialogue
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {});
    //2. attendre le retour d'utilisateur 
    dialogRef.afterClosed().subscribe((result) => {
      if (result){
        this.EvenementService.deleteEvenementById(id).
        then(()=>{this.fetch()})
      }
    });
  }
  fetch():void{
    this.EvenementService.getAllEvenemets().then((tab)=>{this.dataSource.data=tab})
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

}
