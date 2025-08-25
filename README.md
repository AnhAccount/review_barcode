# Barcode Review & Win

A simple project that allows customers to leave a review and play a minigame to win a prize. This project is designed to be hosted for free on GitHub Pages.

## How it Works

1.  A customer scans a QR code, which directs them to a landing page.
2.  The landing page has a button to your Google Review page.
3.  After they've (supposedly) left a review, they can click another button to reveal a spinning wheel minigame.
4.  When this button is clicked, an email notification is sent to you using EmailJS.
5.  The customer spins the wheel and wins a prize.

## Setup

### 1. Project Files

-   `index.html`: The main landing page.
-   `style.css`: Styles for the landing page.
-   `script.js`: Logic for the spinning wheel and email notifications.
-   `barcode.py`: A Python script to generate the QR code for your landing page.
-   `pyproject.toml`: Python project configuration.

### 2. Google Review Link

Open `index.html` and replace `YOUR_GOOGLE_REVIEW_LINK_HERE` with the direct link to your Google Review page.

### 3. EmailJS Setup (for Email Notifications)

This project uses [EmailJS](https://www.emailjs.com) to send an email when a user clicks the "I've Already Reviewed" button, without needing a backend.

1.  **Create a free account** on [emailjs.com](https://www.emailjs.com).
2.  **Add a new email service**: In your EmailJS dashboard, go to "Email Services" and click "Add New Service". Choose "Gmail" (or your preferred provider) and follow the instructions. Note the **Service ID**.
3.  **Create an email template**: Go to "Email Templates" and click "Create New Template". You'll get a **Template ID** for this template.
4.  **Get your Public Key**: Your **Public Key** can be found in the "Account" section of your EmailJS dashboard.
5.  **Update `script.js`**: Open `script.js` and replace the placeholder values for `serviceID`, `templateID`, and `publicKey` with your credentials from EmailJS.

### 4. Generate the QR Code

1.  Install the necessary Python dependencies:
    ```bash
    pip install .
    ```
2.  Open `barcode.py` and change the `url` variable to your GitHub Pages URL (see deployment section below).
3.  Run the script to generate your QR code:
    ```bash
    python barcode.py
    ```
    This will create a `qrcode.png` file in your project directory.

## Deployment on GitHub Pages

1.  **Create a new repository** on GitHub.
2.  **Push your project files** to the new repository.
3.  In your repository's settings, go to the **Pages** section.
4.  Under "Build and deployment", select **Deploy from a branch** and choose the `main` (or `master`) branch.
5.  GitHub will provide you with a URL for your live page (e.g., `https://your-username.github.io/your-repo-name/`). Use this URL in `barcode.py` to generate the correct QR code.
