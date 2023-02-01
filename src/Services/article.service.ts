import { Injectable } from '@angular/core';
import { Article } from 'src/Modals/Article';
import { GLOBAL } from 'src/app/app.config';
import { MemberService } from './member.service';
import { Member } from 'src/Modals/Member';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tab: Article[] = GLOBAL._DB.articles;
  member !:Member;

  constructor(private memberService : MemberService,private httpClient: HttpClient) { }


  getArticleById(id:string) : Promise <Article>{
    //return new Promise(resolve=>resolve (this.tab.filter(item=>item.id===id)[0]??null))
     return this.httpClient.get<Article>(`/api/PUBLICATION-SERVICE/publication/${id}`).toPromise();
  }

  affect(selected:string, id:string): Promise<void> {

    //this.memberService.getMemberById(selected).then((M)=>{this.member=M})
    //   console.log(this.member.nom)
    return this.httpClient.put<void>(`/api/MEMBER-SERVICE/membres/${selected}/publication/${id}`,{}).toPromise();
   // this.getArticleById(id).then((article)=>{article.auteur=this.member.nom})
   // return new Promise(resolve => resolve () );
  }

  saveArticle(article : any) : Promise<Article>{// envoi de la requetehttp vers partie backend
    //envoi requette http vers partie backend
     return this.httpClient.post<Article>('/api/PUBLICATION-SERVICE/publications/publication',article).toPromise(); //module.ts impoet httpClient
    //const articleToSave = {...article,//extract la valeur dela variable member
    //id_article : article.id_article?? Math.ceil(Math.random()*10000).toString() ,
    //date :article.date?? new Date().toISOString(),
    //};
    //this.tab = [articleToSave , ...this.tab.filter(item => item.id_article!=articleToSave.id_article)];
    //return new Promise(resolve=> resolve(articleToSave));
  }

  deleteArticle(id: string) : Promise<void>{
    //this.tab = this.tab.filter(item => item.id_article != id);
    //return new Promise(resolve=> resolve()) ;
    return this.httpClient.delete<void>(`/api/PUBLICATION-SERVICE/publications/${id}`).toPromise();
  }

  getAllArticles() : Promise< Article[]>{
      return this.httpClient.get<Article[]>('/api/PUBLICATION-SERVICE/publications').toPromise();
    //return new Promise(resolve=> resolve(this.tab)) ;
  }

  
}
