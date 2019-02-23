import {
    VideoActions,
    SET_VIDEO_CLIPS,
    SET_FINISHED_VIDEO,
    START_VIDEO,
    STOP_VIDEO
} from './video.actions';
import { Video } from './video.model';

/**
 * State interface to update some components
 */
export interface State {
    /**
     * @ignore
     */
    videoClips: Video[];
    /**
     * @ignore
     */
    finishedVideo: Video[]
    /**
     * @ignore
     */
    activeVideo: Video;
}

/**
 * Initialize State
 */
const initialState: State = {
    videoClips: [],
    finishedVideo: [],
    activeVideo: null
}

/**
 * This reducer allows to evaluate the actions
 */
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

/**
 * getVideoClips has all video clips 
 * @param state 
 */
export const getVideoClips = (state: State) => state.videoClips;
/**
 * getFinishedVideo is to know when the video has finished
 * @param state 
 */
export const getFinishedVideo = (state: State) => state.finishedVideo;
/**
 * getActiveVideo has the video is running
 * @param state 
 */
export const getActiveVideo = (state: State) => state.activeVideo;