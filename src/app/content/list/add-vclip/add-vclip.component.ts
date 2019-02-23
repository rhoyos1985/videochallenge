import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Video } from '../../video.model';
import { VideoService } from '../../video.service';
import * as fromRoot from '../../../app.reducer';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * This component allow to add new video clips to the list.
 */
@Component({
  selector: 'app-add-vclip',
  templateUrl: './add-vclip.component.html',
  styleUrls: ['./add-vclip.component.scss']
})
export class AddVclipComponent implements OnInit {
  /**
   * videoForm is a reactiveForm
   */
  videoForm: FormGroup
  /**
   * title video clip
   */
   title: string;
  
  /**
   * Constructor
   * @constructor
   * @param store 
   * @param videoService 
   */
  constructor(private store: Store<fromRoot.State>,
              private videoService: VideoService) { }

  /**
   * ngOnInit
   * Initialized component
   * @method ngOnInit
   */
  ngOnInit() {
    this.videoForm = new FormGroup({
      title: new FormControl('', {validators: [Validators.required]}),
      timeStart: new FormControl('', {validators: [Validators.required]}),
      timeEnd: new FormControl('', {validators: [Validators.required]})
    })
    this.videoRunningSubscribe();
  }

  /**
   * videoRunningSubscribe to show video title
   */
  videoRunningSubscribe() {
    this.store
        .pipe(select(fromRoot.getActiveVideo),
              filter(val => val !== null))
        .subscribe(actVideo => this.title = actVideo.title);

  }

  /**
   * addVideoClip
   * Method to add video clip to the list.
   */
  addVideoClip() {
    let video: Video = {
      id: Math.round(Math.random() * 10000).toString(),
      title: this.videoForm.value.title,
      timeStart: this.videoForm.value.timeStart,
      timeEnd: this.videoForm.value.timeEnd,
      url: `http://clips.vorwaerts-gmbh.de/VfE_html5.mp4#t=${this.videoForm.value.timeStart},${this.videoForm.value.timeEnd}`
    }
    this.videoForm.reset();
    this.videoService.addVideoClip(video);
  }

}
