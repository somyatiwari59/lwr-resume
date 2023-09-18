import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./fulfillment_order.css";

import _implicitScopedStylesheets from "./fulfillment_order.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M24.3 36.5c.7 0 1.4.1 2 .3L15.5 6.2l-1-3c-.3-.9-1.2-1.3-2-1L3.1 5.3c-.9.3-1.3 1.2-1 2l1 3c.3.9 1.2 1.3 2 1L10 9.7l9.9 28.1c1.3-.8 2.8-1.3 4.4-1.3zM41.2 29.2l-9.9 3.5c-1 .4-2.2-.2-2.5-1.2l-3.5-9.9c-.4-1 .2-2.2 1.2-2.5l9.9-3.5c1-.4 2.2.2 2.5 1.2l3.5 9.9c.4 1-.2 2.1-1.2 2.5zM31.8 12.9l-6.7 2.3c-1 .4-2.2-.2-2.5-1.2l-2.3-6.7c-.4-1 .2-2.2 1.2-2.5l6.7-2.3c1-.4 2.2.2 2.5 1.2l2.3 6.7c.4.9-.1 2.1-1.2 2.5zM49.9 35.5l-1-3c-.3-.9-1.2-1.3-2-1l-18.2 6.3c1.9 1.2 3.2 3.2 3.6 5.5L49 37.6c.8-.3 1.2-1.2.9-2.1zM24.3 39.1c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-3.1-2.5-5.5-5.5-5.5z"${3}/></g></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-24lscs9smcd";
freezeTemplate(tmpl);
