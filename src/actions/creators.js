import { SET_HABITSLIST, ADD_HABITSLIST, UPDATE_HABITSLIST } from './types';

const setHabitlist = (habitslist) => ({ type: SET_HABITSLIST, habitslist });

const addHabitlist = (habitslist) => ({ type: ADD_HABITSLIST, habitslist });

const updateHabitlist = (habit) => ({ type: UPDATE_TODO_LIST, itemAttributes });

export { setHabitlist, addHabitlist, updateHabitlist };