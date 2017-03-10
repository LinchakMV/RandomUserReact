export function getRandomText() {
  const promise = fetch(`http://www.randomtext.me/api/lorem/p-1/10-50`)
    .then(response => {
    
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch(error => {
      console.log(error);
    });
    
  return promise;
}