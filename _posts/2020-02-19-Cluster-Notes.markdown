---
layout: post
title: Cluster Notes
author: yuyang
date: 2019-06-10
description:  The notes about how to use MSI, CSElabs, and other high performance computing.
img: (name of the picture).jpg
comments: true
tags: [MSI, CSElabs, Computing]
---

# MSI
1. [Jupyter Notebook](https://www.msi.umn.edu/support/faq/how-do-i-get-started-jupyter-notebooks)
2. [FileZilla](https://www.msi.umn.edu/support/faq/how-do-i-use-filezilla-transfer-data) to transfer data files.
3. [Cuda](https://www.msi.umn.edu/sw/cuda) and [GPU number setting](https://github.com/allenai/allennlp/issues/1090)


## Question to ask MSI staff
1. How to configure the environment for Jupyter notebook? Can I start Jupyter notebook in one environment?

# CSE Labs

1. Set ssh to login without password. Run the following step by step exactly. Check the [reference](http://www.linuxproblem.org/art_9.html) for more detail.
    - Don't change `id_rsa` to other names. Don't enter passphrase. Just press Enter for three times. 
        ```
        ssh-keygen -t rsa
        ```
    - Even if there are .ssh in the cluster, run it.
        ```    
        ssh x500@csecluster mkdir -p .ssh
        ```
    - 
        ```
        cat .ssh/id_rsa.pub | ssh x500@csecluster 'cat >> .ssh/authorized_keys'
        ```
    - Now I can log in without a password.
        ```
        ssh x500@csecluster
        ```
2. Set ssh to switch among the clusters without a password. 
    - Login to one cluster first.
    - Run the following code inside the cluster.
        ```
        ssh-keygen -t rsa -P ""
        cat ~/.ssh/id_rsa.pub > ~/.ssh/authorized_keys
        ```
3. Set ssh aliases. Check the [reference](https://www.ostechnix.com/how-to-create-ssh-alias-in-linux/) for more detail.
    - Edit the `~/.ssh/config` file. Can also do for phixx and cudaxx account.
        ```
        # CSElabs Lind account
        Host cse-lind
            HostName CSEcluster
            User x500
            IdentityFile ~/.ssh/id_rsa
            UseKeychain yes
        ```
    - Then we can directly connect to the cluster using the following.
        ```
        ssh cse-lind
        ```

