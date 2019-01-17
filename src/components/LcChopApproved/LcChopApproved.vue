<template>
  <lc-chop-simple
    :class="$options.name"
    v-bind="$attrs"
    text="APPROVED"
  />
</template>

<script>
import LcChopSimple from "@/components/LcChopSimple";
import deprecated from "@/mixins/deprecated";

export default {
  name: "lc-chop-approved",
  components: {
    LcChopSimple
  },
  mixins: [deprecated]
};
</script>
