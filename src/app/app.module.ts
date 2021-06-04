import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {MaterialModule} from './material.module';

import {FlexLayoutModule} from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRouters } from './app.routes';
import { DataFakeService } from './data/datafake.service';
import { AuthService } from './auth.service';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { PostViewComponent } from './post-view/post-view.component';

import { PostServiceService } from './services/post-service.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    PostDialogComponent,
    FooterComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters,
    FormsModule
  ],
  providers: [DataFakeService, AuthService, PostServiceService],
  bootstrap: [AppComponent],
  entryComponents: [
    PostDialogComponent
  ]
})
export class AppModule { }
