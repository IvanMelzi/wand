import { initStore } from './store';

// Actions store.
const configureStore = () => {
  const actions = {
    NEW_TASK: (currentState, newTask) => {
        let updatedTasks = [];
        if (currentState.tasks) {
          updatedTasks = [...currentState.tasks];
        }

        updatedTasks.push(newTask)
        saveStorage({ tasks: updatedTasks });
        return { tasks: updatedTasks };
    }
  };

  
  initStore(actions);
};

// Set local storage.
const saveStorage = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
}

export default configureStore;
