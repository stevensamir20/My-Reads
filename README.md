# My Reads Project

A project that acts as a book library. It enables the user to find new books through an API, add them to his own library, and move books between different shelves.

## Getting Started

- Install all project dependencies with `npm install`
- Start the development server with `npm start`

## File Structure

```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── pages
    │   ├── Home.jsx # Home page that shows all user's books in their respective shelves.
    │   └── Search.jsx # Search page that contains all search logic, and allows user to add newbooks.
    │   └── BookDetails.jsx # Page that shows all details about the selected book.
    │   └── NotFound.jsx # Page that appears when the user enters a wrong url related to the page.
    ├── components
    │   ├── Bookshelf.jsx # Bookshelf component that contains each shelf that lists the books that have shelf value = shelf.
    │   └── Book.jsx # Book Component which is used in other components.
    ├── App.css # Styles for the app.
    ├── App.js # Root.
    ├── BooksAPI.js # A JavaScript API calls provided by Udacity.
    ├── icons # Icons for the app proivded by Udacity.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # DOM rendering.
```
