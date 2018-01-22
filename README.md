
Modern Site using BEM

## Features

* Revealing elements on scroll

* Icon sprite for faster page loads

* Lazy loading images for faster page loads

* Smooth scrolling to anchor links

* Responsive web design (RWD): mobile-first approach, responsive images

* Support for responsive images and svg icons in legacy browsers

### Custom Features

* Add scroll to top feature

## Getting Started

Follow the instructions below to set up the environment and run this project on your local machine

### Prerequisites

* Node.js

### Installing

1. Download ZIP or clone this repo
```
> git clone https://github.com/amadoucss/travelsite.git
```

2. Install dependencies via NPM
```
> npm install
```

3. Install gulp package globally to execute gulp command on your machine
```
> npm install gulp -g
```

4. Start the website
```
> gulp watch
```

5. See it up and running on http://localhost:3000

### Build

Run the following command (all files will be put inside the folder "docs")
```
> gulp build
```

## Built With

### Frontend

* babel
* jquery
* jquery-smooth-scroll
* waypoints
* lazysizes
* picturefill
* normalize.css
* postcss

### Utils

* webpack
* gulp

## Course Notes

### CSS Architecture

* This project follows [B.E.M rules](http://getbem.com/) to limit cascade and create single-responsibility blocks for making the relationship between HTML and CSS clear

  * B: Block - an independent, reusable part of the design
  ```css
  .large-hero {
   positiion: relative;
  }
  ```
  
  * E: Element (__) - belongs to a block and cannot be used outside of the block it belongs to
  ```css
  .large-hero__title {
   font-weight: 300;
   color: #2f5572;
   font-size: 4.8rem;
  }
  ```
  
  * M: Modifier (--) - can be used on a block or an element to indicate a change to the default state of an object
  ```html
  <a class="btn btn--orange btn--large" ... >
  ```
  
