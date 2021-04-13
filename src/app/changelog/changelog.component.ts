import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Changelog } from './changelog';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {

  changeLogDetails : Changelog[] = []

  constructor(private sharedService:SharedService ) { }

  ngOnInit() {
    this.sharedService.getVersionDetails().subscribe(
      data => ( this.changeLogDetails = data )
    );
  }

}
