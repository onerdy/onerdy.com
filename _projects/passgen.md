---
title: 'Password Generator'
excerpt: 'I created this password generator web application as an exercise to improve my web development skills and test some modern technologies...'
coverImage: '/assets/projects/passgen/passgenlogo.png'
date: '2024-03-10T22:00:00.000Z'
author:
  name: Rodney Mort
  picture: '/assets/authors/rodney.webp'
ogImage:
  url: '/assets/projects/passgen/passgenlogo.png'
---

Project Link: [https://passgen.onerdy.com](https://passgen.onerdy.com)\
Github Repo: [https://github.com/onerdy/passgen](https://github.com/onerdy/passgen)

I created this password generator web applictation as an exercise to improve my web development skills and test some modern technologies.  This application was built using [Blazor 8](https://learn.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-8.0), Microsoft's full-stack web UI framework, in addition to the [MudBlazor Component Library](https://www.mudblazor.com).  The purpose of this application is to create randomly generated characters to be used as strong passwords.

This application is hosted on an Ubuntu Linux server running in a Docker container and using a Docker Compose configuration file.  The source code is stored in a [GitHub repo](https://github.com/onerdy/passgen) with an automated workflow which triggers on every commit.  The workflow builds a new version of the Docker application image and saves it to [GitHub's Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).  The application is then relatively easy to deploy in the production environment with a few simple commands.  This Linux server and Docker environment have no inbound connections allowed from the Internet.  The site is being published using a [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) which takes the original HTTP site and automatically routes it through a proxied HTTPS connection with valid certs (very awesome and simple)!

The UI for this application is responsive and mobile friendly.  Loading the site sets default values for several variables including number of passwords to generate, password length, usage of uppercase letters, usage of lowercase letters, usage of numbers, and usage of symbols.  These variables can be adjusted by using UI sliders and checkbox components.  Each randomly generated password is displayed as a card showing a password in a text field along with a button to copy the password to the clipboard.

Creating this CopyToClipboard button component was an interesting challenge.  Initially I used Blazor's [JSInterop](https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/?view=aspnetcore-8.0) feature and its "InvokeVoidAsync()" method to run Javascript code.  Calling the Javascript method "navigator.clipboard.writeText()" seemed to work great during initial testing and it looked great since it was a native MudBlazor component.  However, after more extensive testing, I found that this CopyToClipboard component did not work on my iPhone.  Further research showed that Apple restricts the usage of Javascript on iOS and this copy to clipboard function was not compatible with JSInterop.  I resolved this issue by recreating the CopyToClipboard component using plain HTML elements with a button and Javascript code that runs directly "onclick()" rather than using JSInterop.

This application's logo (a golden cube which combines images of keys and a padlock) was designed by [DALL-E 2](https://openai.com/dall-e-2) AI image generation.