---
title: 'Dad Joke Website'
excerpt: 'I created this Dad Joke website as an exercise to improve my web development skills and test some modern technologies...'
coverImage: '/assets/projects/dadjokes/dadjokelogo.png'
date: '2026-07-08T22:00:00.000Z'
author:
  name: Rodney Mort
  picture: '/assets/authors/rodney.webp'
ogImage:
  url: '/assets/projects/dadjokes/dadjokelogo.png'
---

Project Link: [https://dadjokes.onerdy.com](https://dadjokes.onerdy.com)\
Github Repo: [https://github.com/onerdy/dadjokes](https://github.com/onerdy/dadjokes)

UPDATE (7/8/2026): As an exercise in using AI Agentic coding and expanding my knowledge and experience with different hosting and CI/CD pipeline options, I have used VS Code and Claude Code to migrate Dad Jokes off .NET Blazor Server + MySQL + Docker hosted on a Linux VPS over to Firebase Hosting + Firestore. Since Firebase Hosting only serves static files, and this app is genuinely simple (fetch some jokes, show one, cycle through them), I rewrote the frontend in plain TypeScript instead of Blazor WebAssembly — no reason to ship a couple megabytes of .NET runtime just to display a joke and a button.

The data migration was the fun part: my MySQL database sits behind a locked-down Cloudflare tunnel, and rather than opening it to the internet, I exported to CSV and cleaned it up (some broken quote-escaping, some old encoding mangling) before importing straight into Firestore.

I set up GitHub Actions for automated CI/CD deploys. Wrapped up with some housekeeping: cleared out dependency vulnerabilities, and deleted the old Docker images.

Same jokes, now a ~75KB static site that deploys itself on every push.

Original Post (02-19-2024):
I created this Dad Joke website as an exercise to improve my web development skills and test some modern technologies. This site was built using [Blazor 8](https://learn.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-8.0), Microsoft's full-stack web UI framework, in addition to the [FluentUI Blazor Component Library](https://www.fluentui-blazor.net/). It uses a [MySQL](https://www.mysql.com/) database combined with the [Dapper](https://www.learndapper.com/) micro ORM library.

All of these components are hosted on an Ubuntu Linux server running Docker containers and a Docker Compose configuration file. The source code is stored in a [GitHub repo](https://github.com/onerdy/dadjokes) with an automated workflow which triggers on every commit. The workflow builds a new version of the Docker application image and saves it to [GitHub's Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry). The application is then relatively easy to deploy in the production environment with a few simple commands. This Linux server and Docker environment have no inbound connections allowed from the Internet. The site is being published using a [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) which takes the original HTTP site and automatically routes it through a proxied HTTPS connection with valid certs (very awesome and simple)!

The UI for this site has a mobile-friendly clean look with a 1970s color palette, sporting a retro vibe with a sense of humor. Loading the site queries the database and returns a randomized list of dad jokes which can be viewed individually by clicking the "Load Random Joke" button. The site's logo (a bearded retro man wearing a "Dad Jokes" headband) was designed by [DALL-E 2](https://openai.com/dall-e-2) AI image generation.