import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modals/Member';
import { ArticleService } from 'src/Services/article.service';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-affect',
  templateUrl: './affect.component.html',
  styleUrls: ['./affect.component.scss']
})
export class AffectComponent implements OnInit {

  selected : string="";
  tab:Member[];
  id_article:string="";

  constructor(private memberService : MemberService, private activatedroute: ActivatedRoute, private articleService : ArticleService,private router: Router) { 
    this.tab=this.memberService.tab;
  }

  ngOnInit(): void {
    this.memberService.getAllMembers().then((data)=>{this.tab=data})
  }

  
  ADD(selected:string) //id du member
  {
    //1. id de l'article 
    this.id_article=this.activatedroute.snapshot.params.id_article;
    //2. 
    this.articleService.affect(selected,this.id_article).
        then(()=>{this.router.navigate(['/articles'])})
  }

}
