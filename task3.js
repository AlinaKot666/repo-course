async function getUserTask() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const task = await response.json();
  return task;
}

async function getUserProfile() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  return user;
}

async function loadUserDashboard() {
  try {

    console.log("Loading user dashboard...");

    // wait for both requests
    const [task, user] = await Promise.all([
      getUserTask(),
      getUserProfile()
    ]);

    console.log("User profile:");
    console.log(user.name, "-", user.email);

    console.log("Current task:");
    console.log(task.title, "| completed:", task.completed);

    // fastest response
    const fastestResponse = await Promise.race([
      getUserTask(),
      getUserProfile()
    ]);

    console.log("First response received from server:");
    console.log(fastestResponse);

  } catch (error) {
    console.log("Failed to load dashboard:", error);
  }
}

loadUserDashboard();
