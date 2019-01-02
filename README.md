# @likecoin/ui-vue

A library for common LikeCoin UI components in Vue.js.

[Examples](https://likecoin.github.io/ui-vue)

## Installation

### Install the library as a dependency
```sh
npm install --save @likecoin/ui-vue
```

### Import the library in your code
```javascript
import Vue from 'Vue';
import LikeCoinUI, * as components from '@likecoin/ui-vue';

import '@likecoin/ui-vue/dist/ui-vue.css';

Vue.use(LikeCoinUI, {
  components,
});

```

A La Carte
```javascript
import Vue from 'Vue';
import LikeCoinUI, {
  LcAvatar,
} from '@likecoin/ui-vue';

import '@likecoin/ui-vue/dist/ui-vue.css';

Vue.use(LikeCoinUI, {
  components: {
    LcAvatar,
  },
});
```

## Development
This library is scaffolded by Vue CLI 3.

### Install dependency
```sh
npm install -g @vue/cli
npm install
```

### Compiles and hot-reloads for development in demo page
```sh
npm run demo
```

### Compiles and minifies for demo in static HTML
```sh
npm run build:demo
```

### Compiles and minifies for library
```sh
npm run build:lib
```

### Lints and fixes files
```sh
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
