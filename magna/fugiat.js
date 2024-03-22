function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          resolve(response);
        } else {
          reject(new Error('Failed to load'));
        }
      })
      .catch(error => reject(error));
  });
}
