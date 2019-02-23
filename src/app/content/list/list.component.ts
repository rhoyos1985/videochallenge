import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Video } from '../video.model';
import { VideoService } from '../video.service';

import * as fromRoot from '../../app.reducer';
import { filter } from 'rxjs/operators';

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
   * activeVideo has the video is running.
   * @var
   */
  activeVideo: Video;

  /**
   * It is a Observable to show Video Clips in the list
   * @var
   */
  videoClips$: Observable<Video[]>

  /**
   * Initalize videoService and store
   * @param videoService 
   * @param store 
   */
  constructor(private videoService: VideoService,
              private store: Store<fromRoot.State>) { }


  /** 
   * This method is executed after create the component
   * @method ngOnInit
  */
  ngOnInit() {
    this.getVideoClips();
    this.subscribeService();
  }

  /**
   * This method subscribe an Action to update the list
   * @method
   * subscribeService
   * @example
   * subscribeService();
   */
  subscribeService() {
    this.videoClips$ = this.store
                            .pipe(select(fromRoot.getVideoClips), filter(val => val !== null));
    this.store
        .pipe(select(fromRoot.getActiveVideo), filter(val => val !== null))
        .subscribe(actVideo => this.activeVideo = actVideo);
  }

  /**
   * This method is executed to bring the video clips to the lists
   * @method
   * getVideoClips
   * @example
   * getVideoClips();
   */
  getVideoClips() {
    this.videoService.getVideoClips();
  }

  /**
   * This methos is executed to show the full video
   * @method
   * playVideo
   * @param video
   * @example
   * playVideo(video); 
   */
  playVideo(video) {
    this.videoService.playVideo(video.id);
  }

  /**
   * This method is executed when it is going delete a lists item from the lists
   * @method
   * removeVideo
   * @param video
   * @example
   * removeVideo(video); 
   */
  removeVideo(video: Video) {
    if (this.activeVideo.id !== video.id)
      this.videoService.removeVideoClip(video);
  }

}
