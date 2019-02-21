import { Component, OnInit } from '@angular/core';
import { Video } from './video.model';
import { VideoService } from './video.service';

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

  /**
   * Contructor
   * 
   * @constructor
   */
  constructor(private videoService: VideoService) { }


  /** 
   * ngOnInit
   * 
   * @method ngOnInit
  */
  ngOnInit() {
    this.videos = this.videoService.getVideoClips();
  }

}
