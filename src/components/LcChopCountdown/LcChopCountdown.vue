<template>
  <span class="lc-chop lc-chop-countdown" :style="rootStyle">
    <div class="lc-chop__content">
      <chop />
      <span class="lc-chop__content__value">
        <span>{{ digit1 }}</span>
        <span>{{ digit0 }}</span>
      </span>
    </div>
  </span>
</template>

<script>
import Chop from "@/assets/chop/countdown.svg?inline";

export default {
  name: "lc-chop-countdown",
  components: {
    Chop
  },
  props: {
    days: {
      type: [Number, String],
      default: 0,
      validator(value) {
        const v = parseInt(value, 10);
        return Number.isInteger(v);
      }
    },
    date: {
      type: Date,
      default: undefined
    },
    size: {
      type: [Number, String],
      default: 104,
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
      let value;
      if (this.date) {
        const now = new Date().getTime();
        const endDate = this.date.getTime();
        value = Math.ceil((endDate - now) / 86400000);
      } else {
        value = parseInt(this.days, 10);
      }

      // Limit the value within 0 - 99
      return Math.max(0, Math.min(99, value));
    },
    digit0() {
      return this.value % 10;
    },
    digit1() {
      return Math.floor(this.value / 10);
    }
  }
};
</script>

<style lang="scss">
.lc-chop-countdown {
  height: 1.32em;

  color: #8c293c;

  .lc-chop__content__value {
    top: 26%;
    left: 0;
    right: 0;

    height: 0.8em;

    font-size: 0.68em;
    line-height: 1;
    text-align: center;

    overflow-y: hidden;

    span + span {
      margin-left: -0.06em;
    }
  }
}
</style>
