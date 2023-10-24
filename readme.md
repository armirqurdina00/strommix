# b2c-origin-webapp

## Description
**Herkunftsnachweis für Grünen Strom** - Ihre Energie-Transparenz in der Tasche!

## Installation

### Google Maps API Setup

1. **Generate API Key:**
   - Navigate to [Google Maps API Documentation](https://developers.google.com/maps/documentation/javascript/get-api-key).
   - Follow the instructions to create your Google Maps API key.

2. **Integrate API Key into Application:**
   - Set Google Maps API key in  ".env.local.template" file.
   - Once updated, rename the file to ".env.local" for it to be recognized by your application.

## Usage

### Running the App in Development Mode

1. **Install Dependencies:**

```bash
npm install
```

2. **Start the Application:**

```bash
npm run dev
```

After executing the above commands, the application will launch in development mode. You can now test it and make any necessary modifications.

## Repositories
- [GitHub](https://github.com/BlockInfinity/b2e2_b2c_origin_webapp)
- [Azure DevOps](https://enbw.visualstudio.com/b2e2/_git/b2e2_b2c_origin_webapp)

## Deployment Links
- [Development Environment](https://b2e2-b2c-origin-webapp-dev.azurewebsites.net/)
- [Production Environment](https://b2e2-b2c-origin-webapp-prod.azurewebsites.net/)

## Design Mockup
- [Figma Prototype](https://www.figma.com/proto/HdR8IXsKi8UtcpN4dFk1c8/b2c_origin_webapp?type=design&node-id=394-714&t=4TnEDIsMNdH2wkDy-0&scaling=scale-down&page-id=0%3A1)

## Git Hooks
To avoid pushing commits with lots of linting violations, activate the hooks:

```
git config core.hooksPath hooks
```

# Users 

## Personas

### Vater Volker:

- **Name:** Volker
- **Alter:** 53 Jahre
- **Beruf:** Ingenieur
- **Lebensstil:** Lebt im Eigenheim, besitzt ein Familienauto, legt Wert auf Familienzeit, Komfort und Bildung seiner Kinder.
- **Energieverhalten:** Überlegt, Solarpaneelen zu installieren. Durch seine Kinder motiviert, sich mit Energiethemen zu befassen und nachhaltige Entscheidungen zu treffen.
- **Ziel:** Sucht nach finanziellen und ökologischen Vorteilen bei Energieentscheidungen. Möchte sich selbst und seine Kinder zu verantwortungsbewussten Energieverbrauchern entwickeln.

### Kritisch Klara:

- **Name:** Klara
- **Alter:** 23 Jahre
- **Beruf:** Studentin der Energiewirtschaft
- **Lebensstil:** Technikaffin, engagiert sich bei "Fridays for Future" und Greenpeace, hinterfragt jedoch etablierte Prozesse.
- **Energieverhalten:** Sucht nach Ineffizienzen im Energiesystem und will Alternativen fördern.
- **Ziel:** Klara strebt nach einer transparenten, nachhaltigen und gerechten Energiezukunft, basierend auf Fakten und effektiven Lösungen.

### Techie Tim:

- **Name:** Tim
- **Alter:** 35 Jahre
- **Beruf:** Technik-Journalist beim SWR
- **Lebensstil:** Technikaffin, nutzt Smart-Home-Geräte und Elektroautos.
- **Energieverhalten:** Optiert für energieeffiziente Technologien, um den ökologischen Fußabdruck zu reduzieren.
- **Ziel:** Deckt als Journalist Greenwashing auf und strebt nach einem nachhaltigen, technikaffinen Lebensstil.

## User Stories
(Nach subjektiver Wichtigkeit sortiert.)​

### User Story 1: Stromerzeugungsinformationen anzeigen

**Als Vater Volker, Kritisch Klara und Techie Tim möchte ich wissen, durch welche Methode mein Strom erzeugt wurde, um besser über dessen Nachhaltigkeit informiert zu sein.**

### Akzeptanzkriterien:

- Die App zeigt eine klare Aufschlüsselung der verschiedenen Stromerzeugungsmethoden (z.B. Windenergie, Solarenergie, Kohle).​
- Für jede Methode wird angezeigt, wie viel Prozent meines Stroms von dieser Methode erzeugt wurde.​
- Es gibt Ansichten der Stromerzeugungsinformationen für viertelstündlich, Tag, die Woche, den Monat und das Jahr (in umgekehrte Reihenfolge hervorheben)?​
- Die Ansicht "seit letzter Nutzung" wird hervorgehoben oder zuerst angezeigt​
- Der Verlauf der Strommix-Verteilung muss erkenntlich sein. ​
- Es gibt eine Legende oder Erklärung für jedes Symbol oder jede Farbe, die verwendet wird, um die verschiedenen Stromerzeugungsmethoden darzustellen.

### User Story 2: Energiewunsch Erfüllung

Als Vater Volker, Kritisch Klara und Techie Tim möchte ich wissen, ob mein Energiewunsch erfüllt werden konnte.​

### Akzeptanzkriterien:
- Die App zeigt an, ob der jeweilige Energiewunsch in den unterschiedlichen Zeiträumen erfüllt wurde.​
- Die App zeigt den jeweiligen Energiewunsch an.​

### User Story 3: Regionale Herkunft des Stroms

**Als Vater Volker, Kritisch Klara und Techie Tim möchte ich wissen, woher mein Strom kommt, um ein klares Verständnis über seine regionale Verteilung und Herkunft zu haben.**

### Akzeptanzkriterien:

- Die App zeigt die regionale Verteilung der Stromquellen anhand von einer Karte.​
- Es ist möglich, den regionalen Ursprung des Stroms auf verschiedenen Zeitskalen (Tag, Woche, Monat, Jahr) zu betrachten.​
- Die regionale Verteilung der Stromquellen wird in Prozent oder auf andere Weise veranschaulicht, um sie benutzerfreundlich darzustellen.​
- Angelehnt an User Story 1 wird die Methode der Stromerzeugung ebenfalls dargestellt.​
- Falls vorhanden, zeigt die App ein Foto von der Anlage.​
- Anlagen, die ein Polygon als Standort nutzen, werden nur dann angezeigt, wenn der Kartenausschnitt größer als das Polygon selbst ist. Verkleinert der Nutzer den Kartenausschnitt durch Zoomen, werden diese Anlagen nicht mehr dargestellt. Bei einem Klick auf das Anlagen-Icon wird die Fläche des Polygons schraffiert angezeigt.
- Anlagen ohne Geokoordinaten werden in der ersten Version nicht berücksichtigt.

### User Story 4: Energiequelle auswählen

**Als Vater Volker, Kritisch Klara und Techie Tim möchte ich auswählen können, woher mein Strom kommt oder auf welche Weise er erzeugt wird, um eine bewusste und nachhaltige Entscheidung für meine Energiequelle treffen zu können.**

### Akzeptanzkriterien:

- Die Nutzer können aus einer klaren Liste oder Auswahlmöglichkeit verschiedener Stromerzeugungsmethoden, darunter Windenergie, Solarenergie usw., ihre bevorzugte Energiequelle auswählen. ​
- Standardmäßig wird die "Renewable First" Konfiguration ausgewählt.​
- Der Nutzer kann Präferenzen für einen Gültigkeitszeitraum angeben. Diese Präferenzen können anschließend nicht mehr geändert werden. ​
- Standardmäßig beträgt der Gültigkeitszeitraum ein Monat. Das ist zudem der kürzeste Gültigkeitszeitraum.​
- Die App ermöglicht den Nutzern, häufig verwendete Konfigurationen einfach auszuwählen.​  (Hat in der ersten Version keine Priorität)
- Die Nutzer können bestimmte Stromquellen anhand von geografischen Informationen oder Karten auswählen. (Hat in der ersten Version keine Priorität)

### User Story 5:

**Als Kritisch Klara und Techie Tim möchte ich wissen, wer noch von derselben Anlage Strom bekommt und wie viel, damit ich sicherstellen kann, dass von der Anlage nicht mehr Strom zugewiesen wird, als sie tatsächlich erzeugt.**

### Akzeptanzkriterien:
- Die App zeigt eine Liste von anderen (pseudonymisierten und namentlich bekannten) Verbrauchern an, die von derselben Stromerzeugungsanlage Strom beziehen.​
- Für jeden Benutzer oder Vertrag wird angezeigt, wie viel Prozent des von der Anlage erzeugten Stroms ihnen zugewiesen wurde.​
- Es gibt Ansichten der Anlagen-Stromaufteilung für den Tag, die Woche, den Monat und das Jahr.​
- Öffentlich bekannte Verbraucher werden namentlich angezeigt. (Stichwort "etherscan tags")​
- Die App ermöglicht es Tim, die Stromaufteilung für bestimmte Anlagen oder Verträge via Blockchain-Explorer zu überprüfen, um sicherzustellen, dass die Energie der Anlage nicht doppelt zugewiesen wird.​
- Die App verdeutlicht Volker und Klara, dass Leute wie Tim den Sachverhalt überprüfen können.​