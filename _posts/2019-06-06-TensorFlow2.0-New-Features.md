---
layout: post
title: TensorFlow 2.0 New Features
author: yuyang
date: 2019-06-06
description: (optional)
img: tensorflow.png
comments: true
categories: [Research]
tags: [TensorFlow, 2.0]
seo:
  date_modified: 2020-02-23 21:14:05 +0000
---


TensorFlow has launched 2.0 version, and this has some differences with the previous version, which might cause error messages when you try to run the old code with TF 2.0. In this post, I logged down some of experience and notes. Hope this would useful to you. Check [TensorFlow 2.0.0-alpha0 releases](https://github.com/tensorflow/tensorflow/releases/tag/v2.0.0-alpha0) for more detail about TensorFlow 2.0.

When I tried to run [image-caption-with-attention tensorflow notebook](https://github.com/tensorflow/tensorflow/blob/r1.13/tensorflow/contrib/eager/python/examples/generative_examples/image_captioning_with_attention.ipynb) on Google Cloud, I met several errors. The reason is that this notebook is based on TensorFlow 1.12.0+, but my Google Cloud used TensorFlow 2.0 alpha. The version conflict led to these errors. Thus, I want to log down some of them to help others avoid spending too much time on it. I shall use v2.0 to denote Tensorflow 2.0.

1. `tf.enable_eager_execution()`: v2.0 automatically enable eager execution, so we don't need to run this code.
2. `tf.read_file()` ==> `tf.io.read_file()`.
3. `tf.image.resize_images()` ==> `tf.image.resize()`
4. `tf.py_func()` ==> `tf.py_function()`
5. `tf.keras.layers.CuDNNGRU()`: v2.0 no longer has CuDNNGRU() in the keras. We can directly use `tf.keras.layers.GRU()`. The new GRU() automatically checks using GPU or CPU. 
6. `tf.train.xxxOptimizer()` ==> `tf.keras.optimizers.xxx()`. Check [TF 2.0 Checkpoint breaking change for all optimizers](https://github.com/tensorflow/tensorflow/issues/26349) for detail.

When I tried to train the model, an error came regarding the `decode` attribute and I didn't solve it. If you have any solution, please email me. Thanks in advance.
