<div align="middle" style="margin-bottom: 60px">
  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" width="200">
</div>
  
## 프로젝트 주제
- 포켓몬 도감 만들기

## 개요

- [Pokemon API](https://pokeapi.co/)를 활용하여 포켓몬 도감을 만듭니다.
- [pokedex](https://lwj.aryandeora.com/pokedex-complete)의 UI를 디자인 시안 삼아 구현하도록 합니다.

## 실행 방법

- node js가 설치가 선행되어야 합니다.(v16.14.1)

- 만약 yarn이 설치되어 있지 않은 경우, 아래의 명령어로 yarn을 설치합니다.

```shell
npm i -g yarn
```

- 아래 명령어로 실행시킬 수 있습니다.

```shell
yarn && yarn dev
```

## URL

- 배포 링크 : https://jqkk.github.io/2023-01-React-Study-Pokedex/
- 웹 vscode 링크 : https://github.dev/jqkk/2023-01-React-Study-Pokedex

## 기술 스택

```
- typescript
- react js
- jotai
- react-query
- framer-motion
- twin-macro
- yarn
- husky
- vite
- storybook
```

## 폴더 구조

```
.
├── components
│   ├── buttons
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   ├── NextButton.tsx
│   │   └── PreviousButton.tsx
│   ├── icons
│   │   ├── BackgroundIcon.tsx
│   │   ├── NextIcon.tsx
│   │   └── PreviousIcon.tsx
│   ├── ImageView.tsx
│   ├── ImageView.stories.tsx
│   ├── Navigation.tsx
│   └── Navigation.stories.tsx
└── domains
    ├── api
    │   └── pokemon.ts
    ├── atoms
    │   ├── color-palette.ts
    │   └── count.ts
    ├── components
    │   ├── background
    │   │   ├── Background.tsx
    │   │   └── Background.stories.tsx
    │   ├── pokedex-evolution-chain
    │   │   ├── PokedexEvolutionChain.tsx
    │   │   └── PokedexEvolutionChain.stories.tsx
    │   ├── pokedex-header
    │   │   ├── PokedexHeader.tsx
    │   │   └── PokedexHeader.stories.tsx
    │   ├── pokedex-picture
    │   │   ├── PokedexPicture.tsx
    │   │   └── PokedexPicture.stories.tsx
    │   ├── pokedex-stats
    │   │   ├── PokedexStats.tsx
    │   │   └── PokedexStats.stories.tsx
    │   ├── pokedex-type
    │   │   ├── PokedexType.tsx
    │   │   └── PokedexType.stories.tsx
    │   ├── Card.tsx
    │   └── Card.stories.tsx
    ├── hooks
    │   ├── queries
    │   │   ├── useGetPokemonInfoQuery.ts
    │   │   └── useGetPokemonStatsQuery.ts
    │   ├── useBackgroundColor.ts
    │   └── useNavigation.ts
    ├── types
    │   └── pokemon.ts
    ├── utils
    │   ├── color.ts
    │   └── fns.ts
    ├── motions
    │   └── image-view.motion.ts
    ├── pages
    │   ├── MainPage.tsx
    │   └── MainPage.stories.tsx
    └── styles
        └── GlobalStyles.tsx
```

## 회고

[1주차 회고](./docs/1주차.md) <br/>
[2주차 회고](./docs/2주차.md)

## 프로젝트 진행 방식

- 해당 레포지토리를 자신의 레포지토리로 fork 받은 후, 구현을 진행합니다.
- 기술 스택은 자유롭게 선정하여 진행합니다.
- 매주 정기 회의(목요일 밤 10시) 전까지 구현 결과물을 해당 레포지토리의 자신의 이름으로 된 브랜치로 Pull Request를 날리도록 합니다.
  - ex) jqkk/2023-01-React-Study-Pokedex의 main 브랜치에서 Google-Developer-Student-Clubs-TUK
    /2023-01-React-Study-Pokedex의 jqkk 브랜치로 Pull Request를 날립니다.
- 정기 회의 전까지 구현한 프로젝트를 github-pages, vercel 등을 활용하여 배포하도록 합니다.
- 리드미의 실행 방법, URL, 기술 스택, 폴더 구조 항목에 대해서는 정기 회의 전 각자 작성하도록 합니다.
  - 이외에 리드미에 추가하고 싶은 항목이 있다면 자유롭게 추가하시면 됩니다.

## 참고 링크

- https://pokeapi.co
- https://github.com/ardeora/astro-tanstack-lwj
