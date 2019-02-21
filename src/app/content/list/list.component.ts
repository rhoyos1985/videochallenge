import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Video } from '../video.model';
import { VideoService } from '../video.service';

import * as fromRoot from '../../app.reducer';

/**
 * List component
 * 
 * This component has the list of video clips
 * 
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  /**
   * videos has a list from videos clips.
   * @var
   */
  videos: Video[] = [];

  videoClips$: Observable<Video[]>

  /**
   * Contructor
   * 
   * @constructor
   */
  constructor(private videoService: VideoService,
              private store: Store<fromRoot.State>) { }


  /** 
   * ngOnInit
   * 
   * @method ngOnInit
  */
  ngOnInit() {
    this.getVideoClips();
    this.subscribeService();
  }

  subscribeService() {
    this.videoClips$ = this.store.select(fromRoot.getVideoClips)
  }

  getVideoClips() {
    this.videoService.getVideoClips();
  }

  removeVideo(video: Video) {
    this.videoService.removeVideoClip(video);
  }

}
