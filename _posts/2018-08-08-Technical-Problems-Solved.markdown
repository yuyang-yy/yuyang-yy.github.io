---
layout: post
title: Technical Problems collection
author: yuyang
date: 2018-08-08
description:  To note down the technical problems I have been through.
img: terminal.jpg
comments: true
tags: [Technics, Terminal]
---

## Probelms about the environment variables.

1. I installed the new version of R and Rstudio on the mac, but every time I open the Rstudio, 
the following warning messages would appear:
```
1: Setting LC_CTYPE failed, using "C"
2: Setting LC_COLLATE failed, using "C"
3: Setting LC_TIME failed, using "C"
4: Setting LC_MESSAGES failed, using "C"
5: Setting LC_PAPER failed, using "C"
```
After reading the guidance on the [stackoverflow post](https://stackoverflow.com/questions/9689104/installing-r-on-mac-warning-messages-setting-lc-ctype-failed-using-c), I write the following code on the terminal and problem got solved.
```
defaults write org.R-project.R force.LANG en_US.UTF-8
```
