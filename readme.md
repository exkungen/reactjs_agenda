# Jewel Labs - placerings module client

Realtime placerings client gemaakt met React

#### Installatie client:

* voer `npm install` uit in de folder /client

#### Running - Development omgeving:

* Voer `npm start` uit in de folder /client
* Je server draait nu inclusief hot reloading op: [localhost:8080](http://localhost:8080/)

#### Releasen Productie build:

* Voer `npm run release` uit in de folder /client

* Een geminifiede versie staat nu in /server/src/public en wordt static geserveerd door de satelliet

#### Webpack

Webpack wordt gebruikt voor het werken met o.a. modules, het aansturen van het transpileren en het hot reloaden van de development webserver. Voor optimaal gebruik zal webpack nog verwerkt worden in de satelliet applicatie.

#### Test

* Installeer Tape globaal `npm install tape --g`

* Voer `npm test` uit in de folder /client om de tape tests uit te voeren