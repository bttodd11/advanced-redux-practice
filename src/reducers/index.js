import { combineReducers } from "redux";

function newComments(state = "",action){
return state;
}

function newTasks(state = "",action){
return state;
}

function newOrders(state = "",action){
return state;
}

function tickets(state = "",action){
return state;
}

function orders(state = [],action){
return state;
}

function tasks(state = [],action){
return state;
}

function messages(state = [],action){
return state;
}

const reducers = combineReducers({
  newComments,
  newTasks,
  newOrders,
  tickets,
  orders,
  tasks,
  messages
});

export default reducers;