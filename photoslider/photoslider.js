
 
 function fetchImagen() { 


fetch(`https://api.thecatapi.com/v1/images/search`)
.then(response => response.json())
.then(data => { 
let imagenUrl = data[0].url;



 let contenedor = document.getElementById("contenedor")
 contenedor.innerHTML="";
 
    let contenido = document.createElement("img");
    contenido.setAttribute('src',`${imagenUrl}`)
    contenido.classList.add(".cuadroImagen")
    contenedor.appendChild(contenido)
 let boton = document.querySelector(".boton")
 boton.addEventListener("click", fetchImagen)


 })
.catch(err => console.log(err));
}



fetchImagen()


 
