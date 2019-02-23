import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromVideo from './content/video.reducer';

/**
 * It has all actions from video reducer videoReducer
 * @interface
 */
export interface State {
    /**
     * @ignore
     */
    video: fromVideo.State
}

/**
 * ActionReducer
 */
export const reducers: ActionReducerMap<State> = {
    video: fromVideo.videoReducer
}

/**
 * Selector to looking for the video state
 */
export const getVideoState = createFeatureSelector<fromVideo.State>('video');

/**
 * getVideoClips has all video clips 
 */
export const getVideoClips = createSelector(getVideoState, fromVideo.getVideoClips);
/**
 * getFinishedVideo is to know when the video has finished
 */
export const getFinishedVideo = createSelector(getVideoState, fromVideo.getFinishedVideo);
/**
 * getActiveVideo has the video is running
 */
export const getActiveVideo = createSelector(getVideoState, fromVideo.getActiveVideo);