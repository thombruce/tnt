---
title: Thom's Nuxt Template
authors: Thom Bruce
date: 2023-09-02T18:13:17Z
layout: article
---

Welcome to TNT, a Nuxt template by me - Thom. Hence the name. The short form is just a lot catchier, a bit more... explosive.

You don't need me to go over TNT's [features](/docs/features) here, or the [components](/docs/components) and [layouts](/docs/layouts) on offer, because those are all documented elsewhere. Instead, let's talk motivation and the future of TNT.

## Why TNT?

TNT is my attempt to make getting started with and managing many Nuxt-based projects just that bit quicker and easier. It is a _highly_ opinionated approach to developing in the Nuxt web development framework, and it is an incomplete one. In general, the features I've been adding are those that I have an immediate need of. Even this blog post isn't exempt from that rule; as I am presently fleshing out the blog and RSS feed capabilities of TNT, I am essentially writing this post to serve as an example and as a development and testing utility.

Outside of the TNT project itself, I've been using it in my own site ([ThomBruce.com](https://thombruce.com/)) and a couple of other projects that are yet in their infancy.

The emphasis to this point has been to support content-driven websites, meaning we lean heavily on [Nuxt Content](https://content.nuxtjs.org/) for most of the functionality. And as a result of early design direction, most of TNT's components are compatible with Nuxt Content's MDC syntax. The docs right now heavily reflect this, as the only documented approach to using them is via that syntax.

More recently, I've been thinking... _why stop there?_ I already have another project written in Vue as a browser application, some of the next steps for which are to add support for features which require a server, an API, a more robust approach than is offered directly by Vue. And as well as this, I've been thinking about ways to extend the availability of server-based services to static websites, like those currently supported by TNT. TNT might start to look a little different as I aim to support some of these ideas.

## The Future

As of now, I think TNT is a great tool for throwing together a static website like a simple blog. But it lacks explicit support for more advanced web applications. Or even... much simpler ones; microapps that have no need for the content-driven approach.

With this in mind, I've started to think about breaking TNT into a few separate libraries.

- _TNT Core_ will include most of the third party libraries that enable TNT to function, as well as providing the styling framework and icon libraries for use by other projects
- _TNT Content_ would enable Nuxt Content and include layouts for content pages, as well as featuring the [taxonomies](/docs/features/taxonomies) functionality I'm pretty proud of
- _TNT Authors_ might be an optional extension to the _TNT Content_ layer which allows for prettier author routes like `/@thombruce` rather than that supported by taxonomies (`/~authors/thombruce`), as well as some other features I'm currently experimenting with

This separation of the core from other content-focused libraries would allow me to use TNT's style framework (based on [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/)) and other utilities to develop web applications like the aformentioned but not afore-named [Toodles](https://toodles.netlify.app/#/), as well as some of those other app ideas in support of static websites like [ThomBruce.com](https://thombruce.com/) and [Free as in Beer](https://freeasinbeer.thombruce.com/). Ideas like user authentication, comments systems, support for content submissions, etc.

As mentioned up top, TNT is a framework presently based on my own needs and ideas, but that doesn't mean it ends there. TNT is also open source and licensed under the MIT license. So if you want to make use of it too, you can. If you want to make suggestions or contribute your own code, you can. And if you want to fork it and take it in a completely different direction, you can!

The source for TNT itself, as well as the docs and this blog, is available at <https://github.com/thombruce/tnt>.

If you just want to chat about the direction or development of TNT, feel free to [join my Discord](https://discord.gg/SAUagUgTfa) and hit me up there.
