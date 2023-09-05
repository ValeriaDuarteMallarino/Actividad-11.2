const url = 'https://jsonplaceholder.typicode.com/users';

document.getElementById("Formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    
    const datos = new FormData(this);

    const solicitud = {
        method: 'POST',
        body: JSON.stringify({
           Nombre: datos.get("nombre"),
           Apellido: datos.get("apellido"),
           Fechadenacimiento: datos.get("fechadenacimiento")
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    };

    fetch(url, solicitud)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            } else 
           {return response.json()};  
        })

    .then(data => {
      console.log("Solicitud exitosa:", data);
      // Realiza acciones adicionales con los datos de respuesta si es necesario
    })

});
