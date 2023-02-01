import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app.config';
import { Outil } from 'src/Modals/Outil';

@Injectable({
  providedIn: 'root'
})
export class OutilService {

  tab : Outil[]= GLOBAL._DB.outil;

  constructor(private httpClient : HttpClient) { }

  getOutilByID(id: string) : Promise<Outil> {
    //return this.httpClient.get<Member>('link').toPromise();
   // return new Promise(resolve=> resolve(this.tab.filter(item => item.id_ou === id)[0]?? null) )
    return this.httpClient.get<Outil>(`/api/OUTIL-SERVICE/outil/${id}`).toPromise();
  }

  saveOutil(outil : any) : Promise<Outil>{// envoi de la requetehttp vers partie backend
    //envoi requette http vers partie backend
    //return this.httpClient.post<Member>('linkto RestAPI : localhost8080/member',member).toPromise(); //module.ts impoet httpClient
    //const outilToSave = {...outil,//extract la valeur dela variable member
    //id_ou : outil.id_ou?? Math.ceil(Math.random()*10000).toString() ,
    //date :outil.date?? new Date().toISOString(),
    //};
    //this.tab = [outilToSave , ...this.tab.filter(item => item.id_ou!=outilToSave.id_ou)];
    //return new Promise(resolve=> resolve(outilToSave));
    return this.httpClient.post<Outil>('/api/OUTIL-SERVICE/outils/outil',outil).toPromise();
  }

  deleteOutil(id: string) : Promise<void>{
    //this.tab = this.tab.filter(item => item.id_ou != id);
    //return new Promise(resolve=> resolve()) ;
    //return this.httpClient.delete<void>('link').toPromise();
    console.log(id)
    return this.httpClient.delete<void>(`/api/OUTIL-SERVICE/outils/${id}`).toPromise();
  }

  getAllOutils() : Promise< Outil[]>{
    //return this.httpClient.get<Member[]>('link').toPromise();
    //return new Promise(resolve=> resolve(this.tab)) ;
    return this.httpClient.get<Outil[]>('/api/OUTIL-SERVICE/outils').toPromise();
  }
}
