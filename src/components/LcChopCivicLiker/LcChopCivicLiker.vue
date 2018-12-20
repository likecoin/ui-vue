<template>
  <span :class="rootClass" :style="rootStyle">
    <div class="lc-chop__content" :style="contentStyle">
      <chop />
      <span class="lc-chop__content__value" :style="valueStyle">
        {{ value }}
      </span>
    </div>
  </span>
</template>

<script>
import Chop from "@/assets/chop/civic-liker.svg?inline";
import chopMixin from "@/mixins/lc-chop";

export default {
  name: "lc-chop-civic-liker",
  components: {
    Chop
  },
  mixins: [
    chopMixin({
      className: "lc-chop-civic-liker",
      defaultSize: 128,
      contentWiggleRotateZ: 5,
      valueWiggleRotateZ: 6,
      props: ["date", "isTrial", "isTrialling"]
    })
  ],
  computed: {
    value() {
      if (this.isTrial) {
        return "TRIAL";
      }

      return this.dateValue;
    }
  }
};
</script>

<style lang="scss">
.lc-chop-civic-liker {
  height: 1em;

  color: #28646e;

  &--trialling {
    color: #eec443;
  }

  .lc-chop__content__value {
    top: 63.5%;

    color: black;

    font-size: 0.12em;
    font-weight: 600;
    letter-spacing: 0.08em;
  }
}
</style>
