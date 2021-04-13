import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangelogComponent } from './changelog/changelog.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { DownloadComponent } from './download/download.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full'},
  { path:'changelog', component: ChangelogComponent },
  { path:'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent },
  { path:'download',component: DownloadComponent },
  { path:'gallery', component: GalleryComponent},
  { path:'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
