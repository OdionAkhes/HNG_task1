# HNG Internship Task 1: Frontend Page Creation

## Overview

This project is part of the HNG Internship tasks. It's a simple webpage that showcases specific personal and real-time data attributes.

## Live Site

You can view the live site [here](https://hng-task1-flame.vercel.app/).

## Features

- Display Slack Name prominently.
- Showcase Slack profile picture.
- Indicate the current day of the week.
- Display the current UTC time in milliseconds and update it every second.
- Mention the track (e.g., Frontend).
- Provide a clickable link to the GitHub repository where the source code for this task resides.

## Technologies Used

- HTML
- CSS
- JavaScript

## JavaScript Solution

In the `index.js` file, the following approach was used:

1. Upon window load, the current day of the week is retrieved using JavaScript's `Date` object and displayed on the webpage.
2. A separate function (`updateUTCTime`) is defined to fetch the current UTC time in milliseconds using `Date.now()` and update the relevant HTML element.
3. The `updateUTCTime` function is called upon window load and set to repeat every second using `setInterval`, ensuring the time displayed on the webpage updates in real-time.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/OdionAkhes/HNG_task1.git
