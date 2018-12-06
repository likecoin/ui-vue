<template>
  <section id="avatar">

    <h2 class="code">&lt;Avatar/&gt;</h2>

    <h3>Default</h3>
    <lc-avatar
      :src="src"
    />

    <h3 class="code">size="large"</h3>
    <lc-avatar
      :src="src"
      size="large"
    />

    <h3 class="code">halo="civic-liker"</h3>
    <lc-avatar
      :src="src"
      halo="civic-liker"
    />

    <h3 class="code">halo="civic-liker-beta"</h3>
    <lc-avatar
      :src="src"
      halo="civic-liker-beta"
    />

    <h3 class="code">size="large" halo="civic-liker"</h3>
    <lc-avatar
      :src="src"
      size="large"
      halo="civic-liker"
    />

    <h3 class="code">size="large" halo="civic-liker-beta"</h3>
    <lc-avatar
      :src="src"
      size="large"
      halo="civic-liker-beta"
    />

  </section>
</template>

<script>
import LcAvatar from "@/components/LcAvatar";

import src from "./assets/avatar/ckxpress.jpg";

export default {
  name: "avatar-demo",
  components: {
    LcAvatar
  },
  data() {
    return {
      src
    };
  }
};
</script>
