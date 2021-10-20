# Dagpengekalkulator

Dette er en dagpengekalkulator som er implementert i JavaScript med Node.js. I prosjektet brukes index.js for å kjøre programmet som brukeren kan interagere med. Dette programmet baserer seg på funksjonene som ligger i supportCalculator-filen.

For å kjøre filen må du først klone repo-et. Etter at du har klonet repo-et må du installere alle de korrekte pakkene med kommandoen

`npm install`

eller

`npm i`

Deretter kan du kjøre filen i terminalen ved å skrive

`node index.js`

## Testing

Testingen av programmet er gjort ved hjelp av Jest. Det er kun funksjonene som ligger i filen 'supportCalculator.js' som har blitt testet med Jest. For å kjøre testene kan du skrive kommandoen

`npm test`

i terminalen, gitt at du har installert pakkene med kommandoene beskrevet i seksjonen over.

Jeg har valgt å teste hver enkelt funksjon med hensyn på kant-tilfeller, ting som kan tenkes å gi error og tilfeller som åpenbart skal gi riktig resultat. Det er alltids rom for flere tester, men på et så lite prosjekt anså jeg de nåværende testene som tilstrekkelige. Jeg har valgt å ikke teste index.js for å spare tid. I et større prosjekt (hvor jeg har mer tid) ville jeg også forsøkt å teste denne filen da denne er spesielt viktig siden den faktisk kjører programmet som brukeren interagerer med.

## Valg av teknologi

Jeg har valgt å bruke JavaScript i denne oppgaven da dette er et språk jeg ønsker mer erfaring med, spesielt med tanke på testing. Jeg har valgt å bruke ES6-standard så langt det lar seg gjøre, men noen steder har jeg tydd til CommonJS da dette sparte meg tid, blant annet ved eksportering og importering av funksjoner. Dette var tidsbesparende da Jest kun har eksperimentell støtte til ES6 og derfor krever mer oppsett for å fungere med ES6-moduler. Grunnen til at jeg valgte ES6 er at dette er standarden i dag og derfor gagner det meg best å øve på dette.

## Oppgave

I denne oppgaven skal du finne ut om en bruker kan få dagpenger, og hvor mye. Reglene er basert på de ekte dagpengereglene, men forenklet til å passe til oppgaven. Dagpenger er en ytelse man kan få hvis man har mistet jobben eller er permittert. For å være kvalifisert til å få dagpenger, må man ha hatt arbeidsinntekt minst det siste kalenderåret.

Når en bruker søker om dagpenger trenger de å vite om de har rett til dagpenger. Hvis de får det innvilget, trenger de også å vite hvor mye de får per dag, kalt dagsatsen. For å få innvilget dagpenger må man enten ha tjent til sammen over 3G de siste 3 kalenderårene, eller ha tjent over 1.5G forrige kalenderår. Grunnbeløpet, kalt G, brukes til å beregne mange av NAVs ytelser. Grunnbeløpet justeres 1. mai hvert år og blir fastsatt etter trygdeoppgjøret.

Hvis man har tjent nok til å få dagpenger, er det et nytt regnestykke for å finne grunnlaget vi trenger for å beregne dagsatsen. Dette dagpengegrunnlaget er også basert på inntekten de siste tre årene. Dagpengegrunnlaget er den høyeste verdien av enten inntekten siste kalenderåret, eller gjennomsnittsinntekten de siste tre kalenderårene. Dagpengegrunnlaget kan ikke være høyere enn 6G.

For å finne dagsatsen deler man dagpengegrunnlaget på antall arbeidsdager i året, rundet opp. I NAV har vi definert antall arbeidsdager i et år til å være 260.

**Oppgaven er:**

Ta imot tre år med inntekt, og returnere om bruker har rett på dagpenger. Inntekten er én sum per kalenderår.

Hvis brukeren har rett på dagpenger skal du også returnere dagsatsen.
Bruk enten Java, JavaScript eller Kotlin, det er ingen krav om UI.
Besvarelsen skal inneholde tester.

**Eksempel: Hvis man har tjent dette:**

2020: 500000
2019: 450000
2018: 400000

så ville man hatt rett på dagpenger, og man får en dagsats på kr 1924kr
