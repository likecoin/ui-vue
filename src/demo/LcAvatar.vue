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
      is-full-width
    </h3>
    <div class="block-demo">
      <lc-avatar
        :src="src"
        is-full-width
      />
    </div>

    <h3 class="demo-section__subtitle">
      halo="civic-liker"
    </h3>
    <lc-avatar
      :src="src"
      halo="civic-liker"
    />

    <h3 class="demo-section__subtitle">
      halo="civic-liker-trial"
    </h3>
    <lc-avatar
      :src="src"
      halo="civic-liker-trial"
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
      halo="civic-liker-trial"
    </h3>
    <lc-avatar
      :src="src"
      size="large"
      halo="civic-liker-trial"
    />

    <h3 class="demo-section__subtitle">
      is-full-width<br>
      halo="civic-liker-trial"
    </h3>
    <div class="block-demo block-demo--extend">
      <lc-avatar
        :src="src"
        halo="civic-liker-trial"
        is-full-width
      />
    </div>

    <h3 class="demo-section__subtitle">
      is-full-width<br>
      size="large"<br>
      halo="civic-liker-trial"
    </h3>
    <div class="block-demo block-demo--extend">
      <lc-avatar
        :src="src"
        halo="civic-liker-trial"
        size="large"
        is-full-width
      />
    </div>

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

<style lang="scss" scoped>
.block-demo {
  border: 1px solid #ccc;

  width: 80%;
  max-width: 400px;

  margin: 0 auto;

  &--extend {
    margin-top: 48px;
    margin-bottom: 72px;
  }
}
</style>
