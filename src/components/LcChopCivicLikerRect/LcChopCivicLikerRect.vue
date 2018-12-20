<template>
  <span :class="rootClass" :style="rootStyle">
    <div class="lc-chop__content" :style="contentStyle">
      <chop />
      <span class="lc-chop__content__value" :style="valueStyle">
        {{ dateValue }}
      </span>
    </div>
  </span>
</template>

<script>
import Chop from "@/assets/chop/civic-liker-rect.svg?inline";
import mixin from "@/mixins/lc-chop";

export default {
  name: "lc-chop-civic-liker-rect",
  components: {
    Chop
  },
  mixins: [
    mixin({
      className: "lc-chop-civic-liker-rect",
      defaultSize: 210,
      contentWiggleRotateZ: 3,
      valueWiggleRotateZ: 4,
      props: ["date", "isTrialling"]
    })
  ]
};
</script>

<style lang="scss">
.lc-chop-civic-liker-rect {
  height: 0.604em;

  color: #28646e;

  &--trialling {
    color: #eec443;
  }

  .lc-chop__content__value {
    top: 42%;
    color: black;

    font-size: 0.12em;
    font-weight: 600;
    letter-spacing: 0.08em;
  }
}
</style>
