import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Changelog } from './changelog/changelog';
import { Download } from './download/download';
import { Feature } from './home/home';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private featureUrl = './assets/json/features.json';
  private changelogUrl = './assets/json/changelog.json';
  private downloadUrl = './assets/json/download.json';

  constructor( private httpClient:HttpClient ) { }

  fetchDownloadData() : Observable<Download[]>{
    return this.httpClient.get<Download[]>(this.downloadUrl)
  }

  getFeatures() : Observable<Feature[]>{
    return this.httpClient.get<Feature[]>(this.featureUrl)
  }

  getVersionDetails() : Observable<Changelog[]>{
    return this.httpClient.get<Changelog[]>(this.changelogUrl)
  }
  
}
