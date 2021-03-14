### Requirements

Create a React component called HighScoreApp that consists of:

- [x] A button, which adjusts the users score by a number between -100 and 100 when clicked
- [x] A display of the current scoreAn input field, labeled 'Name', where the user can type their name
- [x] A submit button that will make a POST request (to dummy endpoint) to save their score, name, and number of times they clicked
- [x] the user can only click a maximum of 10 times before submitting their score
- [x] once they submit their score, the click counter gets reset to 0

Additional requirements:

- [x] Style the page
- [x] Add messaging to let the user know how many clicks they have left, and if they have reached the maximum number of 10 clicks
- [x] Add a dummied data fetch, assuming that the API service will send you the proper data as an array of objects. The results will NOT be sorted.
- [x] Display a leaderboard table of the top 10 total points scores, showing:: name, score, number of clicks, average points per click
- [x] Create a real-time update of the table, so that if the person playing achieves a score that puts them in the leaderboard, show their position in the table (they still need to click Send it! button to save their score), and adjust other positions accordingly (knocking the lowest score out of the display)
- [x] Write a couple tests
- [x] Pay special attention to user-friendliness by providing error feedback and making it easy to use the app
  - added error buondary for no name input when user clicks Play or Submit
- [x] Make the app responsive then user can use different devices.

### What's used?

Create React App, Miragejs for mocking apis calls, MaterialUI for css

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
