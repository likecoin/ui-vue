<template>
  <div class="lc-loading-indicator">
    <div>
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script>
export default {
  name: "lc-loading-indicator"
};
</script>

<style lang="scss">
$circle-size: 1em;
$circle-padding: 0;
$duration: 1.5s;
$steps: 3;

.lc-loading-indicator {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: inline-block;

  height: $circle-size;
  width: $circle-size * $steps;
  margin: 10px;

  pointer-events: none;

  > div {
    position: absolute;
    top: calc((100% - #{$circle-size}) / 2);
    left: calc((100% - #{($circle-size + $circle-padding) * $steps}) / 2);

    > div {
      position: absolute;
      top: 0;

      width: $circle-size;
      height: $circle-size;
      border-radius: $circle-size / 2;
      background-color: currentColor;

      animation: circle-move $duration infinite;

      @for $i from 2 through $steps {
        &:nth-child(#{$i}) {
          animation-delay: $duration * -($i - 1) / $steps;
        }
      }
    }
  }
}

@keyframes circle-move {
  @for $i from 0 through $steps {
    #{$i * 100% / $steps} {
      left: ($circle-size + $circle-padding) * if($i == $steps, 0, $i);
      transform: scale(if($i == 0 or $i >= $steps - 1, 0.5, 1));
      z-index: if($i == 0 or $i >= $steps - 1, 0, 1);
    }
  }
}
</style>
