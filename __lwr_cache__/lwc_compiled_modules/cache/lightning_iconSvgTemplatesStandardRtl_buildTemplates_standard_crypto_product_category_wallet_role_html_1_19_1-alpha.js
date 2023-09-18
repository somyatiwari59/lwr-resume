import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_product_category_wallet_role.css";

import _implicitScopedStylesheets from "./crypto_product_category_wallet_role.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46.79 20.96a6.423 6.423 0 016.43 0l6.56 3.79a6.425 6.425 0 013.21 5.57v7.58c0 2.3-1.23 4.42-3.21 5.57l-6.56 3.79a6.423 6.423 0 01-6.43 0l-6.56-3.79a6.425 6.425 0 01-3.21-5.57v-7.58c0-2.3 1.23-4.42 3.21-5.57l6.56-3.79z"${3}/><path d="M33.3 39.19h-6.87c-3.55 0-6.43 2.88-6.43 6.43v27.86c0 3.55 2.88 6.43 6.43 6.43h47.14c3.55 0 6.43-2.88 6.43-6.43v-15c0-3.55-2.88-6.43-6.43-6.43H29.64c-1.78 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21h6.9l-.03-.02a6.425 6.425 0 01-3.21-5.57v-.84zm18.46 28.58c.43.14 1.15.29 1.73.29 4.03.29 7.19-2.73 7.05-6.76 0-.43-.14-1.15-.29-1.73 0-.29-.43-.29-.58-.14l-3.6 3.6c-.29.29-.72.29-1.01 0l-2.44-2.44c-.29-.14-.29-.72 0-.86l3.74-3.6c.14-.29.14-.58-.14-.58-.43-.14-1.15-.29-1.73-.29-3.74 0-6.76 3.45-6.47 7.19 0 .61.1 1.02.23 1.48l.06.24-8.2 8.2c-.86 1.15-.86 2.73 0 3.6.43.58 1.01.72 1.73.72.43 0 1.15-.14 1.73-.72l8.2-8.2z" fill-rule="evenodd"${3}/><path d="M63.16 45.62h10.41c0-3.55-2.88-6.43-6.43-6.43h-.44v.68a6.43 6.43 0 01-3.42 5.68l-.12.06z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-6lipb34elb2";
freezeTemplate(tmpl);
