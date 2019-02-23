import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as fromRoot from '../../../app.reducer';
import { Video } from '../../video.model';

/**
 * This component has the video tag to show the full video.
 */
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{
  /**
   * It is a reference from video tag.
   */
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  /**
   * Constructor
   * @constructor
   */
  constructor(private store: Store<fromRoot.State>) { }

  /**
   * This method allow to subscribe the store when the component was create
   * @method 
   * ngOnInit
   */
  ngOnInit() {
    this.videoRuning();
  }

  /**
   * videoRuning
   * this method susbcribe the videoActive
   * @method 
   * videoRuning
   * @example
   * videoRuning();
   * 
   */
  videoRuning() {
    this.store
        .pipe(select(fromRoot.getActiveVideo), filter(val => val !== null))
        .subscribe(video => {
          this.playPauseVideo(video);
        })
  }

  /**
   * playPauseVideo
   * 
   * @param videoRun
   * @example
   *  playPauseVideo(videoRun);
   */
  playPauseVideo(videoRun: Video) {
    const video = this.videoplayer.nativeElement;
  
    video.src=videoRun.url;
    video.load();
  
    if (!video.paused)
      video.pause();
    else
      video.play();
  }

  /**
   * playPauseControl
   * When the user make click in the full video this method
   * is called to do the action
   * @param el
   * @example
   *  playPauseControl(el);
   */
  playPauseControl(el: any) {
    const video = el.srcElement;
    if (!video.paused)
      video.pause();
    else
      video.play();
  }

}
