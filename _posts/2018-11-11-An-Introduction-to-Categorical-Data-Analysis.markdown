---
layout: post
title: An Introduction to Categorical Data Analysis
author: yuyang
date: 2018-11-11
description:  Notes of the book written by Alan Agresti.
img: Agresti.jpg
comments: true
tags: [Categorical, Data Analysis]
---

## Chapter 2: Contingency Tables

### 2.1

- Three probabilities: Joint, Marginal and Conditional.
- Sensitivity and Specificity
- *Statistically independence*: if the population conditional distributions of Y are identical at each level of X.

### 2.2

- Difference of proportions
- Relative Risk: Using the difference of proportions alone to compare two groups can be misleading when the proportions are both close to zero.

### 2.3

- Properties of Odds Ratio:
    1. Can take any nonnegative value.
    2. Reverse the order of column(row), the odds ratio will be the inverse of the original one.
    3. Reverse the column and row, the odds ratio remains the same. Thus, we don't need to specify the response variable in order to estimate odds ratio. In contrast, relative risk requires this.

- When the proportion is close to zero, we could use odds ratio to estimate relative risk.

- In *case-control study*, the marginal distribution of the response is fixed and thus we cannot odds ratio in the response way. However, odds ratio remains the same when we reverse the response and the explanatory. So, we could still estimate the odds ratio using the other way around and thus be able to estimate the relative risk.

- Observational studies: *case-control, cohort, and cross-sectional studies*, more practical. Experimental studies: *clinical trials*, more balanced groups due to the randomization, but less practical.


### 2.7

- Conditional tables control the third variable, while the marginal table ignores the third variable.
- Simpon paradox.