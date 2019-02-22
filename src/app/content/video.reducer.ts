import {
    VideoActions,
    SET_VIDEO_CLIPS,
    SET_FINISHED_VIDEO,
    START_VIDEO,
    STOP_VIDEO
} from './video.actions';
import { Video } from './video.model';

export interface State {
    videoClips: Video[];
    finishedVideo: Video[]
    activeVideo: Video;
}

const initialState: State = {
    videoClips: [],
    finishedVideo: [],
    activeVideo: null
}

export function videoReducer(state = initialState, action: VideoActions) {
    switch (action.type) {
        case SET_VIDEO_CLIPS:
            return{
                ...state,
                videoClips: action.payload
            }
        case SET_FINISHED_VIDEO:
            return {
                ...state,
                finishedVideo: action.payload
            }
        case START_VIDEO:
            return {
                ...state,
                activeVideo: { ...state.videoClips.find(ex => ex.id === action.payload) }
            };
        case STOP_VIDEO:
            return {
                ...state,
                activeVideo: null
            };
        default: {
            return state;
        }
    }
}

export const getVideoClips = (state: State) => state.videoClips;
export const getFinishedVideo = (state: State) => state.finishedVideo;
export const getActiveVideo = (state: State) => state.activeVideo.url;