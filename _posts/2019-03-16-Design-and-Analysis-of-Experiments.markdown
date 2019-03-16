---
layout: post
title: Design and Analysis of Experiments
author: yuyang
date: 2019-03-16
description:  Notes of STAT 8052
img: experiment-design.png
comments: true
tags: [tag1, tag2]
---
This is my notes of the course STAT 8052 and of the book: *A first Course in Design and Analysis of Experiments*.

## Course Notes


## Book Notes

### Chapter 12
1. How to tell random or fixed?
    Do the experiment again, will the levels of the treatment change or not?
2. How to tell nested or crossed?
    Consider A and B. If the 1st level of A in B1 has nothing to do with the 1st level of A in B2, then nested. If A contains all levels of B and B contains all levels of A, then A and B are crossed. So if C is nested in B and that C & D are crossed, then B & D are also crossed. 
3. Note that (R) and (WD)are not added in the 4th layer, but in the 5th layer. I think the reason is that when we add (RW) and (RD), we will also get (RWD). If we do that in the 4th layer, then the product and the seperate elements will be in the same layer. Notice: the numbers of RWD should be reversed. Similar case also happens in Problem 12.3 in the book.
    ![](/assets/img/hasse2.png)
4. ![Denominators](/assets/img/denominator-steps.png)
5. ![MSE](/assets/img/mse-steps.png)
6. ![hasse](/assets/img/hasse-steps.png)

#### 12.6 Hasse Diagrams and Expected Mean Squares

![Figure 12.2](/assets/img/hasse1.png)

The approximate test for term A is: $\frac{A + ABC + ABD + ACD}{AB + AC + AD + ABCD}$.
