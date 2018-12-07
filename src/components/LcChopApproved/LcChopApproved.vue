<template>
  <span class="lc-chop lc-chop-approved" :style="rootStyle">
    <div class="lc-chop__content">
      <chop />
    </div>
  </span>
</template>

<script>
import Chop from "@/assets/chop/approved.svg?inline";

export default {
  name: "lc-chop-approved",
  components: {
    Chop
  },
  props: {
    size: {
      type: [Number, String],
      default: 244,
      validator(value) {
        const v = parseInt(value, 10);
        return Number.isInteger(v) && v >= 0;
      }
    }
  },
  computed: {
    rootStyle() {
      return {
        fontSize: `${this.size}px`
      };
    }
  }
};
</script>

<style lang="scss">
.lc-chop-approved {
  height: 0.3em;

  color: #8c293c;
}
</style>
