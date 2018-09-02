---
layout: post
title: Configure My Mac
author: yuyang
date: 2018-08-10
description:  This blog keep records of my configuration on the mac.
img: mac.jpg
comments: true
tags: [Mac, Configure]
---
## Softwares installed

- _**Daily Tools**_
    + Be Focused
    + Wunderlist
    + CheatSheet (show shortcuts)
    + Dr. Unarchiver
    + Clocker (show worldwide time)
    + Spectacle (split screen)
    + Grammarly (check grammar)
    + EuDic
    + Typist

- _**Developing Tools**_
    + Pycharm
    + CLion
    + Anaconda
    + Visual Studio Code
    + Octave (do scentific computation, just like Matlab)
    + R
    + RStudio
    + Python 3.7 (have modified its alias in the **.bash_profile** to be **python3**)
    



## Configurations modified

- Modify the alias of python3.7
```
alias python3="/Library/Frameworks/Python.framework/Versions/3.7/bin/python3.7"
``` 

- Set multiple accounts in Git, by using ssh to connect. Refer details in [Git Notes](https://yuyang-yy.github.io/Git-Notes/).

- Open the firewall of Mac in order to allow **box** to work. (On the **Security & Privacy** part in **System Preferences**)

- Change the port of the *jekyll* blog to 5000, since the previous port 4000 conflicts with *Nomachine* and *box*.