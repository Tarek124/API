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
    .catch(error =>
        console.log(error)
    )

function displayUsers(user) {
    const userNames = user.map(user => user)
    const ul = document.getElementById("user-container");
    console.log(userNames[0])
    // for (let i = 0; i < user.length; i++) {
    //     const element = user[i];
    //     const li = document.createElement("li");

    // }
    const li = document.createElement("li");
    li.innerText = userNames[0].address;
    ul.appendChild(li)

}