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

    <h2 class="demo-section__title">&lt;lc-chop-civic-liker/&gt;</h2>

    <h3 class="demo-section__subtitle">
      :date="new Date()"
    </h3>
    <lc-chop-civic-liker :date="new Date()" />

    <h3 class="demo-section__subtitle">
      is-trial
    </h3>
    <lc-chop-civic-liker is-trial />

    <h2 class="demo-section__title">&lt;lc-chop-trial/&gt;</h2>

    <h3 class="demo-section__subtitle">
      :date="new Date()"
    </h3>
    <lc-chop-trial :date="new Date()" />

    <h2 class="demo-section__title">&lt;lc-chop-approved/&gt;</h2>

    <lc-chop-approved />

    <h3 class="demo-section__subtitle">
      is-trial
    </h3>
    <lc-chop-approved is-trial />

  </section>
</template>

<script>
import LcChopCountdown from "@/components/LcChopCountdown";
import LcChopCivicLiker from "@/components/LcChopCivicLiker";
import LcChopTrial from "@/components/LcChopTrial";
import LcChopApproved from "@/components/LcChopApproved";

export default {
  name: "lc-chop-demo",
  components: {
    LcChopCountdown,
    LcChopCivicLiker,
    LcChopTrial,
    LcChopApproved
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
