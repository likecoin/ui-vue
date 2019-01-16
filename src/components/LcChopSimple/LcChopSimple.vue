<template>
  <span :class="rootClass" :style="rootStyle">
    <div class="lc-chop__content" :style="contentStyle">
      <chop />
      <lc-chop-font :text="text" />
    </div>
  </span>
</template>

<script>
import LcChopFont from "@/components/LcChopFont";
import Chop from "@/assets/chop/simple.svg?inline";
import chopMixin from "@/mixins/lc-chop";

export default {
  name: "lc-chop-simple",
  components: {
    LcChopFont,
    Chop
  },
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  mixins: [
    chopMixin({
      className: "lc-chop-simple",
      defaultSize: 244,
      contentWiggleRotateZ: 8,
      props: ["isTrial"]
    })
  ]
};
</script>

<style lang="scss">
.lc-chop-simple {
  height: 0.3em;

  color: #8c293c;

  &--trial {
    color: #eec443;
  }

  .lc-chop-font {
    padding: 0.07em 0.08em;
    box-sizing: border-box;
  }
}
</style>
