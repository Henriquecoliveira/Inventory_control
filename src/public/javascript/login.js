const form_login = document.getElementById("form_login");

form_login.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userObj = {
        id: parseInt(form_login.id.value.trim()),
        password: form_login.password.value
    }

    try {
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({ userObj })
        })

        const data = await response.json();
        
        if(!response.ok) {
            return alert(data.error);
        }

        window.localStorage.setItem("jwt_token", data.token);
        window.location.replace("index.html");
    } catch (err) {
        console.error(err);
    }
})