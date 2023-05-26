<h1>INFORMACION PARA INSTALAR EL COMPONENTE </h1>
 <H5>Pasos</h5> 
  <UL>
    <LI>1. Tener instalado docker</LI>
    <LI>2. Ejecutar Docker compose up</LI>
    <li>3. Instalar AWS CLI https://aws.amazon.com/es/cli/</li>
    <LI>4. Conectarse a dynamodb</LI>
    <LI>5. Ejecutar los commando con la estrucutura de la base de datos</LI>
    <LI>6. Crear los datos de restaurantes end point POST /restaurant</LI>
    <LI>7. Crear las preferencias del usuario POST /preferences/create</LI>
    <LI>8. Ejecutar api GET /preferences, enviar mapametro nombre de usuario</LI>
  </ul>  
  En esta ultima accion el back-end le enviara el nombre de restaurante con las preferencias de Comida que el usuario previamente registro y que corresponde a los platos que sirve cada restaurante, Entregando nombre del restaurante y la cantidad de conincidencias en platos que corresponde para el usuario registrado

## Descripcion

[DynamoDb] Instalacion de imagen de dynamo db on Docker y la app ne NESTJS 

## Instalación

```bash
$ Docker compose up
```
<p>Despues de instalar aws cli, ejecutar el siguiente comando</p>

## Cargar estructura de datos
```bash
$ aws configure

```
<p>Poner la informacion que se encuentra en el archivo .env, segun corresponde .... De ser necesario cambiar dynamodb por localhost</p>

## Cargar estructura de datos
```bash
$ aws dynamodb --endpoint-url http://dynamodb:8000 list-tables
$ aws dynamodb --endpoint-url http://dynamodb:8000 create-table   --table-name restaurant       --attribute-definitions AttributeName=name,AttributeType=S AttributeName=plate,AttributeType=S --key-schema AttributeName=name,KeyType=HASH AttributeName=plate,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --table-class STANDARD 
$ aws dynamodb --endpoint-url http://dynamodb:8000 create-table   --table-name user_preferences --attribute-definitions AttributeName=name_user,AttributeType=S AttributeName=preferences,AttributeType=S --key-schema AttributeName=name_user,KeyType=HASH AttributeName=preferences,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --table-class STANDARD
aws dynamodb --endpoint-url http://dynamodb:8000 list-tables

```

<h5>WELL DONE</h5>
Revisar la documentacion del endpoint, publicada en http://localhost:3000







