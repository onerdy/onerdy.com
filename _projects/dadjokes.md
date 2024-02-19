---
title: 'Dad Jokes Website'
excerpt: 'I created this Dad Joke website as an exercise to improve my web development skills and test some modern technologies...'
coverImage: '/assets/projects/dadjokes/dadjokelogo512.png'
date: '2024-02-19T22:00:00.000Z'
author:
  name: Rodney Mort
  picture: '/assets/authors/rodney.webp'
ogImage:
  url: '/assets/projects/dadjokes/dadjokelogo512.png'
---

Project Link: [https://dadjokes.onerdy.com](https://dadjokes.onerdy.com)
Github Repo: [https://github.com/onerdy/dadjokes](https://github.com/onerdy/dadjokes)

I created this Dad Joke website as an exercise to improve my web development skills and test some modern technologies.  This site was built using [Blazor 8](https://learn.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-8.0), Microsoft's full-stack web UI framework.  It uses a [MySQL](https://www.mysql.com/) database combined with the [Dapper](https://www.learndapper.com/) micro ORM library.

All of these components are hosted on an Ubuntu Linux server running Docker containers and a Docker Compose configuration file.  The source code is stored in a GitHub repo with an automated workflow which triggers on every commit.  The workflow builds a new version of the Docker application image and saves it to [GitHub's Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).  The application is then relatively easy to deploy in the production environment with a few simple commands.  This Linux server and Docker environment has no inbound connections allowed from the Internet.  The site is being published using a [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) which takes the original HTTP site and automatically routes it through a proxied HTTPS connection with valid certs (very awesome and simple)!

The UI for this site has a clean look with a 1970s color palette for a funny retro vibe.  The site's logo (face of a retro man wearing a "Dad Joke" headband) was designed by [DALL-E 2](https://openai.com/dall-e-2) AI image generation.