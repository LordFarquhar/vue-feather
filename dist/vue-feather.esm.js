/*! vue-feather v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */
import { defineComponent, h } from 'vue';
import * as feather from 'feather-icons';

var script = defineComponent({
    name: 'VueFeather',
    props: {
        animation: {
            type: String,
            default: undefined,
        },
        animationSpeed: {
            type: String,
            default: undefined,
        },
        fill: {
            type: String,
            default: 'none',
        },
        size: {
            type: [Number, String],
            default: 24,
        },
        stroke: {
            type: String,
            default: 'currentColor',
        },
        strokeLinecap: {
            type: String,
            default: 'round',
        },
        strokeLinejoin: {
            type: String,
            default: 'round',
        },
        strokeWidth: {
            type: [Number, String],
            default: 2,
        },
        tag: {
            type: String,
            default: 'i',
        },
        type: {
            type: String,
            default: 'feather',
            validator(type) {
                if (!feather) {
                    throw new Error('The Feather icons is required.');
                }
                if (!feather.icons[type]) {
                    throw new Error(`"${type}" is not an available icon type.`);
                }
                return true;
            },
        },
    },
    computed: {
        isRemSize() {
            return typeof this.size === 'string' && this.size.endsWith('rem');
        },
    },
    render() {
        const { animation, animationSpeed, isRemSize, size, type, } = this;
        const icon = feather.icons[type];
        return h(this.tag, {
            ...this.$attrs,
            'data-name': type,
            'data-tags': icon.tags,
            'data-type': type,
            class: {
                'vue-feather': true,
                [`vue-feather--${type}`]: type,
                [`vue-feather--${animation}`]: animation,
                [`vue-feather--${animationSpeed}`]: animationSpeed,
            },
            style: isRemSize ? {
                height: size,
                width: size,
            } : undefined,
        }, [
            h('svg', 
            // XXX: The `width` and `height` attributes do not support the `rem` unit in Safari (#13).
            {
                ...icon.attrs,
                fill: this.fill,
                height: isRemSize ? undefined : size,
                stroke: this.stroke,
                'stroke-linecap': this.strokeLinecap,
                'stroke-linejoin': this.strokeLinejoin,
                'stroke-width': this.strokeWidth,
                width: isRemSize ? undefined : size,
                class: [icon.attrs.class, 'vue-feather__content'],
                innerHTML: icon.contents,
            }),
        ]);
    },
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@keyframes vue-feather--spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.vue-feather{display:inline-block}.vue-feather--spin{animation:vue-feather--spin 2s linear infinite}.vue-feather--pulse{animation:vue-feather--spin 2s steps(8) infinite}.vue-feather--slow{animation-duration:3s}.vue-feather--fast{animation-duration:1s}.vue-feather__content{display:block;height:inherit;width:inherit}";
styleInject(css_248z);

export { script as default };
