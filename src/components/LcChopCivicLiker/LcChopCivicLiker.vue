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
      props: ["date", "text", "isBeta", "isTrial", "isTrialling"]
    })
  ],
  props: {
    isFlashing: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    rootClass() {
      const { name: className } = this.$options;
      return [
        ...this.mixinClass,
        {
          [`${className}--flashing`]: this.isFlashing
        }
      ];
    },
    value() {
      if (this.text) {
        return this.text;
      }

      if (this.isBeta) {
        return "LIKE";
      }

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

  &--flashing {
    @keyframes flashing {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0.1;
      }
    }

    animation: {
      name: flashing;
      duration: 1s;
      timing-function: ease-in-out;
      iteration-count: infinite;
      direction: alternate;
    }
  }
}
</style>
