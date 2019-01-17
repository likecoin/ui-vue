<template>
  <span :class="rootClass">
    <div
      class="lc-avatar__content"
      :style="contentStyle"
    >
      <div
        class="lc-avatar__content__halo"
        @click="onClickHalo"
      >
        <civic-liker-small-halo
          v-if="isSmall && halo !== 'none'"
        />
        <civic-liker-halo
          v-else-if="isCivicLiker"
        />
        <civic-liker-trial-halo
          v-else-if="isCivicLikerTrial"
        />
      </div>
      <div
        class="lc-avatar__content__image"
        @click="onClick"
      >
        <img v-bind="$attrs">
      </div>
    </div>
  </span>
</template>

<script>
import CivicLikerHalo from "@/assets/avatar/halo/civic-liker.svg?inline";
import CivicLikerSmallHalo from "@/assets/avatar/halo/civic-liker_small.svg?inline";
import CivicLikerTrialHalo from "@/assets/avatar/halo/civic-liker_trial.svg?inline";

const HALO_TYPE = {
  NONE: "none",
  CIVIC_LIKER: "civic-liker",
  CIVIC_LIKER_TRIAL: "civic-liker-trial"
};

const SIZE_TYPE = {
  NORMAL: "normal",
  LARGE: "large"
};

export default {
  name: "lc-avatar",
  components: {
    CivicLikerHalo,
    CivicLikerSmallHalo,
    CivicLikerTrialHalo
  },
  props: {
    size: {
      type: [String, Number],
      default: SIZE_TYPE.NORMAL,
      validator(value) {
        if (!Number.isInteger(parseInt(value, 10))) {
          return SIZE_TYPE[value.toUpperCase()] === value;
        }
        return true;
      }
    },
    halo: {
      type: String,
      default: HALO_TYPE.NONE,
      validator(value) {
        return (
          value === "" ||
          HALO_TYPE[value.toUpperCase().replace(/-/g, "_")] === value
        );
      }
    },
    isFullWidth: {
      type: [Boolean, String],
      default: false
    },
    isClickable: {
      type: [Boolean, String],
      default: false
    },
    isHaloClickable: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    numericSize() {
      const { size } = this;
      const numericSize = parseInt(size, 10);
      if (Number.isInteger(numericSize) && numericSize > 0) {
        return size;
      }
      switch (size) {
        case SIZE_TYPE.LARGE:
          return 128;

        case SIZE_TYPE.NORMAL:
        default:
          return 56;
      }
    },
    rootClass() {
      const hasHalo = this.halo && this.halo !== "none";
      const { name: className } = this.$options;
      const haloClassName = `${className}--with-halo`;
      return [
        className,
        {
          [`${className}--full-width`]: !!this.isFullWidth,
          [`${className}--clickable`]: !!this.isClickable,
          [`${haloClassName} ${haloClassName}--${this.halo}`]: hasHalo,
          [`${haloClassName}--clickable`]: hasHalo && !!this.isHaloClickable
        }
      ];
    },
    contentStyle() {
      let width;
      if (this.isFullWidth) {
        width = "100%";
      } else {
        width = `${this.numericSize}px`;
      }
      return {
        width
      };
    },
    isCivicLiker() {
      return this.halo === HALO_TYPE.CIVIC_LIKER;
    },
    isCivicLikerTrial() {
      return this.halo === HALO_TYPE.CIVIC_LIKER_TRIAL;
    },
    isSmall() {
      return this.numericSize < 64;
    }
  },
  methods: {
    onClick(e) {
      if (this.isClickable) this.$emit("click", e);
    },
    onClickHalo(e) {
      if (this.isHaloClickable) this.$emit("click-halo", e);
    }
  }
};
</script>

<style lang="scss">
$halo-offset: -9.375%; // 12 ÷ 128
$img-border-width: 3.125%; // 4 ÷ 128

.lc-avatar {
  display: inline-block;

  &--full-width {
    display: block;
  }

  &__content {
    position: relative;

    padding-bottom: 100%; // Maintain 1:1 ratio

    box-sizing: border-box;

    &__image {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      overflow: hidden;

      background: linear-gradient(to bottom, #d2f0f0, #f0e6b4);
      border-radius: 50%;

      img {
        position: inherit;
        top: $img-border-width;
        left: $img-border-width;

        display: inherit;

        width: #{100% - $img-border-width * 2};
        height: #{100% - $img-border-width * 2};

        background: white;
        border-radius: inherit;

        object-fit: cover;
        object-position: center;

        user-select: none;
      }

      .lc-avatar--clickable & {
        cursor: pointer;

        &:active img {
          transform: scale(1.01);
        }
      }
    }

    &__halo {
      position: absolute;
      top: $halo-offset;
      left: $halo-offset;
      bottom: $halo-offset;
      right: $halo-offset;

      overflow: hidden;
      border-radius: 50%;

      .lc-avatar--with-halo--clickable & {
        cursor: pointer;

        transition: opacity 200ms ease;

        &:hover {
          opacity: 0.7;
        }
        &:active {
          opacity: 0.9;
          transform: translateY(1px);
        }
      }

      svg {
        width: 100%;
        height: 100%;

        fill: currentColor;

        .lc-avatar--with-halo--civic-liker & {
          color: #40bfa5;
        }

        .lc-avatar--with-halo--civic-liker-trial & {
          color: #eec443;
        }
      }
    }
  }
}
</style>
