---
title: 'onerdy.com'
excerpt: 'This website is built using Nextjs and Tailwind CSS, hosted on AWS Amplify...'
coverImage: '/assets/projects/onerdy-dot-com/coding.jpg'
date: '2023-05-14T22:00:00.000Z'
author:
  name: Rodney Mort
  picture: '/assets/authors/rodney.webp'
ogImage:
  url: '/assets/projects/onerdy-dot-com/coding.jpg'
---

Github Repo: [https://github.com/onerdy/onerdy.com](https://github.com/onerdy/onerdy.com)

This website is built using Nextjs and Tailwind CSS, hosted on AWS Amplify. As a hobbyist developer, I researched multiple options for creating this site, I liked the idea of using Nextjs because it solves many problems and handles many functions out of the box. The combination of Javascript, React, Nextjs seems to be very popular and has a lot of community support which I think is helpful. I started this project based on the [Blog Starter Kit](https://vercel.com/templates/next.js/blog-starter-kit) and have been adding my own customizations.

One option I've seen around the web for hosting a Nextjs site is to use Vercel. They make everything as easy as possible and they even have a free tier. However, with Vercel, I did not like the relatively large jump in price if going past the free tier for my personal site. So, I decided to host on AWS Amplify. Even though there is a small cost (less than $1 per month), I liked this approach better.  Plus, I liked the idea of getting more experience with AWS.

I did initially run into [this issue](https://github.com/aws-amplify/amplify-hosting/issues/3194) getting an error 500 loading images when hosting on AWS. It was really frustrating. Luckily, a kind stranger in the GitHub issue discussion eventually figured out that downgrading the version of Nextjs fixed the issue.