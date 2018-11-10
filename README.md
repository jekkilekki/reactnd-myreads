# MyReads React App

[View online](https://jekkilekki.com/labs/myreads)

**MyReads** is a simple React App that queries a books database to retrieve and display books on various bookshelves. More details about the app's architecture can be found in the [Architecture](#architecture) section of this guide.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br>
It was built as part of Udacity's [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) program.

## Table of Contents

- [MyReads React App](#myreads-react-app)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Installation](#installation)
    - [Build](#build)
  - [Application Functionality](#application-functionality)
    - [Home Page](#home-page)
    - [Search Page](#search-page)
    - [Book Details](#book-details)
      - [Book Modal](#book-modal)
      - [Single Book Page](#single-book-page)
  - [Architecture](#architecture)
  - [Future Development](#future-development)
    - [Contributing](#contributing)
  - [License](#license)
  - [Changelog](#changelog)
    - [`1.0.1` - 2018.11.11](#101---20181111)
    - [`1.0.0` - 2018.09.07](#100---20180907)

## Overview

In a nutshell:

1. The App queries the Udacity database for initial data on the books and their shelves
2. It loads these on the Home page and filters the books into their appropriate shelves
3. Users may then:
  1. Preview the books in a Modal
  2. View book details on a Single Book page by clicking the book's cover
  3. Reshelve the books by clicking the red dropdown arrow 
  4. Search for new books on the Search page - where they can view book details or reshelve books in the same ways listed above

More details about the app's functionality can be found in the [Application Functionality](#application-functionality) section of this guide.

## Installation

To install this app, simply open a command line application and clone this repository.

```
git clone https://github.com/jekkilekki/reactnd-myreads
```

Navigate to the newly created directory and run the following commands to install dependencies and run the application.

```
npm install

npm start
```

The application should then automatically load in your browser at [http://localhost:3000](http://localhost:3000)

For a more complete explanation of each available `npm` script and what it does, see the Create React App's [README file](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts).

### Build

To build the application and serve it on the website, the following changes need to be made to serve the app from a subfolder.

#### `package.json`

Added the following line to run this app from a subfolder:

```
"homepage": "http://website.com/subfolder"
```

#### `app.js`

In `app.js`, modify the `<BrowserRouter>` component to take the subfolder as a `basename` prop:

```
<BrowserRouter basename='/subfolder'>
```

#### `npm run build`

This script is included with the default `react-scripts` when first running `create-react-app`. It minifies the CSS and JS and bundles all the files into a `/build` folder for easy upload. 

#### Upload to Dreamhost

For Dreamhost, just upload everything output from the `/build` folder and you're good to go. (Change the `favicon` too if you want.) Just remember to run this command __*every time*__ you want to update the app online.

## Application Functionality

The top navigation bar controls access to the Search page and the Home Page (by clicking on the "MyReads" logo, or the back arrow labeled "Bookshelf" from any page besides the Home Page. 

There are two types of Book Details "pages" to view:

1. The Book `Modal` is a "quick" pop-up preview of the book details available by clicking the teal "Preview" button below each book.
2. The Book `Single` pages are accessed by clicking a book's cover image on the bookshelf, or typing a book ID into the URL bar in this manner: `localhost:3000/book/:id`.

### Home Page

The Home Page is the Bookshelves Page. It retrieves the initial book data from the Udacity database and filters books into their appropriate shelves. There are three bookshelves:

1. Reading (`currentlyReading`)
2. To Read (`wantToRead`)
3. Read (`read`)

On the Home Page, users may interact with each book in the following manner:

1. Click the cover to view book details on its own Page
2. Click the "Preview" button to view book details in a Modal popup
3. Click the red dropdown arrow to reshelve the books

Functionality that has not yet been implemented is "Favoriting." The star in the upper right-hand corner of each book is intended to allow for this, but the functionality has not yet been implemented.

### Search Page

The Search Page may be accessed and utilized in one of two ways:

1. Click the Search icon (magnifying glass) in the top navigation bar and type your search query into the input field
2. Type your search query directly into the URL field in the following manner: `localhost:3000/search/:query`
  - (Note that this will redirect to the main Search Page at `localhost:3000/search` but it will query the database and display the results of your query as well)

The input field on the Search Page includes an Autocomplete list of available search terms that filter as a user types. The search terms have been parsed from a Markdown file using [Papa Parse](https://www.papaparse.com/).

### Book Details

Book details can be viewed in THREE ways:

1. On the Home (Bookshelf) Page and the Search Page, the cover image, title, author(s), and publication year are all visible
2. Click the book's cover image to view its details on its own Page
3. Click the "Preview" button to view its details in a pop-up Modal

Each book's details contain various information and there are numerous "checks and balances" through the code to display the maximum amount of book information as possible. Specifically, there are checks for:

1. Missing book cover images
2. Missing publication dates
3. A "Mature" rating
4. Single or multiple authors
5. Single or multiple categories
6. Whether or not there is a subtitle
7. Whether or not there is a rating
8. Whether or not there is a publisher
9. Whether or not there is an ISBN or other idenifying number

#### Book Modal

The Book Modal is accessible by pressing the teal "Preview" button underneath each book. It gives a "quick" preview popup of the book's details.

#### Single Book Page

The Single Book Page is accessible in one of two ways:

1. Clicking the book's cover image on the Bookshelf or Search page
2. Typing the book's ID into the URL address bar in the following manner: `localhost:3000/book/:id`

## Architecture

**MyReads** is a simple React App that queries a books database to retrieve and display books on various bookshelves. It relies on built in React methods like `componentDidMount` and React Router's `withRouter` to provide its functionality.

The app is styled with `react-materialize` and [MaterializeCSS](https://materializecss.com/). CSS Transitions are (or will be) handled by `react-transition-group`. And the Loading animation is taken from Tobias Ahlin's [SpinKit](http://tobiasahlin.com/spinkit/).

## Future Development

The following list are things I'm contemplating for future development:

- Simplifying the code base and reusing as many Components as possible (specifically combining `BookModal.js` and `BookSingle.js` as they display nearly the same information).
- Improving the CSS Animations when reshelving books:
  - When a book leaves a shelf, it should shrink and disappear (zoom out)
  - When a book enters a shelf, it should grow and appear (zoom in)
- Improving Search functionality after a search query is entered into the URL and a subsequent search is attempted (a React Router refresh perhaps?)
- Consider displaying the Bookshelves on the Home Page in a Carousel or Tabbed Menu, rather than one after the other on the page
- Adding functionality for "Favoriting" a book (the star in the upper right-hand corner)

### Contributing

The best way to Contribute to this app is to open an [Issue](https://github.com/jekkilekki/reactnd-myreads/issues) on GitHub.<br>I likely will not spend much time looking at Pull Requests.

## License

The **MyReads** app is licensed under the [MIT open source license](https://opensource.org/licenses/MIT) and built with React and uses the following third-party resources and `node` modules:

- [React](https://reactjs.org/)
- [React Router](https://www.npmjs.com/package/react-router)
- [Papa Parse](https://www.papaparse.com/)
- [SpinKit](http://tobiasahlin.com/spinkit/)
- [MaterializeCSS](https://materializecss.com/)
- [React Materialize](https://www.npmjs.com/package/react-materialize)
- [React Transition Group](https://www.npmjs.com/package/react-transition-group)
- Google Fonts
  - [Material Icons](https://materializecss.com/icons.html) (as part of MaterializeCSS)

## Changelog

### `1.0.1` - 2018.11.11
 - Fix `Book.js` to use BrowserRouter's `Link` component instead of HTML anchors
 - Build for deployment (see [`build` branch](https://github.com/jekkilekki/reactnd-myreads/tree/build))

### `1.0.0` - 2018.09.07 
 - Initial release
