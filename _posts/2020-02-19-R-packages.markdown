---
layout: post
title: Name of the Blog
author: yuyang
date: yyyy-mm-dd
description:  (optional)
img: (name of the picture).jpg
comments: true
tags: [tag1, tag2]
---

### Create an R package
References:
- [Instructions for Creating Your Own R Package](http://web.mit.edu/insong/www/pdf/rpackage_instructions.pdf)
- [Warning about UTF-8 with roxygen2](https://stackoverflow.com/questions/51694929/warning-about-utf-8-with-roxygen2)
- [](https://stackoverflow.com/questions/29135971/namespace-not-generated-by-roxygen2-skipped-confusion-with-hadley-book)

Create from command line
1. Create a folder named 'greetings': `mkdir greetings` and `cd greetings`.
2. Write some R files in the folder, for example, `hello.R` and `goodbye.R`.(No C files.)
3. Open R script: `r --vanilla`, run `package.skeleton(name="greetings", code_files=c("hello.R", "goodbye.R"))`. Quit R, you will see a folder named `greetings`.
4. Change directory into `greetings`: `cd greetings`. Edit `DESCRIPTION` file, add `Encoding: UTF-8` to the end.
5. Remove `NAMESPACE` file: `rm NAMESPACE`. Open R script: `r --vanilla`, run `devtools::document()` to update the `NAMESPACE` file.
6. Edit `.Rd` files in the folder `man`, make sure `title` is edited. Remove the package rd file:`rm greetings-package.Rd`.
    If examples section is modified, then we need to add `export(func)` to `NAMESPACE`.
7. Check the functions are working and the pacakges are loaded correctly. Change directory to the original `greetings` folder, the one with a subdirectory `greetings` and the R files. Open R script: `r --vanilla`, run 
    ``` r
    library(devtools)
    library(roxygen2)
    my.Rpackage <- as.package("greetings")
    load_all(my.Rpackage)
    document(my.Rpackage)
    ```
8. Build, install, and check the package.
    ```
    R CMD build greetings
    R CMD INSTALL greetings_1.0.tar.gz
    R CMD check --as-cran greetings_1.0.tar.gz
    ```
9. Load the library in R script and try some functions.


### Edit .Rd files
1. Feel free to remove the .Rd files if you don't plan to export the corresponding functions.
2. Share one .Rd file. For example, use `xkcd.Rd` for `dxkcd.Rd, pxkcd.Rd, qxkcd.Rd, rxkcd.Rd`. 
    - Rename `dxkcd.Rd` with `xkcd.Rd`, and remove the other Rd files.
    - Use alias to relate the other functions to this .Rd file.
3. Check [Writing R documentation files](https://colinfay.me/writing-r-extensions/writing-r-documentation-files.html) detaild Rd file rendering.
4. View .Rd files conveniently. Go to the directory of the Rd file.
    ``` r
    library(Rdpack)
    viewRd('./xkcd.Rd', type='html')
    ```
    
### Do tests in the R package.
References:
- [Testing](http://r-pkgs.had.co.nz/tests.html) 

1. Get into the package directory, the one with `NAMESPACE`, with `cd greetings`. Open R script: `r --vanilla`.
    ```
    devtools::use_testthat()
    ```
    or 
    ```
    library(devtools)
    use_testthat()
    ```
    This will:
    - Create a `tests/testthat` directory in the package directory.
    - Adds testthat to the `Suggests` field in the `DESCRIPTION`.
    - Creates a file `tests/testthat.R` that runs all your tests when `R CMD check` runs. Do not need to modify `testthat.R`.
2. Move into the directory `tests/testthat`, and create test R files inside this directory. Each test R file serves for one single test. 
    - Every test file's name should start with `test`. 
    - Need to include `context()` to describe the usage of this test file.
    - When testing the equivalence of numbers, control the output precision when running it in R by `sprintf("%.20f", x)`, then paste the result to `expect_equal()`.
    - For other test statements, check the reference for more detail.
    - For example, create a test file `test_dxkcd.R` to test for `dxkcd` function.
    ```
    context("dxkcd")
    library(xkcd)

    test_that("the output is of the same length as max(len(y), len(sd.x))", {
    expect_equal(length(dxkcd(0.1, 1)), 1)
    expect_equal(length(dxkcd(0.1, c(1, 2, 3))), 3)
    expect_equal(length(dxkcd(c(0.1, 0.12), c(1, 1.5, 2, 2.5))), 4)
    expect_equal(length(dxkcd(c(0.1, 0.12, 0.13, 0.14), c(1, 1.5))), 4)
    })

    test_that("the output is correct within tolerance", {
        expect_equal(dxkcd(0.1, 1), 3.32703659106943439028)
    })
    ```
3. Run the tests. Change directory to the package directory, the one containing `NAMESPACE`. Open R script: `r --vanilla`.
    ```
    devtools::test()
    ```
    Correct mistakes refering to the prompt if there is any.


### Commit the package to Github
1. Remove the R files that are used to generate the package skeleton.
2. Add `.gitignore` file to the repository you want to commit. Check my [R.gitignore]( https://raw.githubusercontent.com/yuyang-yy/materials/master/config/R/R.gitignore).
3. Take the usual steps to commit.