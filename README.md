# Auction It

This project is an auction website built using Vite and interacts with the Noroff API. The project uses Vite as a bundler, and Tailwind with PostCSS as the CSS framework. Users can add items to be auctioned and bid on other users' items.

## Prerequisites

- Node.js
- NPM

## Getting Started

  Install the dependencies and start the application:
    ```
    npm install
    npm run dev
    ```
  This starts the application in development mode and should be running at [http://localhost:3000](http://localhost:3000).
    
 ## NPM Scripts
 
- `npm run dev`: Starts the application in development mode.
- `npm run build`: Builds the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Lint code with ESLint.
- `npm run lint-fix`: Fixes issues found by ESLint in the codebase.

## Features

- **User Registration**: Users with a stud.noroff.no email can register.
- **Login/Logout**: Registered users can log in and out.
- **User Avatar**: Registered users can update their avatar.
- **Credits**: Registered users can view their total credit.
- **Listing Creation**: Registered users can create a Listing with a title, deadline date, media gallery and description.
- **Bidding**: Registered users can add a Bid to another user’s Listing and view Bids made on a Listing.
- **Search**: Unregistered users may search through Listings.
