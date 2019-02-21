import { Component, OnInit } from '@angular/core';


/**
 * This component has the video tag to show the full video.
 */
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  /**
   * Constructor
   * @constructor
   */
  constructor() { }

  /**
   * ngOnInit
   * @method ngOnInit
   */
  ngOnInit() {
  }

  /**
   * playPauseVideo
   * When the user make click in the full video this method
   * is called to do the action
   * @param el 
   */

  playPauseVideo(el: any) {
    const video: HTMLVideoElement = el.srcElement;
    if (!video.paused)
      video.pause();
    else
      video.play();
  }


}
