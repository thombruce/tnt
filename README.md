# TNT

[![CI](https://github.com/thombruce/tnt/actions/workflows/nuxtjs.yml/badge.svg?branch=main)](https://github.com/thombruce/tnt/actions/workflows/nuxtjs.yml?query=branch%3Amain)
[![Version](https://img.shields.io/github/v/tag/thombruce/tnt?label=release)](https://github.com/thombruce/tnt/tags)
[![License](https://img.shields.io/github/license/thombruce/tnt)](https://github.com/thombruce/tnt/blob/main/LICENSE)

## Usage

_Configure NUXT_APP_BASE_URL to the name of your repo (e.g. /tnt/) in your environment if you want to deploy to GitHub Pages from a project repo._

### Installation

```sh
yarn add -D @thombruce/tnt
```

### Updating

```sh
yarn upgrade @thombruce/tnt
```

## Development

```sh
git add -A
git commit -m "My changes"
git push
lerna publish
```

_Note: You may see syntax errors in the code when you first pull. To resolve this, you should run `yarn run dev` in each package to generate the `.nuxt` directory which contains type definitions imported by each package's tsconfig file._

## Credits

Dynamite emoji used as a Favicon is licensed under the CC-BY 4.0 license by Twitter Inc.
