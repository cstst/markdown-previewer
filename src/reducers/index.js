import { INPUT, RESIZE } from '../actions/types';

const initialState = {
  input: '',
  frames: {
    editor: {
      visible: true,
      expanded: false
    },
    previewer: {
      visible: true,
      expanded: false
    }
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case INPUT:
      return {
        ...state,
        input: action.payload
      }
    case RESIZE:
      const frame = action.payload,
            otherFrame = frame !== 'editor' ? 'editor': 'previewer',
            frameExpanded = state.frames[frame].expanded;
      return {
        ...state,
        frames: {
          [frame]: {
            visible: true,
            expanded: frameExpanded ? false: true
          },
          [otherFrame]: {
            visible: frameExpanded ? true : false,
            expanded: false
          }
        }
      }
    default:
      return state;
  }
}