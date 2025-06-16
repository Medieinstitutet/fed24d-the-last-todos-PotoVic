# 📌 Rättningsrapport – fed24d-the-last-todos-PotoVic

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Den inlämnade koden uppfyller alla krav för både G och VG. Studenten har implementerat en todo-lista i en react-applikation som uppfyller funktionalitetskraven som att markera uppgifter som klara, hantera klickhändelser för att ta bort uppgifter, samt använda ett formulär för att lägga till nya uppgifter. Dessutom används lifting state up och lokal lagring med lokalstatehantering. Det grafiska ramverket Tailwind CSS har också använts effektivt för att styra layout och stil.

💡 **Förbättringsförslag:**  
Koden är överlag välstrukturerad och följer god praxis. Följande mindre förbättringar kan övervägas: 1) Förbättra hanteringen av unika `<option>` elementenas förvalda värden i `select`-elementen så att de är mer tydligt definierade. 2) Konsolidera eller abstrahera CSS-klasser som upprepas för att öka återanvändbarheten. 3) Implementera fler testfall för att säkerställa att applikationen uppför sig korrekt under olika omständigheter. 4) Lägg till mer omfattande kommentarer där det är möjligt för att göra koden ännu mer läsbar och begriplig för andra utvecklare som kommer att arbeta med koden i framtiden.