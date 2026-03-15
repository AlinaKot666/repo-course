async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await response.json();
  return todo;
}

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  return user;
}

async function loadData() {
  try {
    const todo = await getTodo();
    const user = await getUser();

    console.log("Todo task:", todo.title);
    console.log("User:", user.name);

  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

loadData();
