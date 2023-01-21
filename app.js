
const http = new EasyHTTP();

// //GET albums

// http
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//ALBUM data
// const data = {
//   userId: "9",
//   title: "Album 89",
// };
//POST albums

// http
//   .post("https://jsonplaceholder.typicode.com/albums/3", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//UPdate albums
// http
//   .put("https://jsonplaceholder.typicode.com/albums/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//UPdate albums
http
  .delete("https://jsonplaceholder.typicode.com/albums/2")
  .then(data => console.log(data))
  .catch(err => console.log(err));