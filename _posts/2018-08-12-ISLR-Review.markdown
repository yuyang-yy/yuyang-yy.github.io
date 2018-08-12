---
layout: post
title: ISLR Review
author: yuyang
date: 2018-08-12
description:  To note down the review points of ISLR.
img: ISLR.jpg
comments: true
tags: [ISLR, review]
---

## Chapter 2

## Chapter 3

## Chapter 4

## Chapter 5

## Chapter 6

### 6.0 Introduction

1. Why would we use alternative fitting procedures instead of least squares?
    - _Prediction Accuracy_:
        + n >> _p_: low bias
        + _n_ not much larger than _p_: easily overfitting, high variance
        + _n_ smaller thatn _p_: least squares not feasible
        + alternative procedures could decrease variance with negligible increase in bias
    - _Model Interpretability_:
        + unnecessary variables lead to higher model complexity
        + feature selection could remove these variables_Subset Selection_

2. The difference between _Subset Selection_, _Shrinkage_, and _Dimension Reduction_?
    - _Subset Selection_: fit a model involving a subset of _p_ predictors; computationally inefficient
    - _Shrinkage_: fit a model involving all _p_ predictors; computationally speaking, almost the same as least squares
    - _Dimension Reduction_: fit a model involving _M_ projections of _p_ predictors

3. Is _Subset Selection_ equavalent to _feature selection_? Then what about _lasso_? 
    - No. _Subset Selection_ could do feature selection, _lasso_ could also do feature selection. But _Dimension Reduction_ is not a feature selection method.

### 6.1 Subset Selection

1. The pros and cons of _Best Subset Selection_, _Forward Stepwise Selection_, and _Backward Stepwise Selection_?
    - _Computationally_: _Best Subset Selection_ is more time-consuming.
    - _Backward Stepwise Selection_ is not feasible when n << p.

2. What is _Forward Stagewise Selection_'s essence? Is it similar to _Partial Least Squares_?

3. Two ways to estimate test error.
    - Adjust training error to account for the bias due to overfitting.(why not the variance due to overfitting)
    - Validation set approach and cross-validation approach.

4. The comparisons and ituitions of the four criteria.
    - BIC places heavier penalty on model complexity than C_p.
    - RSS could be replaced with _deviance_ for general cases.
    - RSS/(n-d-1) intuitively controls the involvement of unnecessary variables. Once all necessary variables have been included, adding extra features would increase the denominator while little decrese in the nominator.

5. Comparison between the two testing error estimation?
    - Validation and cross-validation make no assumption of the model, more general.

6. The point behind _one-standard-error rule_?
    - Parsimony

### 6.2 Shrinkage Methods

1. The idea of shrinkage?
    - shrink the coefficients to zero, and thus reduce the variance 

2. Standardization?
    - standardize before ridge regression(certainly, PCR as well)
    - PLS
    - lasso needs standardization too?

3. Ridge regression's pros?
    - _bias-variance-tradeoff_
    - works best when least squares estimates have high variance
    - for least squares, n > p: low bias, high variance; n < p: no unique solution. While ridge regression works in both situations.

4. Comparison between ridge regression and lasso?
    - none of the coefficients of ridge regression is exactly zero, which might lead to interpretability problem, while lasso would shrink some coefficients to exact zero and do feature selection.
    - Graphical intution of these two methods.
    ![contour: Ridge vs. Lasso]({{site.baseurl}}/assets/img/ridge_lasso_contour.jpg)
    - lasso performas better when the true model only depends on a small amount of predictors.
    - ridge regression shrinks all coefficients by the same proportion while lasso shrinks most of the coefficients by similar proportion and sufficiently small coefficients directly to zero. Recall the illustrating graph.
    ![coef: Ridge vs. Lasso]({{site.baseurl}}/assets/img/ridge_lasso_coef.jpg)
    - Bayesian interpretation: 
        + ridge regression <-> Gaussian prior, thus shrinked coefficients vary around zero
        + lasso <-> Laplace prior, thus shrinked some coefficients to exact zero
    ![Bayesian: Ridge vs. Lasso]({{site.baseurl}}/assets/img/ridge_lasso_bayes.jpg)

### 6.3 Dimension Reduction Methods

1. The idea of _Dimesion Reduction_?
    - constrain through the form of the coefficients

2. The idea of PCA?
    - first principle component shows the largest variability of predictors.
    - it summarizes the predictors.

3. The assumption of PCR?
    - assume that the directions which the predictors shows the most variation are the directions assocaited with the response.

4. PCR and ridge regression?
    - They are closely related. When the true model relies on a small set of the original features, PCR and ridge regression may not perform well.
    - ridge regression, continuous version of PCR. small lambda <-> large M

5. The idea of PLS?
    - **why call partial least squares? what's the connection with least squares?**
    - cons of PCR: The directions that best explain the predictors doesn't guarantee to best explain the response. So, PLS intends to use the response Y's information, a supervised version of PCR. 
    - **the interpretation of the new feature selection procedure, from the aspect of information?**

6. Does PLS negelct the information which reflects the most variation of predictors?
    - We can consider these two dimension reduction methods identifying new features from different aspect of viewing the problem. PCR identifies new features reflecting the most variation while PLS identifies new features that relates both X and Y most.

### 6.4 Considerations in High Dimensions

1. The problems of high dimensions
    - Regardless of whether or not there truly is relationship between response and predictors, in high dimensional case, least squares will yield the coefficients that make a perfect fitting, namely RSS=0, and thus overfitting.
    - Including additional variables leads to a vast increase in the variance of coefficient estimates.
    - Those four criteria to select models don't work here.
    - Multicollinearity is extreme. Thus we cannot identify which feature is truly predictive of the response. There are many different models reaching the same prediction.

2. What is the _curse of dimensionality_?
    - Adding signal features that are associated with the response will improve the fitted model while adding noise features that are not associated with the response will deteriorate the model, leading to high variance of the coefficient estimates.

3. Several points to notice in high dimension
    - Traditional measures of fitness could not be used to demonstrate the performance of high dimensional models. Use independent test set or cross-validation instead.
    - When we have got a model, we need to know that it is only one of the many possible models for prediction, and it requires further validation.(corresponding to the 4th problem of high dimensions.)

## Chapter 7

## Chapter 8

## Chapter 9

## Chapter 10
