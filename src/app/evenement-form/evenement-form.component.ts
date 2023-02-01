import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from 'src/Modals/Evenement';
import { EvenemetService } from 'src/Services/evenemet.service';

@Component({
  selector: 'app-evenement-form',
  templateUrl: './evenement-form.component.html',
  styleUrls: ['./evenement-form.component.scss']
})
export class EvenementFormComponent implements OnInit {

  form: any;
  currentID:any;
  itemGlobale:any;

  constructor(private evenementService: EvenemetService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    
    //1. recuperation de id de la route active
    
    this.currentID=this.activatedRoute.snapshot.params.id
    console.log(this.currentID)
    //2. tester sur id
    if (!!this.currentID)
    //3. si id existe eppeler getmemberbyid(id)
    {
      this.evenementService.getEvenementById(this.currentID).then((item)=>{
        this.itemGlobale=item;
        this.initForm2(item)
      });
    }
    

    //4. sinon this.initform
    else {
      this.initForm(); //fct pour initialiser et controler le form
    }
    
    // this.ONSUB();

  }

  initForm(): void { //le controle du champs
    this.form = new FormGroup(
      {
        titre: new FormControl(null, [Validators.required]),
        lieu: new FormControl(null, [Validators.required]),
        date: new FormControl(null, [Validators.required]),
      }
    )
  }

  initForm2(E:Evenement): void { //le controle du champs
    this.form = new FormGroup(
      {
        titre: new FormControl(E.titre, [Validators.required]),
        lieu: new FormControl(E.lieu, [Validators.required]),
        date: new FormControl(E.date, [Validators.required]),
      }
    )
  }


  ONSUB(): void {
    console.log(this.form.value); //affichage de l'element recuperee
    const ObjectToSubmit = {...this.itemGlobale,...this.form.value};
    this.evenementService.SaveEvenement(ObjectToSubmit).
      then(() => { this.router.navigate(['./Events']) }); //entre les parentheses on met le le retour de l'appel mtaa promise 
  }


}
