# Texto Secreto
Es una aplicación para niños y adolescentes donde jugarán a encriptar un mensaje y compartirlo con sus amigos para que éstos puedan decodificarlo.

Pensado para niños y jóvenes entre 9 a 16 años idealmente, pero no tiene límite de edad para su uso.

Texto Secreto cubre la necesidad de poder compartir mensajes ocultos entre los niños para divertirse codificando y decodificando textos. Antiguamente los niños creaban sus mensajes secretos con una tabla muy conocida por todos, por lo cual era de fácil acceso poder descifrar los mensajes. ¡Gracias a Texto Secreto los amigos tendrán un código que sólo ellos conocen para poder crear y leer sus mensajes!



## ¿Cómo jugar?

Texto Secreto funciona con un código numérico, el que permite crear el mensaje cifrado un cuadro de mensaje donde escribir lo que se desea cifrar o descifrar.
1.	Para comenzar a cifrar tu mensaje crea un código de 2 dígitos numéricos para formar tu Código Secreto en la sección “Crear Mensaje”. Debes recordarlo porque con él podrás crear y leer tus mensajes secretos.
2.	Luego escribe el mensaje que deseas en el cuadro de texto y presiona el botón “Ok”
3.	En el siguiente cuadro de texto aparecerá tu texto cifrado.
4.	Si deseas decodificar este mensaje secreto debes anotar el código secreto en la casilla “Ingresa el código secreto para Decodificar tu mensaje”. Si no recuerdas el código no podemos descifrar tu mensaje :´(
5.	Luego escribe el mensaje codificado en el cuadro de texto y presiona el botón “Decodificar”
6.	Inmediatamente aparecerá tu mensaje desencriptado o decodificado en el siguiente cuadro de texto.



#### Interfaz de usuario (UI)

La interfaz permite al usuario:
- Elegir un desplazamiento (código secreto) indicando cuántas posiciones queremos que el cifrado desplace cada carácter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

#### Diagrama de Flujo
A nivel de programación la aplicación cuenta con los siguientes archivos:

```text
./
├── Index.html
├── index.js
│  	└── interacción de la página
├── cipher.js
│  	└── lógica del programa
└── styles.css
```



A nivel de usuario la página tiene esta estructura:

```text
./
├── Home
│       ├── Crear Texto
│ 		         └── Codificar
│       ├── Leer Texto
│ 	        	 └── Decodificar
└──
```



