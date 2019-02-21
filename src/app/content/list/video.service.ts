import { Video } from './video.model';

/**
 * Video service
 * This class is a manager from video clips and it has some method
 * that allow to add, modify and delete video clips from the list
 */
export class VideoService {
    /**
     * Temporal lists from videoclips
     */
    private videoClips: Video[] = [
        {id: 'video_1', title: 'Video Clip 1', timeStart: '00:00:10', timeEnd: '00:00:20'},
        {id: 'video_2', title: 'Video Clip 2', timeStart: '00:00:21', timeEnd: '00:00:30'},
        {id: 'video_3', title: 'Video Clip 3', timeStart: '00:00:31', timeEnd: '00:00:40'}
    ];

    /**
     * Show the video clip as full video
     */
    private runningVideo: Video;

    /**
     * addVideoClip
     * To add video clips to the list
     * 
     * @param addVideo 
     */
    addVideoClip(addVideo: Video) {
        console.log(addVideo);
        this.videoClips.push(addVideo);
        console.log(this.videoClips);
    }

    /**
     * getVideoClips
     * 
     * Return all video clips to the list
     */
    getVideoClips() {
        return this.videoClips.slice();
    }

    /**
     * playVideo
     * This method is executed when the user make click on the video clip
     * @param videoId 
     */
    playVideo(videoId: string) {
        this.runningVideo = this.videoClips.find(video => video.id === videoId);
    }
}