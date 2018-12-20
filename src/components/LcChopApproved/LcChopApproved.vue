<template>
  <span :class="rootClass" :style="rootStyle">
    <div class="lc-chop__content" :style="contentStyle">
      <chop />
    </div>
  </span>
</template>

<script>
import Chop from "@/assets/chop/approved.svg?inline";
import chopMixin from "@/mixins/lc-chop";

export default {
  name: "lc-chop-approved",
  components: {
    Chop
  },
  mixins: [
    chopMixin({
      className: "lc-chop-approved",
      defaultSize: 244,
      contentWiggleRotateZ: 8,
      props: ["isTrial"]
    })
  ]
};
</script>

<style lang="scss">
.lc-chop-approved {
  height: 0.3em;

  color: #8c293c;

  &--trial {
    color: #eec443;
  }
}
</style>
