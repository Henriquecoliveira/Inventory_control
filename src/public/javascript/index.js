const tbody = document.getElementById("tbody");

const token = localStorage.getItem("jwt_token");
if(!token) {
    window.location.replace("login.html");
}
document.addEventListener("DOMContentLoaded", () => {

    fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const rows = data.body.map(item => item = `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.brand}</td>
                <td>${item.quantity}</td>
                <td>${item.unit}</td>
            </tr>`).join("");
        
        tbody.innerHTML = rows;
        })
});