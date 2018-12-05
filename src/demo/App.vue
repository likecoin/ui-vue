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

    <avatar-demo />

  </div>
</template>

<script>
import Logo from "./assets/logo.svg?inline";

import AvatarDemo from "./Avatar.vue";

export default {
  name: "app",
  components: {
    Logo,
    AvatarDemo
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

.code {
  font-family: "Courier New", monospace;
}
</style>
