import * as components from "./components";

import "./assets/css/index.scss";

const LikeCoinUI = {
  install(Vue) {
    Object.values(components).forEach(component => {
      Vue.component(component.name, component);
    });
  }
};

export default LikeCoinUI;
