---
layout: post
title: Dags Server
author: yuyang
date: 2020-05-20
categories: [Server, Linux]
tags: [Dags]
seo:
  date_modified: 2020-05-20 17:14:05 +0000
---
## Load modules
In order to use Jupyter notebook and python3.7, I need to load module `python/conda/3.7` first.

To automatically load specific software module or modules every time you log into the server, edit your `.bashrc` file:

> # automatically load conda module
>
> module load python/conda/3.7


## Install packages
Keep a habit of using virtual environments, especially in a remote server where I am not the root. One biggest different between local machines and remote machines is that you won't have the permission to install packages as you want, and you are only allowed to install packages on your local directory. If you want to install a python package for general purposes, use `pip install --user packagename`. But usually, we work on projects and should set different environments for different projects, so creating a conda virtual environment and install packages inside would be a better idea.

> module load python/conda/3.7
>
> conda create -n envname python=3.7
>
> conda activate envname
>
> conda install packages
>
> conda deactivate

Note: in order to use `conda activate`, we need to run `conda init bash` to initialize conda commands.

Now you can install packages you would like to use, without worring about not having root permissions.

To see the information of the environments, run:

> conda info --envs


## Jupyter notebook

References:
- [Running a Jupyter notebook from a remote server](https://ljvmiranda921.github.io/notebook/2018/01/31/running-a-jupyter-notebook/)
- [How do I remove an SSH forwarded port](https://superuser.com/questions/87014/how-do-i-remove-an-ssh-forwarded-port)

If you have created a conda virtual environment as before and have activated it, then jupyter notebook is defaultly installed. There are several steps.

1. In the remote host, run:

> jupyter notebook --no-browser --port=8889

2. In the local computer, run:

> ssh -N -f -L localhost:8888:localhost:8889 x500@dags

Note: I have configured dags in my ssh configuration, so I just use the shortcut of the host name.

3. Open local browser and type:

> localhost:8888

### Use functions to simplify
Use functions or aliases to make the above steps easier. The reference used functions and for simplicity, I aliases.

1. In the remote host, add the function below to `.bashrc`.

```
function jpt(){
	jupyter notebook --no-browser --port=$1
}
```

2. In the local host, add the function below to `.zshrc`. (I am using zsh in my local computer.)

```
function jptt(){
	ssh -N -f -L localhost:"$2":localhost:"$1" x500@dags
}
```
Note: for zsh, do remember to add single quote or double quote.

3. Then every time you want to run jupyter notebook, just do:

remotely, 

> jpt 8889

locally, 

> jptt 8889 8888

Open browser and type `localhost:8888`. Done!

### Use aliases to simply
For simplicity, I set the default remote port to be 8889, and the default local port to be 8888. Feel free to change it.

1. Edit `.bash_aliases` in the remote server.

> alias jpdags="jupyter notebook --no-browser --port=8889"

2. Edit `.zshrc` in the local machine.

> # establish ssh tunnel and open the browser
>
> alias jpdags="ssh -N -f -L localhost:8880:localhost:8889 x500@dags; open 'http://localhost:8880/tree?'"
>
> # kill related ssh processes
>
> alias kjpdags="ps aux | grep '8889.*dags'"

Now, the browser window will automatically open.

Note: remember to add single quote around the url link and the regular expression in grep.

3. Close jupyter in the remote server using 'Ctrl + c'.

4. Kill relevant ssh processes by running `kjpdags` and `kill <PID>` with PID shown in the grep results.


## Remote Development using VS Code

References
- [Remote Development using SSH](https://code.visualstudio.com/docs/remote/ssh)

Install the Remote Development extension pack in VS Code, and this would enable us to use VS Code to edit remote files.

- Open VS Code, press `F1` to open the command plate, select **Remote-SSH: Connect to Host...**, and choose the remote server. I have set ssh configurations, so I can directly see the available remote servers. Done!
- VS Code would remember your action, so next time you open VS Code, you can directly check recent activities to quickly connect ssh.