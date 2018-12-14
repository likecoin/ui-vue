<template>
  <span class="lc-avatar">
    <div
      class="lc-avatar__content"
      :style="contentStyle"
    >
      <img :src="src" />
      <div class="lc-avatar__content__halo">
        <civic-liker-small-halo
          v-if="isCivicLiker && isSmall"
        />
        <civic-liker-halo
          v-else-if="isCivicLiker"
        />
        <civic-liker-trial-small-halo
          v-else-if="isCivicLikerBeta && isSmall"
        />
        <civic-liker-trial-halo
          v-else-if="isCivicLikerBeta"
        />
      </div>
    </div>
  </span>
</template>

<script>
import CivicLikerHalo from "@/assets/avatar/halo/civic-liker.svg?inline";
import CivicLikerSmallHalo from "@/assets/avatar/halo/civic-liker_small.svg?inline";
import CivicLikerTrialHalo from "@/assets/avatar/halo/civic-liker_trial.svg?inline";
import CivicLikerTrialSmallHalo from "@/assets/avatar/halo/civic-liker_trial_small.svg?inline";

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
    CivicLikerTrialHalo,
    CivicLikerTrialSmallHalo
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
        return HALO_TYPE[value.toUpperCase().replace(/-/g, "_")] === value;
      }
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
    contentStyle() {
      const width = `${this.numericSize}px`;
      return {
        width,
        height: width
      };
    },
    isCivicLiker() {
      return this.halo === HALO_TYPE.CIVIC_LIKER;
    },
    isCivicLikerBeta() {
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

  &__content {
    position: relative;

    padding: $img-border-width;

    border-radius: 50%;

    box-sizing: border-box;

    background: linear-gradient(to bottom, #d2f0f0, #f0e6b4);

    img {
      display: block;

      width: 100%;
      height: 100%;

      border-radius: inherit;

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
      }
    }
  }
}
</style>
