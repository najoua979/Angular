import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectComponent } from './affect/affect.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvenementFormComponent } from './evenement-form/evenement-form.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { MemberFormComponentComponent } from './member-form-component/member-form-component.component';
import { MembersComponent } from './members/members.component';
import { ToolFormComponent } from './tool-form/tool-form.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path: 'members',
    pathMatch: 'full',
    component: MembersComponent
  },
  {
    path: 'new_member',
    pathMatch: 'full',
    component: MemberFormComponentComponent
  },
  {
    path:'members/:id/edit',
    pathMatch:'full',
    component:MemberFormComponentComponent
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'tools',
    pathMatch: 'full',
    component: ToolsComponent
  },
  {
    path: 'new_outil',
    pathMatch: 'full',
    component: ToolFormComponent
  },
  {
    path:'tools/:id/edit',
    pathMatch:'full',
    component:ToolFormComponent
  },
  {
    path: 'articles',
    pathMatch: 'full',
    component: ArticlesComponent
  },
  {
    path: 'new_article',
    pathMatch: 'full',
    component: ArticleFormComponent
  },
  {
    path:'articles/:id/edit',
    pathMatch:'full',
    component:ArticleFormComponent,
    
  },
  {
    path:'articles/:id_article/affect',
    pathMatch:'full',
    component:AffectComponent
  },
  {
    path: 'Events',
    pathMatch: 'full',
    component: EventsComponent
  },
  {
    path: 'new_evenement',
    pathMatch: 'full',
    component: EvenementFormComponent
  },
  {
    path:'Events/:id/edit',
    pathMatch:'full',
    component:EvenementFormComponent
  },
  {
    path:'login',
    pathMatch:'full',
    component:LoginComponent
  },
  {
    path:'**', //dernier path .. ken taatih ay haja fil path par defaut yibaathik lil members
    redirectTo:'members',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
