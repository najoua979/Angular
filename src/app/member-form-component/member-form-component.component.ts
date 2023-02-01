import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modals/Member';
import { MemberService } from 'src/Services/member.service';


@Component({
  selector: 'app-member-form-component',
  templateUrl: './member-form-component.component.html',
  styleUrls: ['./member-form-component.component.scss']
})
export class MemberFormComponentComponent implements OnInit {

  form: any;
  currentID:any;
  itemGlobale:any;
  constructor(private memberService: MemberService, private router: Router, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    //1. recuperation de id de la route active
    
    this.currentID=this.activatedRoute.snapshot.params.id
    console.log(this.currentID)
    //2. tester sur id
    if (!!this.currentID)
    //3. si id existe eppeler getmemberbyid(id)
    {
      this.memberService.getMemberById(this.currentID).then((item)=>{
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
        cin: new FormControl(null, [Validators.required]),
        nom: new FormControl(null, [Validators.required]),
        cv: new FormControl(null, [Validators.required]),
        type: new FormControl(null, [Validators.required])
      }
    )
  }

  initForm2(M:Member): void { //le controle du champs
    this.form = new FormGroup(
      {
        cin: new FormControl(M.cin, [Validators.required]),
        nom: new FormControl(M.nom, [Validators.required]),
        cv: new FormControl(M.cv, [Validators.required]),
        type: new FormControl(M.type, [Validators.required])
      }
    )
  }


  ONSUB(): void {
    console.log(this.form.value); //affichage de l'element recuperee
    const ObjectToSubmit = {...this.itemGlobale,...this.form.value};
    this.memberService.SaveMember(ObjectToSubmit).
      then(() => { this.router.navigate(['./members']) }); //entre les parentheses on met le le retour de l'appel mtaa promise 
  }


}
