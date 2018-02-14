import { NewUserReactiveComponent } from './../components/new-user-reactive/new-user-reactive.component';
import { NewUserComponent } from './../components/new-user/new-user.component';
import { CustomDirectivesComponent } from './../components/custom-directives/custom-directives.component';
import { BuiltInDirectivesComponent } from './../components/built-in-directives/built-in-directives.component';
import { ParentComponent } from './../components/parent/parent.component';
import { UserService } from './../services/user/user.service';
import { UsersResolveGuard } from './../guards/users-resolve/users-resolve.guard';
import { DeactivateGuard } from './../guards/deactivate/deactivate.guard';
import { ActivateGuard } from './../guards/activate/activate.guard';
import { PlaceholderComponent } from './../components/placeholder/placeholder.component';
import { UserDetailsComponent } from './../components/user-details/user-details.component';
import { UsersComponent } from './../components/users/users.component';
import { MessageListComponent } from './../components/message-list/message-list.component';
import { BlogComponent } from './../components/blog/blog.component';
import { AboutComponent } from './../components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../components/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent, canActivate: [ ActivateGuard ] },
  { path: 'messages', component: MessageListComponent, canDeactivate: [ DeactivateGuard ] },
  { path: 'parent', component: ParentComponent },
  { path: 'bd', component: BuiltInDirectivesComponent },
  { path: 'cd', component: CustomDirectivesComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'new-user-reactive', component: NewUserReactiveComponent },
  { 
    path: 'users', 
    component: UsersComponent,
    // canActivateChild: [ ActivateGuard ],
    /* resolve: {
      users: UsersResolveGuard
    }, */
    children: [
      { path: ':userId', component: UserDetailsComponent },
      { path: '', component: PlaceholderComponent }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
  providers: [ ActivateGuard, DeactivateGuard, UsersResolveGuard, UserService ]
})
export class AppRoutingModule { }
