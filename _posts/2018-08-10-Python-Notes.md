---
layout: post
title: Python Notes
author: yuyang
date: 2018-08-10
description: This blog keep notes about python programming and configuration.
img: python.jpg
comments: true
categories: [Programming]
tags: [Python, programming]
seo:
  date_modified: 2020-02-23 21:14:05 +0000
---

## Configuration
1. Use pip3 to install packages for python3.7 while use pip for python3.6.
2. Install a certain package to the designated postion:
```
pip install -t /Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/site-packages (package name)
```
3. See the path concerning one certain version of python:
```{python}
import sys
print(sys.path)
```
4. Get the list of modules in one version of python:
```{python}
help(modules)
```

## Programming Errors
1. 
```{python}
arrayOfLines = fr.readlines(fr)
```
2. 
```{python}
mat = empty(3, 2)
```
3. When showing syntaxError, check the parenthesis.


## Python Notes
1. `reload` is no longer used in python3, to do this, we need to import *importlib* first.
```{python}
import importlib
importlib.reload(module)
```
2. `os.path.dirname(__file__)` works in .py file but not in ipython or Jupyter notebook. In Jupyter notebook, directly use the relative path.
