const myPromise = new Promise((resolve, reject) => {
  const success = false; // try changing this to false
  if (success) {
    resolve("Task completed successfully!");
  } else {
    reject("Task failed!");
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
