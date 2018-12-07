<template>
  <span class="lc-chop lc-chop-approved" :style="rootStyle">
    <div class="lc-chop__content" :style="contentStyle">
      <chop />
    </div>
  </span>
</template>

<script>
import Chop from "@/assets/chop/approved.svg?inline";
import chopMixin from "@/mixins/lc-chop";

export default {
  name: "lc-chop-approved",
  components: {
    Chop
  },
  mixins: [
    chopMixin({
      defaultSize: 244,
      contentWiggleRotateZ: 8
    })
  ]
};
</script>

<style lang="scss">
.lc-chop-approved {
  height: 0.3em;

  color: #8c293c;
}
</style>
