import * as actions from '@/stores/actions';
import * as getters from '@/stores/getters';

import {

   // SET_COACHINGS,
   SET_EMPLOYEES

  } from './types';



const mutations = {
   /*
    [SET_COACHINGS](state, coachings) {
      state.coachings = coachings;
    },
    */
    [SET_EMPLOYEES](state, employees) {
        state.employees = employees;
      },

  };


const state = {
    employees: [],
   // coachingFetching: false,
    //coachings: [],
    //coachingDetail: undefined,
    //coachingTypes: [],
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };