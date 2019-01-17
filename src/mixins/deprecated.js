export default {
  created() {
    // eslint-disable-next-line no-console
    console.warn(
      `[ui-vue] <${this.$options.name}/> will be removed in future release.`
    );
  }
};
