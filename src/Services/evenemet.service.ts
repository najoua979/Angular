import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app.config';
import { Evenement } from 'src/Modals/Evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenemetService {

  tab: Evenement[] = GLOBAL._DB.evenements;

  constructor(private httpClient: HttpClient) { }

  getEvenementById(id :string): Promise<Evenement> {
    // return this.httpClient.get<Member>('link').toPromise();
    //return new Promise(resolve=>resolve (this.tab.filter(item=>item.id===id)[0]??null))  //?? : sinon yrajaalik null
    return this.httpClient.get<Evenement>(`/api/EVENEMENT-SERVICE/evenement/${id}`).toPromise();
  }

  SaveEvenement(evenement: any): Promise<Evenement> {
    // return this.httpClient.post<Member>('lintoRestAPI', member).toPromise()
    const evenementToSave = {
      ...evenement,  //extraction des donneee mil formulaire .. 4 chaamps : cin nom cv type behc y7ot.hom fil tableau mna4min 
      id:evenement.id?? Math.ceil(Math.random() * 10000).toString(), //ceil tni7i il virgule .. round 
      date:evenement.date?? new Date().toISOString(), //fil colonne mtaa created date n7ot date mtaa lyouma  w il wakt 
    }
    this.tab = [evenementToSave, ...this.tab.filter(item => item.id != evenementToSave.id)];
    //return new Promise(resolve => resolve(evenementToSave))
    ///evenements/evenement
   return this.httpClient.post<Evenement>('/api/EVENEMENT-SERVICE/evenements/evenement',evenement).toPromise();
  }

  deleteEvenementById(id:string):Promise<void>{
    
    //return this.httpClient.delete<void>('link').toPromise();
    //this.tab=this.tab.filter(item=>item.id!=id)
    //return new Promise(resolve=>resolve())
    return this.httpClient.delete<void>(`/api/EVENEMENT-SERVICE/evenements/${id}`).toPromise();
  }

  getAllEvenemets():Promise<Evenement[]>{
    //return this.httpClient.get<Member[]>('link').toPromise();
    //return new Promise(resolve=>resolve(this.tab));
   return this.httpClient.get<Evenement[]>('/api/EVENEMENT-SERVICE/evenements').toPromise();
    
  }

}
