CODE VEDIC IT SOLUTIONS - ONE PAGE WEBSITE
==============================================

FILES
-----
index.html
css/style.css
js/script.js
assets/

INSTALL
-------
1. Upload the contents of this folder to your hosting public_html (or website root).
2. Open index.html in your browser.
3. The website is fully static and needs no database.

CONTACT FORM / EMAIL
--------------------
The contact form is configured for Formspree.

Open index.html and find:
action="https://formspree.io/f/your-form-id"

Create a Formspree form and replace "your-form-id" with the ID supplied by Formspree.

Alternatively, replace the form action with your own server-side endpoint.

CUSTOMIZE
---------
- Company email: search for info@codevedic.com in index.html
- Phone: search for +91 99999 99999
- Social links: edit the # links near the footer
- Logo: replace the CV text mark with your own logo image if desired.
- Colors: edit CSS variables at the top of css/style.css.

The current design uses Google Fonts (Inter + Poppins). If your hosting blocks external fonts,
remove the Google Fonts line from index.html; the site will fall back to system fonts.


ASSET FOLDER STRUCTURE
----------------------
assets/
├── logo/       Put your company logo here
├── images/     Put website and portfolio images here
├── icons/      Favicon and website icons
└── fonts/      Optional self-hosted fonts

You can replace the generated favicon with your own favicon inside assets/icons/.
For the logo, the current header uses a text-based CV mark. A custom logo can be
added to assets/logo/ and the header HTML can then be switched to an image.


LOGO
----
Your supplied Code Vedic IT Solutions logo is already included:
assets/logo/code-vedic-logo.png

The header and footer are configured to use this logo automatically.
