<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="$options.name"
    :viewBox="viewBox"
  >
    <path :d="path" />
  </svg>
</template>


<script>
import SvgPath from "svgpath";

import CHAR from "./char";

export default {
  name: "lc-chop-font",
  props: {
    text: {
      type: String,
      default: ""
    },
    letterSpacing: {
      type: Number,
      default: 2.2
    }
  },
  data() {
    return {
      path: "",
      viewBox: "0"
    };
  },
  created() {
    this.setSVGProps();
  },
  watch: {
    text() {
      this.setSVGProps();
    },
    letterSpacing() {
      this.setSVGProps();
    }
  },
  methods: {
    setSVGProps() {
      let width = 0;
      let path = "";

      this.text.split("").forEach((s, index) => {
        const char = CHAR[s];
        if (!char) return;
        if (index !== 0) width += this.letterSpacing;
        path += new SvgPath(char.d).translate(width).toString();
        width += char.width;
      });

      this.viewBox = `0 0 ${width.toFixed(1)} 10`;
      this.path = new SvgPath(path)
        .rel()
        .round(1)
        .toString();
    }
  }
};
</script>
