import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Download } from './download';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  fetchArtifactDetails : Download[] = [];

  constructor(private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.fetchDownloadData().subscribe(
      data => { this.fetchArtifactDetails = data }
    );
  }

}
