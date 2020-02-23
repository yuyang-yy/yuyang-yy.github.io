---
layout: post
title: Coursera Deep Learning Notes
author: yuyang
date: 2019-03-19
description: This is the note for the coursera course, deep learning.
img: deep-learning.png
comments: true
categories: [Research]
tags: [Coursera, Deep Learning]
seo:
  date_modified: 2020-02-23 21:14:05 +0000
---

## Python Part
1. The input of math libarary should be real numbers, while numpy accepts vectors and matrices. So we prefer numpy.
2. Normalizing the data will improve the performance because gradient descent converges faster after normalization. Dividing each row of the matrix by its norm. Or, to make each row has unit norm.
3. axis = 0 means column, axis = 1 means rows.
4. np.random.randn(a, b), don't use parenthesis; np.zeros((a, b)), use parenthesis. np.random.randn() generates samples from normal distribution, while np.random.rand() generates samples from 0-1 uniform distribution.
