/* export const getCoachings = async (store) => {
    try {
      store.commit(COACHING_FETCHING, true);
      const { data } = await service.request({
        method: 'get',
      });
      store.commit(SET_COACHINGS, data);
    } catch (err) {
      await service.manageError(err);
    } finally {
      store.commit(COACHING_FETCHING, false);
    }
  };

  */
 
 import employeesData from "@/api/employeesTable.json"
 import {
    SET_EMPLOYEES,  
  } from './types';
  

   export const loadEmployees = async (store) => {
    console.log('trayendo action los employees')
    try {
      const data = employeesData
      store.commit(SET_EMPLOYEES, data);
    } catch (err) {
      console.log(err);
    } finally {
        console.log('terminó la carga de employee')
    }
  };
