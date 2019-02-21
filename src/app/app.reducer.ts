import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromVideo from './content/video.reducer';

export interface State {
    video: fromVideo.State
}

export const reducers: ActionReducerMap<State> = {
    video: fromVideo.videoReducer
}

export const getVideoState = createFeatureSelector<fromVideo.State>('video');

export const getVideoClips = createSelector(getVideoState, fromVideo.getVideoClips);
export const getFinishedVideo = createSelector(getVideoState, fromVideo.getFinishedVideo);
export const getActiveVideo = createSelector(getVideoState, fromVideo.getActiveVideo);