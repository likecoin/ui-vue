<template>
  <section id="lc-avatar" class="demo-section">

    <h2 class="demo-section__title">&lt;lc-avatar/&gt;</h2>

    <h3 class="demo-section__subtitle">
      src="ckxpress.jpg"
    </h3>
    <lc-avatar
      :src="src"
    />

    <h3 class="demo-section__subtitle">
      size="large"
    </h3>
    <lc-avatar
      :src="src"
      size="large"
    />

    <h3 class="demo-section__subtitle">
      size="200"
    </h3>
    <lc-avatar
      :src="src"
      size="200"
    />

    <h3 class="demo-section__subtitle">
      halo="civic-liker"
    </h3>
    <lc-avatar
      :src="src"
      halo="civic-liker"
    />

    <h3 class="demo-section__subtitle">
      halo="civic-liker-beta"
    </h3>
    <lc-avatar
      :src="src"
      halo="civic-liker-beta"
    />

    <h3 class="demo-section__subtitle">
      size="large"<br>
      halo="civic-liker"
    </h3>
    <lc-avatar
      :src="src"
      size="large"
      halo="civic-liker"
    />

    <h3 class="demo-section__subtitle">
      size="large"<br>
      halo="civic-liker-beta"
    </h3>
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
