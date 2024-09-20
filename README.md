# Basic Online Video Player - Capstone Project

This project is an Basic online video player that utilizes YouTube's API to fetch and display videos dynamically. It features a modern user interface with animations, providing users with a smooth and interactive video browsing experience.

## Features

- **YouTube API Integration**: Search and watch YouTube videos directly through the player.
- **Responsive Design**: The player is fully responsive and works well across devices.
- **Customizable Animations**: Includes fall leaves and snowflake animations, with a transparent, glassy theme.
- **Voice Search**: Integrated voice search for easy video lookup.
- **Styled Hover Effects**: Interactive hover effects for an enhanced user experience.
- **Comments Section**: Users can view comments on videos (if applicable).

## Technologies Used

- **HTML/CSS**: For structuring and styling the web pages.
- **JavaScript**: For API calls, interactivity, and dynamic rendering.
- **YouTube Data API**: To fetch video content from YouTube.
- **CSS Animations**: For the visual effects such as falling leaves, snowflakes, and hover effects.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Saikrishna1504/Basic_Online_Video_Player.git
   ```
2. Navigate to the project directory
3. Open index.html in your preferred browser to run the application locally.

## API Setup

1. Visit the [Google Developer Console](https://console.cloud.google.com/apis/dashboard).
2. Create a new project and enable the YouTube Data API v3.
3. Generate an API key and replace the placeholder in the JavaScript file with your key:
  ```bash
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
## How to Use

1. Enter a search term in the search bar and press "Enter" or click the search button.
2. The player will display videos based on the search results.
3. Use the voice search feature by clicking on the microphone icon.

## Contributing
Feel free to contribute to this project by opening a pull request or submitting issues for any bugs or improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
