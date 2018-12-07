import { wiggleValue } from "@/utils";

export default function({
  defaultSize = 0,
  contentWiggleRotateZ = 0,
  valueWiggleRotateZ = 0
}) {
  return {
    props: {
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
