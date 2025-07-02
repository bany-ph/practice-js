import axios from "axios"

/* fetch("https://jsonplaceholder.typicode.com/posts/10")

.then(res => res.json())
.then(data => console.log(data))
.catch( error => console.log(error));
 */
axios.get("https://jsonplaceholder.typicode.com/posts/10")
.then((res) => console.log(res.data))
.catch((error) => console.log(error))