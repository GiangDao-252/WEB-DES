// console.log(fetch("https://jsonplaceholder.typicode.com.vn/users");

// fetch ("https://jsonplaceholder.typicode.com.vn/users")
// .then (function (response) { 
//     return response. json ();
// })
// .then (function (data) {
//     console. log (data); // parsed array of users
// })
// .catch (function (error) {
//     console. error ("Something went wrong: ", error) ;
// });

// async function fetchUsers() {
//     return "Hello";
// }

// console.log(fetchUsers());

// fetchUsers().
// then((res)  => console.log(res));
// console.log()

//Lab 1
function delayNetwork() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Data đã được tải thành công!");
        }, 2000);
    });
}

//dùng .then
console.log("Dùng .then");
delayNetwork().then(function(result){
    console.log("Kết quả 1: ", result)
})

//dùng async / await
async function getNetworkData() {
    console.log("Dùng async/await");

    const result = await delayNetwork();

    console.log("Kết quả 2:", result);
}

getNetworkData();


//lab 2

async function loadUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        const users = await response.json(); 
        
        const tbody = document.querySelector("#user-table tbody");
        
        users.forEach(function(user) {
            const row = document.createElement("tr");
            const userAddress = `${user.address.street} - ${user.address.city}`
            row.innerHTML = `
                <td style="text-align: center;">${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${userAddress}</td>
            `;
            tbody.appendChild(row);
        });
        
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

loadUsers();

//lab 3
async function loadCreditScores() {
    try {
        const response = await fetch("./data.json");
        const creditData = await response.json();
        const tbody = document.querySelector("#credit-table tbody");
        creditData.forEach(function(sme) {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${sme.sme_id}</td>
            <td>${sme.company_name}</td>
            <td>${sme.credit_score}</td>
            <td>${sme.risk_level}</td>
            <td>${sme.approved_limit}</td>
            `;
            tbody.appendChild(row);
        });
    } catch(error) {
        console.error("Lỗi đọc JSON: ", error);
    };
} 

loadCreditScores();