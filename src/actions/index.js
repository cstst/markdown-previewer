import { INPUT, RESIZE } from './types';

export const input = value => {
  return {
    type: INPUT,
    payload: value
  }
}

export const resize = frame => {
  return {
    type: RESIZE,
    payload: frame
  }
}