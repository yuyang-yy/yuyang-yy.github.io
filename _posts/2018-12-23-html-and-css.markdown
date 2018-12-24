---
layout: post
title: html and css
author: yuyang
date: 2018-12-23
description:  Notes on html and css.
img: html_css.png
comments: true
tags: [html, css]
---

## HTML
``` html
<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
        <link href=" " type="text/css" rel="stylesheet">
    </head>
    <body>
        <h1>Head 1</h1>
        <h2>Head 2</h2>
        <p>This is a paragraph.<span>a part in the paragragh.</span></p>
        <a href="">a link</a>

        <!-- image -->
        <img src="" alt=""/>

        <!-- video -->
        <video src="" controls></video>

        <!-- tables -->
        <table>
            <thead>
                <th scope="col"></th>
            </thead>
            <tbody>
                <th>a</th>
                <td>1</td>
            </tbody>
            <tfoot>
                <th>total</th>
                <td>4</td>
            </tfoot>
        </table>
    </body>
</html>
```

## CSS
```css
h1 {
    font-size: 18px;
}

.class {
    background-color: azure;
}

#id {
    opacity: 0.5;
}

p.class {

}
.class li {
    
}
```