import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_transaction_envelope_item.css";

import _implicitScopedStylesheets from "./crypto_transaction_envelope_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M53.2 20.86a6.386 6.386 0 00-6.41 0L26.36 32.65a6.426 6.426 0 00-3.21 5.55v23.59c0 2.29 1.22 4.41 3.21 5.55l20.43 11.79a6.386 6.386 0 006.41 0l20.43-11.79a6.426 6.426 0 003.21-5.55V38.2c0-2.29-1.22-4.41-3.21-5.55L53.2 20.86zm-14 36.95l6.99-7.19c.53-.52.09-1.21-.82-1.21h-4.11c0-4.32 4.29-8.66 8.66-8.66v-5.19a13.64 13.64 0 00-9.89 3.97c-1.3 1.29-2.32 2.83-3.01 4.53a13.6 13.6 0 00-1 5.35h-4.25c-.87 0-1.31.77-.78 1.21l6.99 7.19c.18.12.39.19.61.19s.43-.07.61-.19zm24.74-7.23h4.28c.88 0 1.32-.77.79-1.21l-7.08-7.18a1.036 1.036 0 00-1.22 0l-6.99 7.18c-.53.52-.13 1.21.78 1.21h4.23c0 5.2-3.63 8.66-8.86 8.66v5.19a13.766 13.766 0 009.94-3.97c1.31-1.29 2.35-2.83 3.06-4.52s1.07-3.52 1.06-5.35z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2hhg23tgtea";
freezeTemplate(tmpl);
