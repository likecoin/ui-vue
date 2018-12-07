<template>
  <span class="lc-chop lc-chop-trial" :style="rootStyle">
    <div class="lc-chop__content">
      <chop />
      <span class="lc-chop__content__value">
        {{ value }}
      </span>
    </div>
  </span>
</template>

<script>
import Chop from "@/assets/chop/trial.svg?inline";

export default {
  name: "lc-chop-trial",
  components: {
    Chop
  },
  props: {
    date: {
      type: Date,
      default: undefined
    },
    size: {
      type: [Number, String],
      default: 210,
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
    },
    value() {
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
.lc-chop-trial {
  height: 0.604em;

  color: #28646e;

  .lc-chop__content__value {
    top: 42%;
    color: black;

    font-size: 0.12em;
    font-weight: 600;
    letter-spacing: 0.08em;
  }
}
</style>
