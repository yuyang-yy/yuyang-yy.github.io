---
layout: post
title: Reinstall My macOS
author: yuyang
date: 2018-07-05
description:  This blog contains not only how I reinstall my MacOS, but also what I have done to configure my computer.
img: macos.jpg
comments: true
tags: [tag1, tag2]
---
(The content of the blog.)

Several things I will do in my blog:
* Try to illustrate what I have learnt to examine whether I truly understand it or not.
* Log down my puzzles and how I solve it.
* Record some interesting and happy moments in my daily life.

I have decided to learn photography from now on. Maybe I would pause playing softball for some period and photography would be my future hobby. I found it very interesting through several hours' learning. Hope all goes well!
![Picture example]({{site.baseurl}}/assets/img/bulb.jpg)


Next time, before updating macOS, I need to backup all important files and bookmarks and mac configurations.

Tasks I have already done:
1. Upgrade my iCloud storage to 50GB. This experience reminds me of the great importance of backing up.
2. Softwares I installed: Wunderlist, Be Focused, Anaconda, Google Chrome, BaiduWangpan, Pycharm, Clion, VSCode, Cheatsheet, Shadowsocks, TexStudio, Texpad, Thunder, MacTex.(Installing only the latex platform is not enough, MacTex should be downloaded as well. MacTex is one of the most popular latex distribution on macOS. Before I reinstall the computer, I used TexShop. One more thing, it seems that TexShop is one component of MacTex.) Unlike the previous macOS version, Pages, Numbers, and Keynote are not installed on this version, so I installed them. 
3. Install homebrew using the code as follows:
> /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
While installing homebrew, it shows error message: *Failed during: git fetch origin master:refs/remotes/origin/master --tags --force*. After searching Google, I found one [stackoverflow post](https://stackoverflow.com/questions/39836190/homebrew-install-failed-during-git-fetch-origin-masterrefs-remotes-origin-mas). According to its guidance, I run following code:
> git config --global user.email yuyang_96@hotmail.com
> git config --global user.name "yuyang"
Then, homebrew is installed successfully.
4. Install Microsoft Office:
First download the ISO file in the Baiduwangpan, then run the pkg installer file. After installing, just as before, Outlook cannot be used and an error message shows about version being too early. I googled this problem and found [Microsoft Support for macOS High Sierra](https://support.office.com/en-us/article/Microsoft-Office-support-for-macOS-10-13-High-Sierra-80bbd3cc-2412-4593-988a-1c5607b26b28). According to the guidance, I downloaded the latest [Office 2016 for Mac Suite Installer](https://go.microsoft.com/fwlink/?linkid=525133). Maybe next time, I don't need to download file in Baiduwangpan, but just the file in the link above.
<<<<<<< HEAD
5. When I configured jekyll to set up my blog according to the guidance on [Kresnik's Blog](http://kresnik.wang/works/tech/2015/06/07/在github-pages网站下用jekyll制作博客教程.html), after implementing 
> gem install jekyll
 I ran 
> jekyll -v
Error messages showed up. *Could not find gem 'jekyll-sitemap' in any of the gem sources listed in your Gemfile. (Bundler::GemNotFound)*. After googling it, I find one [jekyll Github issue](https://github.com/jekyll/jekyll/issues/4972) illusrating this problem.
'''
I ran the following code:
gem install jekyll-sitemap
gem install pygments.rb
gem install jekyll-paginate
gem install jemoji
gem install bundler
bundle install
'''
When I open Gemfile, jekyll-sitemap, jekyll-paginate, jemoji are in the file. According to the output of bundle install, I add 
>source 'https://rubygems.org' 
Then, jekyll performs normally. The key to solve the problem, I suppose, is to install all the file in the Gemfile first.
6. I configured terminal based on the guidance on [Udacity's course on Git](https://classroom.udacity.com/courses/ud775/lessons/2980038599/concepts/33331589510923), using *git-completion.bash* and *git-promp.sh*.
7. Jupyter notebook:
Since jupyter notebook has already been installed on Anaconda, I only need to input the following code on terminal to start jupyter notebook.
> /anaconda3/bin/jupyter-notebook

I need add it to the $PATH later.

8. Set autostarting softwares:
System Preferences -> Users & Groups -> unlock to make changes -> add *ShadowsocksX-NG-R8* and *Be Focused*.

9. Disable Guest User login:
System Prefereneces -> Users & Groups -> unlock to make changes -> turn off guest user option

10. Configure terminal:
Terminal Preferences -> Profiles -> Text and Window option

11. Check java and jdk:
This mac doesn't have java, so I downloaded and installed them. I used 8u171 version.

12. Enable starting VSCode through terminal command:`code`:
    * Open VSCode, Shift + Command + P
    * input `shell`
    * Choose to __install code command in PATH__.

Tasks I need to do:
1. Softwares I need to install later: Firefox, Octave.
3. To configure the environment variables
4. Copy the .vimrc file to github. Other import configuration should also be uploaded to Github. As has been said in one blog, one should keep updating vim configuration.
=======

Tasks I need to do:
1. Softwares I need to install later: Firefox, Octave.
2. To configure my blog and vim editor and other terminal configurations.
>>>>>>> 3e60228863728d3de6e33c446717167a73a429c7

### To Use *Pycharm* and *Clion*, I need to sign in the Jetbrains website and use my account and password to activate these two softwares.
### To use Texpad, I need to sign in the TexPad website and use my email and password to activate the softwares.

![Image of bulb](https://octodex.github.com/images/yaktocat.png)
