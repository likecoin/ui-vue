<template>
  <div class="app">

    <header class="app__header">
      <a
        v-for="link in headerLinks"
        :key="link.href"
        :href="link.href"
        target="_blank"
        rel="noopener"
      >
        {{ link.text }}
      </a>
    </header>

    <div class="app__banner">
      <logo class="app__banner__logo" />
      <h1>LikeCoin UI</h1>
    </div>

    <h1>List of Components</h1>

    <lc-avatar-demo />
    <lc-chop-demo />
    <lc-progress-demo />

  </div>
</template>

<script>
import Logo from "./assets/logo.svg?inline";

import LcAvatarDemo from "./LcAvatar.vue";
import LcChopDemo from "./LcChop.vue";
import LcProgressDemo from "./LcProgress";

export default {
  name: "app",
  components: {
    Logo,
    LcAvatarDemo,
    LcChopDemo,
    LcProgressDemo
  },
  data() {
    return {
      headerLinks: [
        {
          text: "LikeCoin",
          href: "https://like.co"
        },
        {
          text: "GitHub",
          href: "https://github.com/likecoin/ui-vue"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

.app {
  padding-bottom: 100px;

  font-size: 12pt;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  &__header {
    display: flex;
    align-items: center;

    box-sizing: border-box;
    min-height: 44px;
    padding: 8px 12px;

    color: white;
    background: #28646e;

    a {
      color: white;
      font-weight: bold;

      padding: 0 12px;

      &:hover {
        color: #d2f0f0;
      }

      &:active {
        color: darken(#d2f0f0, 10);
      }
    }
  }

  &__banner {
    margin-bottom: 60px;
    padding: 40px;

    color: #28646e;
    background: linear-gradient(to right, #d1efef, #efe6b3);

    &__logo {
      width: 88px;
    }
  }
}

.demo-section {
  margin: 60px 16px;

  & + & {
    margin-top: 120px;
  }

  &__title,
  &__subtitle {
    margin: 48px 0 24px;
    font-family: "Courier New", monospace;
  }

  &__title {
    font-size: 1.8em;
  }

  &__subtitle {
    margin: 32px 0 16px;
    font-size: 1.2em;
  }
}

$tags: (
  new: #16a122,
  deprecated: #fc5757
);

.tag {
  $tag-selector: "";

  @each $name, $color in $tags {
    &-#{$name}:after {
      content: "#{$name}";
      background: $color;
    }

    @if $tag-selector != "" {
      $tag-selector: $tag-selector + ",";
    }
    $tag-selector: $tag-selector + "&-#{$name}";
  }

  #{$tag-selector} {
    &:after {
      display: inline-block;

      margin: 0 0.2em;
      padding: 0.05em 0.15em;
      transform: translateY(-0.3em) rotateZ(-3deg);

      color: white;
      border: 3px double currentColor;
      border-radius: 0.3em;

      font-size: 0.5em;
      text-transform: uppercase;
    }
  }
}
</style>
