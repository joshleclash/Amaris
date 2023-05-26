<h1>INFORMACION PARA INSTALAR EL COMPONENTE </h1>
 <H5>Pasos</h5> 
  <UL>
    <LI>1 . Tener instalado docker</LI>
    <LI>2 . Ejecutar Docker compose up</LI>
    <LI>3 . Conectarse a dynamodb</LI>
    <LI>4 . Ejecutar los commando con la estrucutura de la base de datos</LI>
    <LI>5 . Crear los datos de restaurantes end point POST /restaurant</LI>
    <LI>6 . Crear las preferencias del usuario POST /preferences/create</LI>
    <LI>7 . Ejecutar api GET /preferences, enviar mapametro nombre de usuario</LI>
  </ul>  
  En esta ultima accion el back-end le enviara el nombre de restaurante con las preferencias de Comida que el usuario previamente registro y que corresponde a los platos que sirve cada restaurante, Entregando nombre del restaurante y la cantidad de conincidencias en platos que corresponde para el usuario registrado

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ Docker compose up
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).







