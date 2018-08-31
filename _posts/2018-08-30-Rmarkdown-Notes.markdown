---
layout: post
title: Rmarkdown Notes
author: yuyang
date: 2018-08-30
description:  This is an Rmarkdown notes.
img: rmarkdown.jpg
comments: true
tags: [Rmarkdown]
---

The following notes are referenced from the [R Documentation](https://rmarkdown.rstudio.com/lesson-1.html)

1. To run an rmarkdown file, you can either use 
```{r}
library(rmarkdown)
render("rmarkdown-notes.rmd")  # this should be path of the rmd file
```
Or, you can just use the **Knit** button on the bar of RStudio or use keyboard shortcut `⇧⌘K`.

2. How RMarkdown works. 

> rmd -> knitr -> md -> pandoc -> final format

3. 