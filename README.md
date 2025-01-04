# Flightly

### Approach

I planned for what to complete for the given amount of time. Since I was only given 24 hours, I focused on the functionalities of the application and less focus on appearance but still made it presentable. I decided that the v1.0.0 version of the app will be a fully functioning app and the v2.0.0 version will have better UI if there will be more time. I researched about the information that users should see in a flight information. Then I look up for a public API and inspected its JSON response. Since the project requirements does not require setting up a database or saving information, I decided to create a serverless application using Next.js, TailwindCSS, TypeScript. I used Postman to test and experiment with the API response. I developed the application while reading the docs. I spent an all-nighter to give myself enough time to meet the deadline. I ask for ChatGPTs assistance to speed up my development process. I used the remaining time I have to test and polish the code. I also deployed it on Vercel so the application can be accessed without the need of setting it up locally.

### Features

- View flight information using a Flight Number and Flight Scheduled Date.
- Connect a Slack Webhook to automatically receive notifications whenever a Flight is delayed
- Utilizes search parameters for sharable flight information. For instance, a flight information can be shared as a link by pasting the url `[http://localhost:3000](https://flightly-iota.vercel.app)/?flight_number=EK57&flight_date=2025-01-4`.
- Utilizes local storage to prevent repetitive API calls.
- Utilizes cookies to save webhook URL in the browser.
- Mobile, Tablet, Desktop responsive UI.
- Converted PNG to WEBP to optimize images to improve performance.

### Limitations

- The free API calls are only limited to 100 calls.
- Information might slightly differ to other flight API providers.

### Online Deployment
You can access the app at `https://flightly-iota.vercel.app/`

### Local Setup and Installation

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

### Note
Please let me know if there are problems or concerns that arise. I am available to help. Thank you so much!
