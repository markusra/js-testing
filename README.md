# Testing i Vanilla JS

Nå skal vi lære oss å teste ren JavaScript-kode!

## Kom i gang

1. Kjør `yarn` for å installere alle avhengigheter
2. Starte backenden ved å kjøre `node server.js`
3. I et annet terminalvindu, start frontenden ved å kjøre `yarn dev`
4. et tredje terminalvindu, kjør `yarn test` for å kjøre testene i "watch mode" (de kjøres på nytt hver gang du endrer noe).
5. Åpne koden i din favoritteditor, naviger til `src/__tests__/` og følg instruksjonene derifra!

## Frontend

Applikasjonen er skrevet i ren JavaScript uten noe rammeverk. De Du kan endre applikasjonen ved å redigere `main.js`.

## Backend

For å lagre todo-listen bruker vi en veldig enkel express-server. Denne kan startes ved å kjøre `node server.js`.

## Oppgaver

💡 Test-filen som brukes i oppgavene finner du i mappen `__tests__`.

💡 Bruk [denne cheatsheet'en](https://testing-library.com/docs/dom-testing-library/cheatsheet) til å finne queries.

### Oppgave 1

Test om det finnes et h1-element på siden. Test også om h1-elementet inneholder teksten "What to-do?".

### Oppgave 2

Lag en test som skriver en todo i input-feltet, trykker knappen og sjekker om den har blitt lagt til i listen over todos. 

### Oppgave 3

Sjekk om todo'en blir slettet når du trykker på den.

### Oppgave X
Her skulle det vært mange flere oppgaver med mocking av komponenter og endepunkter, men det viste seg å være umulig (?) å få fetch til å fungere med JSDOM... 😔