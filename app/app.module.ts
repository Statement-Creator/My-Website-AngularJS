import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { GithubComponent } from './github/github.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { AnimationFeatureComponent } from './animation-feature/animation-feature.component';
import { SpecializedControlsComponent } from './specialized-controls/specialized-controls.component';
import { ApiExampleComponent } from './api-example/api-example.component';
import {YoutubeApiService} from './youtube-api.service';

const routes = [
  {path:'', component: HomepageComponent},
  {path:'About', component: AboutMeComponent},
  {path:'Contact', component:ContactMeComponent},
  {path:'Github', component:GithubComponent},
  {path:'Skills', component:MySkillsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomepageComponent,
    ContactMeComponent,
    GithubComponent,
    MySkillsComponent,
    AnimationFeatureComponent,
    SpecializedControlsComponent,
    ApiExampleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [YoutubeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
