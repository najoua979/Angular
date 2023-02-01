import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/Modals/Article';
import { ArticleService } from 'src/Services/article.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  dataSource : MatTableDataSource<Article>;

  constructor(private articleService: ArticleService, private dialog : MatDialog ) {
    this.dataSource = new MatTableDataSource(this.articleService.tab);
  }

  displayedColumns: string[] = ['id', 'titre', 'date', 'auteur','actions'];

  ngOnInit(): void {
    this.fetch()
    console.log(this.dataSource)
  }

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
        this.articleService.deleteArticle(id).then(()=>{this.fetch()})
      }
    });
  }

  fetch():void{
    this.articleService.getAllArticles().then((tab)=>{this.dataSource.data=tab})
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
