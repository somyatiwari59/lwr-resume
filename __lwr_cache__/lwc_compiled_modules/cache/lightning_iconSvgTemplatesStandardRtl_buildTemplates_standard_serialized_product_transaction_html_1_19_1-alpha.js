import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./serialized_product_transaction.css";

import _implicitScopedStylesheets from "./serialized_product_transaction.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26.1 36.1H73a2.65 2.65 0 002.6-2.6V22.6A2.65 2.65 0 0073 20H26.1a2.65 2.65 0 00-2.6 2.6v10.9a2.65 2.65 0 002.6 2.6zm23.4-12.6a4.35 4.35 0 11-4.3 4.4 4.35 4.35 0 014.3-4.4zM26.1 54.3H73a2.61 2.61 0 002.6-2.7V40.9a2.65 2.65 0 00-2.6-2.6H26.1a2.61 2.61 0 00-2.6 2.7v10.6a2.67 2.67 0 002.6 2.7zm25.2-8a4.35 4.35 0 110 .1zm-13 0a4.35 4.35 0 110 .1zM76.2 71.3l-.8-.8-6.4-6.4a.85.85 0 00-1.3 0l-1.3 1.3a.91.91 0 00-.3.7 1.08 1.08 0 00.3.7l2.2 2.3a.59.59 0 01.1.7.68.68 0 01-.6.4h-7.5a1 1 0 00-1 .9V73a1.06 1.06 0 001 .9h7.6a.82.82 0 01.6.4.88.88 0 01-.1.7l-2.2 2.3a.85.85 0 000 1.3l1.3 1.3a.85.85 0 001.3 0l7.2-7.1a1.2 1.2 0 00-.1-1.5z"${3}/><path d="M63.7 67.5a3.19 3.19 0 01-.3-1.4 3.63 3.63 0 011.1-2.6l1.3-1.3a3.47 3.47 0 014.9-.2c.1 0 .1.1.2.2l4.7 4.9v-8a2.61 2.61 0 00-2.6-2.7H26.1a2.61 2.61 0 00-2.6 2.7v10.6a2.67 2.67 0 002.6 2.7H57v-1.5a3.61 3.61 0 013.6-3.4zm-22.9-3.2a4.36 4.36 0 110-.1zm13 0a4.44 4.44 0 01-4.3 4.5 4.53 4.53 0 01-4.6-4.3 4.46 4.46 0 014.3-4.6 4.53 4.53 0 014.6 4.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4l6ht35o2t";
freezeTemplate(tmpl);
