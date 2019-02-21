import { Action } from '@ngrx/store';
import { Video } from './video.model';

export const SET_VIDEO_CLIPS = '[Video] Set Video Clips';
export const SET_FINISHED_VIDEO = '[Video] Set Finished Video clip';
export const START_VIDEO = '[Video] Start Video Clip';
export const STOP_VIDEO = '[Video] Stop Video Clip';

export class SetVideoClips implements Action {
    readonly type = SET_VIDEO_CLIPS;
    constructor(public payload: Video[]) {}
}

export class SetFinishedVideo implements Action {
    readonly type = SET_FINISHED_VIDEO;
    constructor(public payload: Video[]) {}
}

export class StartVideo implements Action {
    readonly type = START_VIDEO;
  
    constructor(public payload: string) {}
  }
  
  export class StopVideo implements Action {
    readonly type = STOP_VIDEO;
  }

export type VideoActions = SetVideoClips 
| SetFinishedVideo
| StartVideo
| StopVideo;