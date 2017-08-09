# maxbox

A small vanilla JavaScript lightbox with easy per-image configuration.


## Setup

- In your HTML file's `<head>` tag, add `<link rel="stylesheet" type="text/css" href="maxbox/maxbox.min.css">`
- At the end of your HTML file's `<body>` tag, add `<script type="text/javascript" src="maxbox/maxbox.min.js"></script>`
- You can use any element to trigger maxbox - just add a `data-maxbox-src="path-to-img.png"` attribute

### Example

    <!DOCTYPE html>
    <html>
        <head>
            <title>Art Gallery</title>

            <!-- Your page's main CSS file(s) -->
            <link rel="stylesheet" type="text/css" href="style.css">
            <!-- maxbox CSS -->
            <link rel="stylesheet" type="text/css" href="maxbox/maxbox.css">
        </head>
        <body>
            <h1>Art Gallery</h1>
            <img src="gallery_thumb_1.png" data-maxbox-src="gallery_1.png">
            <img src="gallery_thumb_2.png" data-maxbox-src="gallery_2.png">
            <img src="gallery_thumb_3.png" data-maxbox-src="gallery_3.png">

            <!-- maxbox JS -->
            <script type="text/javascript" src="maxbox/maxbox.js">
        </body>
    </html>



## Customization

maxbox can be customized per-image using a set of data attributes (global config is currently unsupported but the hardcoded defaults are easy to change, if necessary for your project).


### Background

`data-maxbox-bg` (default: #333)

    <!-- background color -->
    <img src="thumbnail_1.png" data-maxbox-src="fullsize_1.png" data-maxbox-bg="#999999">

    <!-- rgba() and other color models are also supported -->
    <img src="thumbnail_2.png" data-maxbox-src="fullsize_2.png" data-maxbox-bg="rgba(255, 255, 255, 0.7)">

    <!-- background image -->
    <img src="thumbnail_3.png" data-maxbox-src="fullsize_3.png" data-maxbox-bg="url('path/to/background.png')">

    <!-- any valid "background" CSS declaration should work -->

### Close button

#### Button font

`data-maxbox-font` (default: Helvetica)

    <!-- Arial Black -->
    <img src="thumbnail_4.png" data-maxbox-src="fullsize_4.png" data-maxbox-font="font-family: 'Arial Black','Arial Bold',Gadget,sans-serif">

#### Button color

`data-maxbox-color` (default: #eee)

    <!-- black -->
    <img src="thumbnail_5.png" data-maxbox-src="fullsize_5.png" data-maxbox-color="#000000"

    <!-- rgba() and other color models are also supported -->
