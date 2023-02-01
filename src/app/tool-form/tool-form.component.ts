import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Outil } from 'src/Modals/Outil';
import { OutilService } from 'src/Services/outil.service';

@Component({
  selector: 'app-tool-form',
  templateUrl: './tool-form.component.html',
  styleUrls: ['./tool-form.component.scss']
})
export class ToolFormComponent implements OnInit {

  currentID : any ;
  form : any;
  itemGlobal :any;
  constructor(private outilService : OutilService,private router : Router,private activatedRoute : ActivatedRoute) { }


  ngOnInit(): void {

    //1. recuperetion de id de URL de la route active

    this.currentID = this.activatedRoute.snapshot.params.id 
    console.log(this.currentID);
    //2. tester sur id
    if (!!this.currentID)//trully : s'il est exist
    //3. si id a une valeur appeler getMemberByID(id)
    {
      this.outilService.getOutilByID(this.currentID).then((item)=>{
        this.itemGlobal = item; 
        this.initForm2(item)});
    }
    //4. sinon this.initForm()
    else{
      this.initForm(); //initialisation et controler les champs
    }

}

initForm():void{//le control de champ
this.form = new FormGroup(
  {
    date: new FormControl(null, [Validators.required]),
    source: new FormControl(null,[Validators.required]),
  }
);
}

initForm2(outil : Outil):void{//le control de champ
this.form = new FormGroup(
  {
    date: new FormControl(outil.date, [Validators.required]),
    source: new FormControl(outil.source,[Validators.required]),
  }
);
}

ONSUB(): void{
console.log(this.form.value); //affichage de l'element recupéré
const ObjectToSubmit ={...this.itemGlobal, ...this.form.value};
this.outilService.saveOutil(ObjectToSubmit).then(()=>{this.router.navigate(['/tools'])}); // then((variable)=>{action aprés la requete})
}

}
