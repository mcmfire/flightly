#Flightly

### Features

- View flight information using a Flight Number and Flight Scheduled Date.
- Connect a Slack Webhook to automatically receive notifications whenever a Flight is delayed
- Utilizes search paramters for sharable flight information. For instance, a flight information can be shared as a link by pasting the url `http://localhost:3000/?flight_number=EK57&flight_date=2025-01-4`.
- Utilizes local storage to prevent repetitive API calls.
- Utilizes cookies to save webhook URL in the browser.

### Limitations

- The free API calls are only limited to 100 calls.
- Information might slightly differ to other flight API providers.

### Setup and Installation

1. Clone the repository.
`https://github.com/mcmfire/flightly.git`
2. Open the repository in your IDE (e.g. Visual Studio Code) and open the terminal.
3. Install the packages using any package manager, for this example I use NPM.
`npm install`
4. Run the app in development mode.
`npm run dev`
5. You can now access the app by typing the url in the browser.
`localhost:3000/`
