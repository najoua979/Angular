import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from 'src/Modals/Member';
import { MemberService } from 'src/Services/member.service';
import { GLOBAL } from '../app.config';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  dataSource : MatTableDataSource<Member>;
  constructor(private MemberService: MemberService , private dialog:MatDialog) {
    this.dataSource = new MatTableDataSource(this.MemberService.tab);
  }

  ngOnInit(): void {
    this.fetch();
  }


  displayedColumns: string[] = ['id', 'cin', 'nom', 'type', 'cv', 'createdDate', 'actions'];

  Delete(id:string):void{
    //1. ouert la boite de dialogue
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {});
    //2. attendre le retour d'utilisateur 
    dialogRef.afterClosed().subscribe((result) => {
      if (result){
        this.MemberService.deleteMemberById(id).
        then(()=>{this.fetch()})
      }
    });
    
    //3.tester sur le retour
    //4.si le retour ==true executer ici
      
  }

  fetch():void{
    this.MemberService.getAllMembers().then((tab)=>{this.dataSource.data=tab})
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
