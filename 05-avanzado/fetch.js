// ::::::::: FETCH :::::::::
// Fetch es una funcion que se utiliza para hacer peticiones a servidores. Es una funcion asincrona.
// Fetch recibe como argumento la URL de la API y devuelve una promesa.
// La promesa devuelve un objeto Response.
// El objeto Response tiene 2 metodos: json() y text().
// json() devuelve un objeto JavaScript.
// text() devuelve un string.

// Ejemplo de uso de fetch para hacer una peticion GET.
fetch("https://jsonplaceholder.typicode.com/posts/1") // Por defecto, fetch hace una peticion GET.
    .then(response => response.json())
    .then(data => console.log(data)) // {id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}
    .catch(error => console.log(`Error: ${error}`)); // Error: TypeError: Failed to fetch

// Para hacer una peticion POST, se puede usar el metodo fetch con el metodo POST.
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ // El body es un objeto que se convierte a JSON.
        title: "foo",
        body: "bar",
        userId: 1
    }),
    headers: { // Los headers son un objeto que se convierte a JSON.
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(data => console.log(data)) // {id: 101, title: "foo", body: "bar", userId: 1} (El id es el que se genera automaticamente)
    .catch(error => console.log(`Error: ${error}`)); // Error: TypeError: Failed to fetch

// Para hacer una peticion PUT, se puede usar el metodo fetch con el metodo PUT.
fetch("https://jsonplaceholder.typicode.com/posts/1", { // La URL es la misma, pero se indica el id del post a actualizar.
    method: "PUT",
    body: JSON.stringify({
        title: "foo updated",
        body: "bar updated",
        userId: 1 // El userId es el mismo, pero se cambia el titulo y el body.
    }),
    headers: { // Los headers son un objeto que se convierte a JSON.
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(data => console.log(data)) // {id: 1, title: "foo", body: "bar", userId: 1}
    .catch(error => console.log(`Error: ${error}`)); // Error: TypeError: Failed to fetch

// Para hacer una peticion DELETE, se puede usar el metodo fetch con el metodo DELETE.
fetch("https://jsonplaceholder.typicode.com/posts/1", { // La URL es la misma, pero se indica el id del post a eliminar.
    method: "DELETE"
})
    .then(response => response.json())
    .then(data => console.log(data)) // {} (El objeto response es un objeto vacío)
    .catch(error => console.log(`Error: ${error}`)); // Error: TypeError: Failed to fetch

// Algunos codigos de estado de respuesta:
// 200: OK
// 201: Created
// 204: No Content
// 400: Bad Request
// 401: Unauthorized
// 403: Forbidden
// 404: Not Found
// 500: Internal Server Error
// 502: Bad Gateway
// 503: Service Unavailable
// 504: Gateway Timeout