class Product { constructor(name, description, brand, imageUrl, price)
    { this.name = name; this.description = description; this.brand = brand; this.imageUrl = imageUrl; this.price = price; } }
    let uri = "https://striveschool-api.herokuapp.com/api/product/"
    let apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NTc1MTI2NzYxNDAwMTgzYzJlNmUiLCJpYXQiOjE3MDIzODU1MjUsImV4cCI6MTcwMzU5NTEyNX0.Mek5NJ1hxc_LnmBuy4rNpt5BzaJgXBWojzopXbgzu0c";
// Chiamata POST
function createData(data, uri) {
    fetch(uri, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

//Chiamata GET 
function createGet(uri) {
    fetch(uri, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}


// Event Listener
document.addEventListener("DOMContentLoaded", async () => {
        createGet(uri);
});

let prova = new Product("nome", "descrizione", "guccio", "noncistaurl", 7 );
