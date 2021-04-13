/*
** @author tulika-ghosh
** Home page - Features - Team - Download & Donate
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Feature } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allFeatures: Feature[] = [];

  constructor(private sharedService:SharedService,public router:Router) {  }

  ngOnInit(){
    this.sharedService.getFeatures().subscribe(
      data=> { this.allFeatures = data; }
    );
  }

  goToDownload(){
    this.router.navigate(['/download']); 
  }

  goToDonate(){
    this.router.navigate(['/donate']);
  }
}
