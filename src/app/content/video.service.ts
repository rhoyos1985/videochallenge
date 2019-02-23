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
     * Initizalice the store
     * @param store 
     */
    constructor(private store: Store<fromRoot.State>) {}

    /**
     * To add video clips to the list
     * @method
     * addVideoClip
     * @param addVideo
     * @example
     * addVideoClip(video);
     */
    addVideoClip(addVideo: Video) {
        this.videoClips.push(addVideo);
        this.store.dispatch(new VideoActions.SetVideoClips(this.videoClips));
    }

    /**
     * To remove video clips from the list
     * @method
     * removeVideoClip
     * @param video
     * @example
     * removeVideoClip(video);
     */
    removeVideoClip(video: Video) {
        const indexVideo = this.videoClips.indexOf(video);
        this.videoClips.splice(indexVideo,1);
        this.store.dispatch(new VideoActions.SetVideoClips(this.videoClips));
    }

    /**
     * Return all video clips to the list 
     * @method
     * getVideoClips
     * @example
     * getVideoClips();
     */
    getVideoClips() {
        this.store.dispatch(new VideoActions.SetVideoClips(this.videoClips));
        this.playVideo(this.videoClips[0].id);
    }

    /**
     * This method is executed when the user make click on the video clip
     * @method
     * playVideo
     * @param videoId
     * @example
     * playVideo(id); 
     */
    playVideo(videoId: string) {
        this.store.dispatch(new VideoActions.StartVideo(videoId))
    }
}