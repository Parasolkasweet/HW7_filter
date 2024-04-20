
const users = [
    {
        id: 1,
        username: "Jon",
        age: 20,
        status: "online",
        lastActivity: 0,
        salary: 150
    },
    {
        id: 2,
        username: "Anna",
        age: 32,
        status: "offline",
        lastActivity: 25,
        salary: 300
    },
    {
        id: 3,
        username: "Bob",
        age: 19,
        status: "offline",
        lastActivity: 120,
        salary: 100
    },
    {
        id: 4,
        username: "David",
        age: 46,
        status: "online",
        lastActivity: 120,
        salary: 1500
    },
    {
        id: 5,
        username: "Bill",
        age: 18,
        status: "offline",
        lastActivity: 8,
        salary: 2000
    },
];


// 1. Отобразить только тех пользователей у кого зарплата больше 200$ и они старше 20 лет, так как банк остальным не одобряет кредит
let filteredUsers1 = users.filter(user => user.salary > 200 && user.age > 20);
console.log(filteredUsers1);
// 2. Отобразить в console имена тех пользователей кто сейчас в сети
let filteredUsers2 = users.filter(user => user.status === "online").map(user => user.username);
console.log(filteredUsers2);
// 3. Далее отобразить не только тех кто в онлайн, также добавить offline пользователей у кого активность была не больше 10 минут назад, и рядом с offline вывести имена
let filteredUsers3 = users.filter(user => (user.status === "offline" && user.lastActivity < 10) || user.status === "online");
console.log(filteredUsers3.map(user => user.username));

