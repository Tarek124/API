// const user = {
//     id: 2334,
//     name: "Tarek"
// }
// // 'id': 2334,
// // 'name': "Tarek"
// const userJson = JSON.stringify(user)
// console.log(userJson)
// const JsontoObject = JSON.parse(userJson)
// console.log(JsontoObject)



fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUsers(json))

function displayUsers(user) {
    const userNames = user.map(user => user.name)
    const ul = document.getElementById("user-container");

    for (let i = 0; i < user.length; i++) {
        const element = user[i];
        const li = document.createElement("li");
        li.innerText = element.name;
        ul.appendChild(li)

    }
}