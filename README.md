# Twinoid Goals

A simple, straight-forward package containing everything you need to handle Twinoid goals.

![](https://i.imgur.com/eEGWJnb.png)

## Installation
```
npm i twinoid-goals
```

## Usage

```ts
import { alphabounce } from 'twinoid-goals';

const unlockedGoals = alphabounce.getUnlocked('planets', 6);
```

## More examples

### Get all goals for a specific game

```ts
import { alphabounce } from 'twinoid-goals';

const { goals } = alphabounce;
```

### Get all unlockable goals for an ID

```ts
import { alphabounce } from 'twinoid-goals';

const planets = alphabounce.get('planets');
```