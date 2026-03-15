function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json());
}

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json());
}

// function to display results
function displayResults(todo, user) {
  console.log("Todo title:", todo.title);
  console.log("User name:", user.name);
}

// Promise.all
Promise.all([getTodo(), getUser()])
  .then(([todo, user]) => {
    displayResults(todo, user);
  })
  .catch(error => {
    console.error("Error while loading data:", error);
  });

// Promise.race
Promise.race([getTodo(), getUser()])
  .then(result => {
    console.log("First response received:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });
