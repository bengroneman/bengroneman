---
published: true
title: Building a blog with svelte and gray-matter
description: Get started using svelte and using endpoints to build a full stack application
author: Ben Groneman
categories: ['blog', 'tutorial', 'svelte', 'JavaScript']
updatedAt: 2022-07-29
createdAt: 2022-07-31
---

# Overview

To get started using [Svelte Kit](https://kit.svelte.dev/) with [Gray Matter](https://github.com/jonschlinkert/gray-matter) for content management you'lld need the following requirements:
The goal of this article is to show you how to deploy a full stack application using Svelte. Given that Svelte offers endpoints supporting full CRUD operations allowing it to render client side HTML, CSS, and JS while leveraging the `@sveltejs/adapter-node` package we can easily build a blog, gallery and so much more. Read on for more details.

## Requirements

- Node.js v16.x

## Getting started

To get up and running fast you can clone the `bengroneman/SvelteWind` repository as it will you to get up and running fast with Svelte Kit and TailwindCSS.

```
git clone https://github.com/bengroneman/SvelteWind.git ./<project-name>
npm i
npm run dev -- --open
```

Svelte is great, and offers tons of flexibility in the way you build your app, though it offers an opinionated structure to how you manage your files. I'd suggest leveraging the endpoint API to fetch your gray-matter content within a `content` or `matter` directory.
