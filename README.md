# App Passenger

Esta aplicación está orientada para todos los usuarios que usen el transporte público sin la necesidad de usar monedas o billetes que pueden ser estar contaminados con el virus así evitando la propagación del mismo. La aplicación estará disponible para la descarga en la Google Play y Apple Store.

Las funcionalidades que ofrece esta aplicación son:

- El usuario se registra a la aplicación con su información básica necesaria como número de identificación, nombre, dirección, correo electrónico, entre otros.
- Carga el dinero a su cuenta a través de servicio bancarios en Internet o en puntos de recarga en efectivo como tiendas de barrio y entidades bancarias para poder usar el transporte público. 
- El pasajero sube al transporte siguiendo las recomendaciones de la OMS y muestra desde su celular el código de pago al cobrador del transporte quien usa su celular para escanear el código QR del pasajero y debitar el costo del viaje.  
- El código QR también permite identificar la unidad en la que  se ha embarcado el usuario y  a las personas que compartieron este viaje. 
- El pasajero puede pagar por varias personas con tarifas diferentes.
- Si una persona ha usado Transporte Pago y da positivo para COVID-19, el sistema de salud estará en la facultad de pedir a Transporte Pago información de las rutas de dicho usuario para realizar el seguimiento respectivo y ponerse en contacto con posibles contagiados. 

Funcionamiento sin necesidad de Internet ya que la transacción la realiza la aplicación controlador.

## ¿Qué contiene el demo?
El demo te brinda la experiencia desde el punto del pasajero, te permitirá logearte a través de tu cuenta de Google, y se te obsequiarán $10 para el pago de tu pasaje por medio de un código QR en la aplicación.

## ¿Cómo Probar?

Para probar debes tener un celular Android y habilitar los origenes desconocidos.

### Opción 1:
* Descarga el apk  [aquí](https://exp.host/@henrymvc/customTabs)
* Instala el apk, si te pregunta 
### Opción 2:
* Descarga expo-client [aquí](https://exp.host/@henrymvc/customTabs) 
*  Escanea el código QR de la aplicación aquí  
### Opción 3:
Esta opción es Avanzada y te permitirá probar todo el código por ti mismo
*  Require Expo 3
* clona este repositorio 
- `yarn install || npm install` para instalar las depencias.
- `expo start` para el entorno de desarrollo.
- Expo-client para poder probar en un emulador o en un telefono.

## Aplicaciones complementarias
- [Aplicación Controlador](https://github.com/initgrammers/AppCollector)
- [Backend](https://github.com/initgrammers/firebaseBackTP)
## Licencia

MIT
