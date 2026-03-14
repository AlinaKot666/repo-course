function loadUserTask() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json());
}

function loadUserProfile() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json());
}

// waiting for both requests
Promise.all([loadUserTask(), loadUserProfile()])
  .then(results => {

    const task = results[0];
    const user = results[1];

    console.log("User profile loaded:");
    console.log(user.name, "-", user.email);

    console.log("User task loaded:");
    console.log(task.title, "| completed:", task.completed);

  })
  .catch(error => {
    console.log("Error while loading data:", error);
  });


// get the fastest response
Promise.race([loadUserTask(), loadUserProfile()])
  .then(result => {
    console.log("First response from server:");
    console.log(result);
  })
  .catch(error => {
    console.log("Request failed:", error);
  });
