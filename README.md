# Last Visited Products Notification Center

This project implements a notification center that displays the last three visited products in an e-commerce application. It provides a convenient way for users to quickly access recently viewed items.

## Description

The notification center is a JavaScript-based feature that retrieves and displays the last three products visited by users. It leverages localStorage to store and retrieve product data, making it accessible even after the user navigates away from the page.

### Technologies Used

- JavaScript
- HTML/CSS
- FontAwesome
- Responsive Design

## Features

- Notification Display: Shows the name, description, image, and link of the last three visited products.
- Responsive Design: Adjusts the layout and appearance based on the device's screen size for optimal viewing.
- Notification Toggle: Allows users to hide and show the notification center using the bell icon.
- Dynamic Content: Retrieves and displays recent product data from local storage, ensuring persistence across sessions.

## Installation

To run the project locally:

1. Clone the repository to your local machine using `git clone`.
2. Open the `index.html` file in a web browser to view the notification center.

## Usage

- The notification center automatically appears if the current page is not a product page and there are at least three products visited.
- Click the bell icon to toggle the visibility of the notification center. Clicking it again hides the last visited products section.

## Code Explanation

The JavaScript code uses localStorage to retrieve and display the last visited products. It checks if the current page is a product page using `isProductPage(url)`. The `showNotificationCenter()` function generates the notification center dynamically by creating DOM elements based on the retrieved data.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or feature requests, please feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
