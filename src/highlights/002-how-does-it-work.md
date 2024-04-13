---
tags: highlight
title: 'How does it work?'
image: '/static/media/img/pattern.svg'
reverse: true
actionLink: 'https://github.com/restboard/rb-core-module#rbresource'
actionLabel: 'Learn more'
---

Restboard provides a couple of abstractions to interact with the underlying backend API in a standard way. The interaction pattern is designed on the concepts of **Resources** and **Providers**:

  * **Resources** basically map the backend resources and provide a standard CRUD API to interact with them.
  * Each resource uses a **Data Provider** to translate requests to the protocol and details of the backend API.
  * The **Auth Provider** provides an abstraction over authentication and authorization details.