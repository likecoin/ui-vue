<template>
  <span :class="$options.name">
    <input
      v-model="text"
      :style="style"
    >
    <span ref="fakeText">{{ text || "&nbsp;" }}</span>
  </span>
</template>

<script>
export default {
  name: "lc-dynamic-input",
  props: {
    value: {
      type: String,
      default: ""
    },
    filter: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      text: this.value,
      style: { width: 0 }
    };
  },
  watch: {
    value(value) {
      this.text = value;
    },
    text(value) {
      this.text = this.filter ? this.filter(value) : value;
      this.$emit("update:value", this.text);
      this.$nextTick(() => {
        this.updateStyle();
      });
    }
  },
  mounted() {
    this.updateStyle();
  },
  methods: {
    updateStyle() {
      this.style = {
        width: `${this.$refs.fakeText.clientWidth + 1}px`
      };
    }
  }
};
</script>

<style lang="scss">
.lc-dynamic-input {
  * {
    padding: 0;
    border: none;

    color: inherit;
    caret-color: currentColor;

    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  input:focus {
    outline: none;
  }

  > span {
    position: fixed;
    top: 100%;
    left: 100%;

    color: transparent;

    pointer-events: none;
  }
}
</style>
