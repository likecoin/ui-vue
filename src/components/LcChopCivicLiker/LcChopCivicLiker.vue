<template>
  <span class="lc-chop lc-chop-civic-liker" :style="rootStyle">
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
  props: {
    date: {
      type: Date,
      default: undefined
    },
    isTrial: {
      type: [Boolean, String],
      default: false
    }
  },
  mixins: [
    chopMixin({
      defaultSize: 128,
      contentWiggleRotateZ: 5,
      valueWiggleRotateZ: 6
    })
  ],
  computed: {
    value() {
      if (this.isTrial) {
        return "TRIAL";
      }

      const { date } = this;
      if (date) {
        const d = date.getDate();
        const m = date.getMonth() + 1;
        const y = date.getFullYear();
        return `${d < 10 ? "0" : ""}${d}.${m < 10 ? "0" : ""}${m}.${y}`;
      }

      return null;
    }
  }
};
</script>

<style lang="scss">
.lc-chop-civic-liker {
  height: 1em;

  color: #28646e;

  .lc-chop__content__value {
    top: 63.5%;

    color: black;

    font-size: 0.12em;
    font-weight: 600;
    letter-spacing: 0.08em;
  }
}
</style>
