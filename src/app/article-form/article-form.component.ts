import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/Modals/Article';
import { ArticleService } from 'src/Services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  currentID : any ;
  form : any;
  itemGlobal :any;
  constructor(private articleService : ArticleService,private router : Router,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    //1. recuperetion de id de URL de la route active

    this.currentID = this.activatedRoute.snapshot.params.id 
    console.log(this.currentID);
    //2. tester sur id
    if (!!this.currentID)//trully : s'il est exist
    //3. si id a une valeur appeler getMemberByID(id)
    {
      this.articleService.getArticleById(this.currentID).then((item)=>{
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
        titre: new FormControl(null, [Validators.required]),
        date: new FormControl(null,[Validators.required]),
      }
    );
    }
    
    initForm2(article : Article):void{//le control de champ
    this.form = new FormGroup(
      {
        titre: new FormControl(article.titre, [Validators.required]),
        date: new FormControl(article.date,[Validators.required]),
      }
    );
    }

    ONSUB(): void{
      console.log(this.form.value); //affichage de l'element recupéré
      const ObjectToSubmit ={...this.itemGlobal, ...this.form.value};
      this.articleService.saveArticle(ObjectToSubmit).then(()=>{this.router.navigate(['/articles'])}); // then((variable)=>{action aprés la requete})
      }

}
