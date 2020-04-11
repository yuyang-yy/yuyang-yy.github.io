# A blog to log down my Ph.D. learning path and daily life.
* The first version of the blog is built following the guidance on the [Kresnik's blog](http://kresnik.wang/works/tech/2015/06/07/在github-pages网站下用jekyll制作博客教程.html), using the template [Flexible-Jekyll theme](http://jekyllthemes.org/themes/flexible-jekyll/) from [jekyllthemes](http://jekyllthemes.org). 
* The current version is the second version, utilizing a new template [Jekyll Theme Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy#jekyll-theme-chirpy).
* Enable MathJax by adding the following to the "\_include/head.html" file. Refer to [The tex2jax Preprocessor](https://docs.mathjax.org/en/v2.7-latest/options/preprocessors/tex2jax.html) for the configurations.
```html

  <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
	tex2jax: {
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
            inlineMath: [ ['$','$'] ],
	    displayMath: [['$$', '$$']],
	    processEscapes: true,
      }
    });
  </script>
  <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
```


### Run jekyll locally
> jekyll serve -w --host=0.0.0.0
Open browser: (external ip):8000

### Search Functionality
- Two plugins for searching have been added. But since github page doesn't allow external plugins, they are not working actually. The two plugins are from [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search), the searching framework [jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy/blob/c7acce88bb278d8eec6a0c41a59000406ded2002/_includes/search-loader.html) uses.

### License
GNU General Public License v3.0
