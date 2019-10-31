import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateRepoComponent} from './create-repo/create-repo.component';
import { DeleteRepoComponent } from './delete-repo/delete-repo.component';
import { AllRepoComponent } from './all-repo/all-repo.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ChatComponent } from './chat/chat.component';
import { TalkComponent } from './talk/talk.component';
import { FavRepoComponent } from './fav-repo/fav-repo.component';


const routes: Routes = [
  {path:'my-chat', component:TalkComponent},
  {path:'fav-repo', component:FavRepoComponent},
  {path:'create-repo', component:CreateRepoComponent},
  {path:'delete-repo', component:DeleteRepoComponent},
  {path:'all-repo', component:AllRepoComponent},
  {path:'my-info', component:PersonalInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
