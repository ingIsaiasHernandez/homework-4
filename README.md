# Entregable 4 - Chat API

## Objetivo

El alumno deberá crear una API para una aplicación de de chat donde existan usuarios, y conversaciones. 

## Instrucciones

1.- Debes crear una API que pueda gestionar una aplicación de chat. 

2.- Deberás incluir al menos las siguientes tablas

- Users con los siguientes atributos
    - username
    - email
    - password
    - firstname
    - lastname
- conversations al menos con los siguientes atributos
    - title
    - type ( conversación grupal o en pareja )
- messages
    - content

3.- Las tablas deben relacionarse de la siguiente manera

- Un usuario puede crear una o más conversaciones
- Un usuario puede crear uno o muchos mensajes
- Una conversación puede tener uno o muchos mensajes
- Una conversación puede tener muchos participantes
- Un usuario puede participar en una o mas conversaciones

4.- Los endpoints que debes crear son los siguientes: 

- Un endpoint para registrar usuarios (crear)
- Un endpoint para loggear a un usuario
- Un endpoint que permita obtener a todos los usuarios de la aplicación
- Un endpoint que permita crear una nueva conversación en pareja
- Un endpoint que permita crear una conversación grupal
- Un endpoint que permita obtener todas las conversaciones en las que participa un usuario
- Un endpoint que permita obtener una conversación incluyendo sus participantes y los mensajes
- Un endpoint que permita crear mensajes en una conversación
- // eliminar una conversación

<aside>
📌 Tu decides las rutas donde estarán estos endpoints

</aside>

5.- Consideraciones

- La aplicación deberá contener los temas vistos esta semana.
- Un manejador de errores
- Y los middlewares de validación de datos
- Encriptar la contraseña al crear un usuario

### Reto opcional

Hacer que el usuaurio pueda tener una imagen (avatar) 

Crear un endpoint que permita agregar usuarios a una conversación grupal. 

Crear un endpoint que permita eliminar usuarios de una conversación grupal 

## Rubrica

- Sintaxis
    - El código debe tener la sintaxis correcta
        
        20%
        
- Estructura
    - Debe estar con la estructura de carpetas propuesta
        
        10%
        
- Funcionalidad
    - Al realizar las peticiones por un cliente como postman, no debe generar errores
        
        60%
        
- Código en ingles 10%
