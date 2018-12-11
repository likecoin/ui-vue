const LikeCoinUI = {
  install(Vue, options = {}) {
    // Register components
    if (options.components) {
      for (const key in options.components) {
        const component = options.components[key];
        if (component) {
          Vue.component(key, component);
        }
      }
    }
  }
};

export default LikeCoinUI;
