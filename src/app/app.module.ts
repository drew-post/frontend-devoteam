import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamMembersComponent } from './components/meet-the-team/team-members.component';
import { SearchPipe } from '../app/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { TeamGridViewComponent } from './components/team-grid-view/team-grid-view.component';
import { SearchAndFilterBarComponent } from './components/search-and-filter-bar/search-and-filter-bar.component';
import { TeamListViewComponent } from './components/team-list-view/team-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamMembersComponent,
    SearchPipe,
    TeamGridViewComponent,
    SearchAndFilterBarComponent,
    TeamListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ SearchPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
