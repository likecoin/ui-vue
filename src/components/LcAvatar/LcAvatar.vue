<template>
  <span :class="rootClass">
    <div
      class="lc-avatar__content"
      :style="contentStyle"
    >
      <img :src="src" />
      <div class="lc-avatar__content__halo">
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
    src: {
      type: String,
      default: ""
    },
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
      return [
        "lc-avatar",
        {
          "lc-avatar--full-width": !!this.isFullWidth,
          [`lc-avatar--with-halo lc-avatar--with-halo--${this.halo}`]:
            this.halo && this.halo !== "none"
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
  }
};
</script>

<style lang="scss">
$halo-offset: -7.815%;
$img-border-width: 3.125%;

.lc-avatar {
  display: inline-block;

  &--full-width {
    display: block;
  }

  &__content {
    position: relative;

    padding-bottom: 100%; // Maintain 1:1 ratio

    border-radius: 50%;

    box-sizing: border-box;

    background: linear-gradient(to bottom, #d2f0f0, #f0e6b4);

    img {
      position: absolute;
      top: $img-border-width;
      left: $img-border-width;

      display: block;

      width: #{100% - $img-border-width * 2};
      height: #{100% - $img-border-width * 2};

      border-radius: inherit;

      object-fit: cover;
      user-select: none;
    }

    &__halo {
      position: absolute;
      top: $halo-offset;
      left: $halo-offset;
      bottom: $halo-offset;
      right: $halo-offset;

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
