import { UserService } from './services/user/user.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { VoterComponent } from './components/voter/voter.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ParentComponent } from './components/parent/parent.component';
import { BuiltInDirectivesComponent } from './components/built-in-directives/built-in-directives.component';
import { ChangeCaseDirective } from './directives/change-case/change-case.directive';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { UnlessDirective } from './directives/unless/unless.directive';
import { AppendorPipe } from './pipes/appendor/appendor.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewUserReactiveComponent } from './components/new-user-reactive/new-user-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    VoterComponent,
    HeaderComponent,
    AboutComponent,
    BlogComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PlaceholderComponent,
    OneComponent,
    TwoComponent,
    ParentComponent,
    BuiltInDirectivesComponent,
    ChangeCaseDirective,
    CustomDirectivesComponent,
    UnlessDirective,
    AppendorPipe,
    FilterPipe,
    NewUserComponent,
    NewUserReactiveComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
