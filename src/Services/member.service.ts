import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app.config';
import { Member } from 'src/Modals/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tab: Member[] = GLOBAL._DB.members;

  constructor(private httpClient: HttpClient) { }

  SaveMember(member: any): Promise<Member> {
     return this.httpClient.post<Member>('/api/MEMBER-SERVICE/members/etudiant', member).toPromise()
    //const memberToSave = {
     // ...member,  //extraction des donneee mil formulaire .. 4 chaamps : cin nom cv type behc y7ot.hom fil tableau mna4min 
      //id:member.id?? Math.ceil(Math.random() * 10000).toString(), //ceil tni7i il virgule .. round 
      //createdDate:member.createdDate?? new Date().toISOString(), //fil colonne mtaa created date n7ot date mtaa lyouma  w il wakt 
    //}
    //this.tab = [memberToSave, ...this.tab.filter(item => item.id != memberToSave.id)];
   // return new Promise(resolve => resolve(memberToSave))
  }

  getMemberById(id :string): Promise<Member> {
     return this.httpClient.get<Member>(`/api/MEMBER-SERVICE/member/${id}`).toPromise();
    //return new Promise(resolve=>resolve (this.tab.filter(item=>item.id===id)[0]??null))  //?? : sinon yrajaalik null
  }

  deleteMemberById(id:string):Promise<void>{
    
    return this.httpClient.delete<void>(`/api/MEMBER-SERVICE/members/${id}`).toPromise();
    //return this.httpClient.delete<void>(`${this.apiServerURL}/membres/${memberID}`);
    //this.tab=this.tab.filter(item=>item.id!=id)
    //return new Promise(resolve=>resolve())
  }

  getAllMembers():Promise<Member[]>{
    return this.httpClient.get<Member[]>('/api/MEMBER-SERVICE/members').toPromise();
    //   return this.httpClient.get<Article[]>('http://localhost:9000/PUBLICATION-SERVICE/publications').toPromise();
    //return new Promise(resolve=>resolve(this.tab));

  }
}

