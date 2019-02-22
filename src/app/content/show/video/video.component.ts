import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as fromRoot from '../../../app.reducer';

/**
 * This component has the video tag to show the full video.
 */
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  video$: Observable<string>;

  /**
   * Constructor
   * @constructor
   */
  constructor(private store: Store<fromRoot.State>) { }

  /**
   * ngOnInit
   * @method ngOnInit
   */
  ngOnInit() {
    this.video$ = this.store.select(fromRoot.getActiveVideo);
  }

  /**
   * playPauseVideo
   * When the user make click in the full video this method
   * is called to do the action
   * @param el 
   */
  playPauseVideo(el: any) {
    const video = this.videoplayer.nativeElement;
    video.load();
    if (!video.paused)
      video.pause();
    else
      video.play();
  }

}
