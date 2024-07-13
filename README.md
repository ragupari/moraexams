# Mora Exams: Landing Website

## Development Guide

### Prerequisites

Bun is the recommended package manager (instead of npm) and runtime (instead of node). However, **You can use node and npm if you want**.

The reason for recommending bun: it's faster. To install bun: [visit bun.sh](https://bun.sh).

### Commands

If you are using npm, replace `bun` with `npm` in the below commands.

| Command                   | Action                                           |
| ------------------------- | ------------------------------------------------ |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

### Deployment

Whenever a commit is pushed or a PR is merged to the main branch, the website will be automatically published on [moraexams.org](https://moraexams.org) in a few minutes. The site is hosted on Netlify.

<!-- ## 🚀 Project Structure -->

<!-- Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Any static assets, like images, are placed inside the `public/` directory. -->

### Todo

- Project Sturcuture in readme needs a rewrite
- better integration of i18n
- optimal use of hydration and ssr
- reduce unnecessay complexity in components and pages
- move exam centers and relevant data to database (makes it possible to change landing page contents from dashboard)
- make it deployable on docker
- about page
- text content rewrite
- results page

## 👀 Looking for us?

<a href="https://www.youtube.com/@moraexams">![](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white) </a>

<a href="https://bit.ly/moraexamwhatsapp">![](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=WhatsApp&logoColor=white)</a>

<a href="https://bit.ly/moraexamviber">![](https://img.shields.io/badge/viber-685EA9?style=for-the-badge&logo=viber&logoColor=white)</a>

<a href="https://t.me/moraexam">![](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)</a>

<a href="https://www.facebook.com/moraexams/">![](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)</a>

<a href="https://twitter.com/moraexams">![](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)</a>

<a href="https://www.linkedin.com/company/mora-exams/">![](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)</a>
