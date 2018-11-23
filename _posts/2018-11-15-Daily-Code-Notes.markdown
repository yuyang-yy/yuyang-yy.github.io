---
layout: post
title: Daily Code Notes
author: yuyang
date: 2018-11-15
description:  To log down the unclear point of coding for every language used.
img: code.jpg
comments: true
tags: [Code, Daily Notes]
---

## Nov. 2018

#### Nov. 15
1. Insert picture to markdown.
~~~~
![name]({{base.siteurl}}/assets/img/file.jpg)
![name](/assets/img/file.jpg)
~~~~

2. Tasks in markdown.
```
- [ ] task to do
- [x] task done
```

3. Add two plots in one graph.
``` r
plot()
par(new = TRUE)
plot()
```

#### Nov. 16
1. Add MathJax in order to compile $\LaTeX$ in markdown. Add the following script to the _includes/head.html
```
 <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        inlineMath: [['$','$']]
      }
    });
  </script>
  <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script> 
```

2. Align two pictures in one row in markdown. Do remember to insert a blank line above and below the code.
```

![picture1](address) | ![picture2](address)

```

#### Nov. 17
1. Merge two data frames in R
``` r
merge(x, y, by = "ID", all.x = TRUE, all.y = TRUE)
```