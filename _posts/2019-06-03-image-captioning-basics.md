---
layout: post
title: Image Captioning Basics
author: yuyang
date: 2019-06-03
description:  (optional)
img: image-caption.png
comments: true
categories: [Research]
tags: [Image Caption]
---


1. The problems of BLEU. [Reference: Evaluating Text Output in NLP: BLEU at your own risk](https://towardsdatascience.com/evaluating-text-output-in-nlp-bleu-at-your-own-risk-e8609665a213)
    - It doesn’t consider meaning.
    - It doesn’t directly consider sentence structure.
    - It doesn’t handle morphologically rich languages well.
    - It doesn’t map well to human judgements.

Alternatives: [NIST](http://www.mt-archive.info/HLT-2002-Doddington.pdf), [ROUGE](https://www.aclweb.org/anthology/N03-1020), [Perplexity](https://en.wikipedia.org/wiki/Perplexity), [WER](https://en.wikipedia.org/wiki/Perplexity), [F-score](https://en.wikipedia.org/wiki/F1_score). Specifically for sequence to sequence tasks: STM, METEOR, TER, TERp, hLEPOR, RIBES, [MEWR](https://pbs.twimg.com/media/DQJBTbxV4AApFJE.jpg:large).

