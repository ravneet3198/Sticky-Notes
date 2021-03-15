import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickynoteComponent } from './stickynote/stickynote.component';
import { UpdatestickyComponent } from './updatesticky/updatesticky.component';

const routes: Routes = [{path:'',redirectTo:'/mysticky',pathMatch:"full"}, 
                        {path:'mysticky',component:StickynoteComponent}
                          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
