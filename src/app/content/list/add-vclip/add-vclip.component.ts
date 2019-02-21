import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Video } from '../video.model';
import { VideoService } from '../video.service';

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
   * Constructor
   * @constructor
   */
  constructor(private videoService: VideoService) { }

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
      timeEnd: this.videoForm.value.timeEnd
    }

    this.videoService.addVideoClip(video);
  }

}
