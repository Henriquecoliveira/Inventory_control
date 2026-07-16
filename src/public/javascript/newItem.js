const form_new_item = document.getElementById("form_new_item");

const token = localStorage.getItem("jwt_token");
if(!token) {
    window.location.replace("login.html");
}

form_new_item.addEventListener("submit", async (event) => {
    event.preventDefault();

    const product = {
        name: form_new_item.name.value.trim(),
        description: form_new_item.description.value.trim() || null,
        brand: form_new_item.brand.value.trim() || null,
        quantity: form_new_item.quantity.value,
        unit: form_new_item.unit.value.trim() || null
    }

    const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ product })
    })

    const data = await response.json();

    if(!response.ok) {
        alert(data.error);
    } else {
        alert("item added successfully")
    }
})