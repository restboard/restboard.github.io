---
layout: splash.njk
splashTitle: 'An admin panel for any REST API'
splashText: 'Restboard is an MIT licensed application booster for (but not limited to) Vue. It allows you to quickly create modern and elegant frontend panels for any existing (REST) API, without limits on the backend technology.'
splashAction: 'View on GitHub'
splashLink: 'https://github.com/restboard'
splashImage: '/static/media/img/screenshot.png'
extra: getting_started.njk
---

## Stack Overview

Technically speaking, **Restboard** is a plug & play extension for [Quasar]('https://quasar.dev'), a rich and full-featured frontend framework based on [Vue.js]('https://vuejs.or'):

<img class="picture" src="/static/media/img/stack.svg"/>

Restboard provides the following building blocks:

  * An [**abstraction layer**](https://github.com/restboard/rb-core-module) over API interaction (based on CRUD model)
  * A [**UI toolkit**](https://github.com/restboard/quasar-app-extension-rb-ui) with ready-to-use visual components for common use-cases
  * A [**CLI (Command Line Interface)**](https://github.com/restboard/quasar-app-extension-restboard?tab=readme-ov-file#cli) to quickly scaffold new resources and views

## How does it work?

Restboard provides a couple of abstractions to interact with the underlying backend API in a standard way. The interaction pattern is designed on the concepts of **Resources** and **Providers**:

  * **Resources** basically map the backend resources and provide a standard CRUD API to interact with them.
  * Each resource uses a **Data Provider** to translate requests to the protocol and details of the backend API.
  * The **Auth Provider** provides an abstraction over authentication and authorization details.

<img class="picture" src="/static/media/img/pattern.svg"/>

<p class="text-center">
    <a class="btn btn-brand" href="https://github.com/restboard/rb-core-module#rbresource">Learn more</a>
</p>

## The Ecosystem

Restboard is composed by several packages. By default, the standard installation includes and wires all of them together. However, if you want to use just part of the ecosystem, **you are free to add to your project just the features you need!**

<img class="picture" src="/static/media/img/ecosystem.svg"/>

<p class="text-center">
    <a class="btn btn-brand" href="https://github.com/restboard/quasar-app-extension-restboard#overviewe">Discover</a>
</p>

## Does it work only with REST API?

No, not really. While Restboard is primarly designed to interact with REST APIs, it doesn't force you to any particular paradigm. In other words, if you need to integrate a GraphQL API you just need to use a proper **data provider**.

You can also combine different APIs for different resources, simply using different data providers: _it's really up to you!_

<p class="text-center">
    <a class="btn btn-brand" href="#getting_started">Try it now!</a>
</p>

## Contribute

If you like the project, you can contribuite to its development with a donation:

<p class="text-center">
    <a class="btn btn-brand" href="https://paypal.me/EBertoldi">Donate</a>
</p>