import { CREATE_REMINDER, CREATE_REMINDER_SUCCESS, CREATE_REMINDER_ERROR,
    READ_REMINDERS, READ_REMINDERS_SUCCESS, READ_REMINDERS_ERROR,
    UPDATE_REMINDER, UPDATE_REMINDER_SUCCESS, UPDATE_REMINDER_ERROR,
    DELETE_REMINDER, DELETE_REMINDER_SUCCESS, DELETE_REMINDER_ERROR
} from "../ActionTypes";

const init = {
reminders:[],
reminder:{},
loading:false,
error:false,   
}



export default function reminderCrud(state=init, action){
switch(action.type){

   case READ_REMINDERS: 
   return {
       ...state,
       loading:true
   }


   case READ_REMINDERS_SUCCESS: 
   return {
       ...state,
       loading:false,
       reminders: action.payload
   }

   case READ_REMINDERS_ERROR: 
   return {
       ...state,
       loading:false,
       error:true
   }

   case CREATE_REMINDER: return {...state}
   case CREATE_REMINDER_SUCCESS: return {...state}
   case CREATE_REMINDER_ERROR: return {...state}        
   case UPDATE_REMINDER: return {...state}
   case UPDATE_REMINDER_SUCCESS: return {...state}
   case UPDATE_REMINDER_ERROR: return {...state}
   case DELETE_REMINDER: return {...state}
   case DELETE_REMINDER_SUCCESS: return {...state}
   case DELETE_REMINDER_ERROR: return {...state}
   default: return state;
}

}
