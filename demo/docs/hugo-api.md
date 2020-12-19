---
title: Hugo API documentation site
description: I've created about 10 different Hugo sites. So far it's my favorite static site generator. The build speed is less than a minute for every site that I've deployed. However, the setup process for Hugo sites isn't very clear for me. I wish I had clear instructions on how to add a theme and publish it online. Lots of Hugo themes are available at [JAMstack Themes](https://jamstackthemes.dev/).
---

# Hugo API documentation site

I've created about 10 different Hugo sites. So far it's my favorite static site generator. The build speed is less than a minute for every site that I've deployed. However, the setup process for Hugo sites isn't very clear for me. I wish I had clear instructions on how to add a theme and publish it online. Lots of Hugo themes are available at [JAMstack Themes](https://jamstackthemes.dev/).

In this example, let's build the API documentation site using the DocuAPI theme for Hugo static site generator. This Hugo theme is based on Slate. The end result will look similar to this site:

[https://docuapi-test.netlify.app](https://docuapi-test.netlify.app)

## Prerequisites

1. Check that you have Hugo installed:

    ```bash
    hugo version
    ```

    If you don't have Hugo installed on your computer, read [How to install Hugo on Windows](https://docsy-site.netlify.app/docs/static-site-generators/hugo-install/).

2. Check that you have Git client installed:

    ```sh
    git version
    ```

    If you don't have Git client installed on your computer, read how to [install Git client](https://docsy-site.netlify.app/docs/static-site-generators/jekyll/#git-client).

3. Check that you have:

    * [VSCode](https://code.visualstudio.com/) installed on your computer
    * A [GitHub](https://github.com/) account
    * A [Netlify](https://www.netlify.com/) account

---

## Download the theme

To download the API documentation theme:

1. Go to the theme [GitHub repository](https://github.com/bep/docuapi).

![img](/docuapi-theme.png)

2.  Download the zipped project folder.

![img](/download-theme-docuapi.png)

3. Unzip the project folder.

    ```toml
    theme = "docuapi"
    # themesdir = "../.."
    languageCode = "en-us"
    baseurl = "/"
    title = "DocuAPI Example Site"
    ```

---
