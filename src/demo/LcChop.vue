<template>
  <section id="lc-chop" class="demo-section">

    <h2 class="demo-section__title">&lt;lc-chop-countdown/&gt;</h2>

    <h3 class="demo-section__subtitle">
      days="9"
    </h3>
    <lc-chop-countdown days="9" />
    <lc-chop-countdown days="14" />
    <lc-chop-countdown days="27" />
    <lc-chop-countdown days="38" />
    <lc-chop-countdown days="65" />

    <h3 class="demo-section__subtitle">
      :date="date"
    </h3>
    <lc-chop-countdown :date="date" />

    <h3 class="demo-section__subtitle">
      size="200"
    </h3>
    <lc-chop-countdown days="99" size="200" />

  </section>
</template>

<script>
import LcChopCountdown from "@/components/LcChopCountdown";

export default {
  name: "lc-chop-demo",
  components: {
    LcChopCountdown
  },
  data() {
    const date = new Date();
    date.setDate(date.getDate() + 32);
    return {
      date
    };
  }
};
</script>
