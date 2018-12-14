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
import Chop from "@/assets/chop/trial.svg?inline";
import mixin from "@/mixins/lc-chop";

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
    isTrialling: {
      type: [Boolean, String],
      default: false
    }
  },
  mixins: [
    mixin({
      defaultSize: 210,
      contentWiggleRotateZ: 3,
      valueWiggleRotateZ: 4
    })
  ],
  computed: {
    rootClass() {
      return [
        "lc-chop",
        "lc-chop-trial",
        {
          "lc-chop-trial--trialling": this.isTrialling
        }
      ];
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
