---
layout: post
title: Linux Notes
author: yuyang
date: 2018-08-29
description: This is a note on Linux.
img: linux.jpg
comments: true
categories: [System]
tags: [Linux, Notes]
seo:
  date_modified: 2020-02-23 21:14:05 +0000
---

1. Common command

    - `top`: shows the resources being used
    - `du -s -h`: shows the storage of the directory
    - `cat /var/log/dmesg | wc -l`: shows the number of lines of a file, a similar example is `w | wc -l`
    - call a variable: use a $
    - export PATH="~/bin:$PATH": search the personal path first, and then the system path.

2. chmod
    - For private files or directory, use `chmod 700 file` to ensure no one else would be able to see.

