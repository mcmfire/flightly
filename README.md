# Flightly

### Features

- View flight information using a Flight Number and Flight Scheduled Date.
- Connect a Slack Webhook to automatically receive notifications whenever a Flight is delayed
- Utilizes search paramters for sharable flight information. For instance, a flight information can be shared as a link by pasting the url `http://localhost:3000/?flight_number=EK57&flight_date=2025-01-4`.
- Utilizes local storage to prevent repetitive API calls.
- Utilizes cookies to save webhook URL in the browser.
- Mobile, Tablet, Desktop responsive UI.

### Limitations

- The free API calls are only limited to 100 calls.
- Information might slightly differ to other flight API providers.

### Setup and Installation

1. Clone the repository.
`https://github.com/mcmfire/flightly.git`
2. Open the repository in your IDE (e.g. Visual Studio Code) and open the terminal.
3. Install the packages using any package manager, for this example I use NPM.
`npm install`
4. Download the `.env.local` file attached in the email and paste it in the root directory of the project.
5. Run the app in development mode.
`npm run dev`
6. You can now access the app by typing the url in the browser.
`localhost:3000/`

### Usage
1. You can go to online sources of list of flights to locate a Flight Number and the Flight Scheduled Date. For instance, you can go to `https://www.airport-dubai.net/dxb-departures` and copy a Flight Number and paste it in the Flightly app. Then select the date, in this case, the date today.
2. Hit the search button and the Flight Information will show.
3. Optionally, you can find a Get Notifications button at the lower right of the screen where you can paste a Slack webhook to get notifications whenever a Flight is delayed.
4. To setup the Slack webhooks, you can follow the instructions here `https://api.slack.com/messaging/webhooks`.
5. Then search a delayed flight in Flightly and you will receive a Slack notification.
