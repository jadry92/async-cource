const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey !!');
    } else {
      reject('Ups!');
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.log(error))