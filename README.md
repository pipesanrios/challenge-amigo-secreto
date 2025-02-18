# Challenge amigo secreto

Github Pages: https://pipesanrios.github.io/challenge-amigo-secreto/

## Descripción

* se agregaran nombres de amigos, al agregarse se verificara que el campo no este vacio y que el nombre no este en la lista, una vez creada la lista al clicar en sortear  mostrara el nbombre de un amigo de la lista aleatoriamente

## Funciones

- **Agregar Amigos:**  
    Permite ingresar nombres y añadirlos a un arreglo. Se valida que el campo no esté vacío y que el nombre no se repita

- **Mostrar Lista de Amigos:**  
    Cada nombre agregado se muestra como `<li>` dentro del HTML. La lista se limpia y actualiza cada vez que se añade un nuevo nombre

- **Sortear Amigo Secreto:**  
    Utilizando `Math.random()` y `Math.floor()`, se selecciona de manera aleatoria un nombre del arreglo de amigos y se muestra el resultado en el HTML

- **Funcion adicional** 
    Se agrego la opcion de al teclear enter se agrege, de modo que no se pierde tiempo moviendo el cursor hasta el boton agregar
