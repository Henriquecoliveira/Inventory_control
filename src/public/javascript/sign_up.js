const form_sign_up = document.getElementById("form_sign_up");

form_sign_up.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userObj = {
        id: parseInt(form_sign_up.id.value.trim()),
        name: form_sign_up.name.value.trim(),
        position: form_sign_up.position.value.trim(),
        password: form_sign_up.password.value
    }

    const response = await fetch("http://localhost:3000/api/newUser", {
        method: "POST",
        headers: { "Content-type": "application/json"},
        body: JSON.stringify({ userObj })
    });

    const data = await response.json();

    if(!response.ok) {
        return alert(data.error);
    }

    window.location.replace("login.html");
})