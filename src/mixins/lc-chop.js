import { wiggleValue } from "@/utils";

const EXTRA_PROPS = {
  date: {
    type: Date,
    default: undefined
  },
  isBeta: {
    type: [Boolean, String],
    default: false
  },
  isTrial: {
    type: [Boolean, String],
    default: false
  },
  isTrialling: {
    type: [Boolean, String],
    default: false
  }
};

export default function({
  className,
  defaultSize = 0,
  contentWiggleRotateZ = 0,
  valueWiggleRotateZ = 0,
  props: extraProps = []
}) {
  const props = {};
  const computed = {};

  extraProps.forEach(key => {
    if (EXTRA_PROPS[key]) {
      props[key] = EXTRA_PROPS[key];

      switch (key) {
        case "date":
          computed.dateValue = function() {
            const { date } = this;
            if (date) {
              const d = date.getDate();
              const m = date.getMonth() + 1;
              const y = date.getFullYear();
              return `${d < 10 ? "0" : ""}${d}.${m < 10 ? "0" : ""}${m}.${y}`;
            }
            return null;
          };
          break;

        default:
          break;
      }
    }
  });

  return {
    props: {
      ...props,
      size: {
        type: [Number, String],
        default: defaultSize,
        validator(value) {
          const v = parseFloat(value, 10);
          return !Number.isNaN(v) && v >= 0;
        }
      },
      rotateZ: {
        type: [Number, String],
        default: 0,
        validator(value) {
          const v = parseFloat(value, 10);
          return !Number.isNaN(v);
        }
      }
    },
    computed: {
      ...computed,
      mixinClass() {
        return [
          "lc-chop",
          className,
          {
            [`${className}--beta`]: !!this.isBeta,
            [`${className}--trial`]: !!this.isTrial,
            [`${className}--trialling`]: !!this.isTrialling
          }
        ];
      },
      rootClass() {
        return this.mixinClass;
      },
      rootStyle() {
        return {
          fontSize: `${this.size}px`
        };
      },
      contentStyle() {
        const value = wiggleValue(this.rotateZ, contentWiggleRotateZ);
        return {
          transform: `rotateZ(${value}deg)`
        };
      },
      valueStyle() {
        const value = wiggleValue(0, valueWiggleRotateZ);
        return {
          transform: `rotateZ(${value}deg)`
        };
      }
    }
  };
}
