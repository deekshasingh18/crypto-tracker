
__Crypto Tracker__

This is a Crypto Tracker app built with React, Redux, and Vite. The app allows users to track real-time cryptocurrency prices, market cap, volume, percentage changes, and more.		
<br> </br>

📦 __Setup Instructions__

Follow these steps to get the project running on your local machine:


__Prerequisites__

Node.js (v14 or higher)


npm (comes with Node.js) or yarn <br> </br>



__Clone the repository__

cd crypto-tracker <br> </br>



__Install dependencies__

npm install <br> </br>



__Run the project__

To start the development server and view the app:
npm run dev


<br> </br>


🛠 __Tech Stack
Frontend:__

__React:__ JavaScript library for building user interfaces.

__Redux:__ A predictable state container for JavaScript apps, used for managing application state globally.

__Vite:__ A fast, next-generation build tool for React applications, providing fast hot module replacement (HMR) during development.

__Axios:__ A promise-based HTTP client for making requests to external APIs (used for fetching crypto data).
<br> </br>

__Styling:__

__Custom CSS:__ Basic styling for the application.

__React Icons:__ Used for adding icons like chevrons and others for UI components.
<b> </br>

__Application Flow__
App.jsx is the root of the app and renders the main CryptoTable and Dropdown components.

Redux manages the state of the cryptocurrencies data. It contains:

__Actions__: Used for dispatching data requests and handling responses (e.g., fetching the latest prices).

__Reducers:__ Handle the updates to the state based on actions.

__CryptoTable.jsx__ handles the rendering of the table with cryptocurrency data, applying sorting based on the selected option (e.g., Price: Low → High).



