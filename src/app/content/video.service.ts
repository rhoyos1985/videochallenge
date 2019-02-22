import { Video } from './video.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as VideoActions from './video.actions';
import * as fromRoot from '../app.reducer';

/**
 * Video service
 * This class is a manager from video clips and it has some method
 * that allow to add, modify and delete video clips from the list
 */
@Injectable()
export class VideoService {
    /**
     * Temporal lists from videoclips
     */
    private videoClips: Video[] = [
        {id: 'video_1', title: 'Video Clip 1', timeStart: '00:00:10', timeEnd: '00:00:20', url: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4#t=00:00:10,00:00:20'},
        {id: 'video_2', title: 'Video Clip 2', timeStart: '00:00:21', timeEnd: '00:00:30', url: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4#t=00:00:21,00:00:30'},
        {id: 'video_3', title: 'Video Clip 3', timeStart: '00:00:31', timeEnd: '00:00:40', url: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4#t=00:00:31,00:00:40'}
    ];

    /**
     * Show the video clip as full video
     */
    private runningVideo: Video;

    constructor(private store: Store<fromRoot.State>) {}

    /**
     * addVideoClip
     * To add video clips to the list
     * 
     * @param addVideo 
     */
    addVideoClip(addVideo: Video) {
        this.videoClips.push(addVideo);
        this.store.dispatch(new VideoActions.SetVideoClips(this.videoClips));
    }

    removeVideoClip(video: Video) {
        const indexVideo = this.videoClips.indexOf(video);
        this.videoClips.splice(indexVideo,1);
        this.store.dispatch(new VideoActions.SetVideoClips(this.videoClips));
    }

    /**
     * getVideoClips
     * 
     * Return all video clips to the list
     */
    getVideoClips() {
        this.store.dispatch(new VideoActions.SetVideoClips(this.videoClips));
        this.playVideo(this.videoClips[0].id);
    }

    /**
     * playVideo
     * This method is executed when the user make click on the video clip
     * @param videoId 
     */
    playVideo(videoId: string) {
        this.store.dispatch(new VideoActions.StartVideo(videoId))
    }
}