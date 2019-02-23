import { Action } from '@ngrx/store';
import { Video } from './video.model';

/**
 * @ignore
 */
export const SET_VIDEO_CLIPS = '[Video] Set Video Clips';
/**
 * @ignore
 */
export const SET_FINISHED_VIDEO = '[Video] Set Finished Video clip';
/**
 * @ignore
 */
export const START_VIDEO = '[Video] Start Video Clip';
/**
 * @ignore
 */
export const STOP_VIDEO = '[Video] Stop Video Clip';

/**
 * This actions is executed when it is adding a video
 * @implements
 * Action
 */
export class SetVideoClips implements Action {
    /**
     * Describe the action that allow
     */
    readonly type = SET_VIDEO_CLIPS;
    /**
     * Initialize a payload
     * @param payload 
     */
    constructor(public payload: Video[]) {}
}

/**
 * This actions is executed when it is adding a video
 * @implements
 * Action
 */
export class SetFinishedVideo implements Action {
    /**
     * Describe the action that allow
     */
    readonly type = SET_FINISHED_VIDEO;
    /**
     * Initialize a payload
     * @param payload 
     */
    constructor(public payload: Video[]) {}
}

/**
 * This actions is executed when start a video
 * @implements
 * Action
 */
export class StartVideo implements Action {
    /**
     * Describe the action that allow
     */
    readonly type = START_VIDEO;
    /**
     * Initialize a payload
     * @param payload 
     */
    constructor(public payload: string) {}
  }

/**
 * This actions is executed when stop a video
 * @implements
 * Action
 */
export class StopVideo implements Action {
  /**
   * Describe the action that allow
   */
  readonly type = STOP_VIDEO;
}

/**
 * Export all actions
 */
export type VideoActions = SetVideoClips 
| SetFinishedVideo
| StartVideo
| StopVideo;