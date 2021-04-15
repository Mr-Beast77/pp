/*
** @author pixie-codes
** Header - website logo - route links to other views 
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void { }

  goToChangeLog(){
    this.router.navigate(['/changelog']); 
  }

  goToContact(){
    this.router.navigate(['/contact']);
  }

  goToDownload(){
    this.router.navigate(['/download']); 
  }

  goToDonate(){
    this.router.navigate(['/donate']);
  }

  goToGallery(){
    this.router.navigate(['/gallery']);
  }

  goToHome(){ 
    this.router.navigate(['/home']); 
  }

}
