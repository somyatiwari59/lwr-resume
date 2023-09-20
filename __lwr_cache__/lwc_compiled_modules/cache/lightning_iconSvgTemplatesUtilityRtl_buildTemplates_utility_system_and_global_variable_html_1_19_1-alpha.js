import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./system_and_global_variable.css";

import _implicitScopedStylesheets from "./system_and_global_variable.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M25 46.5c0-3 1.4-5.2 3.4-6.5v-3c-1-.7-1.8-1.8-2.2-3-.4-1.7.2-3.6 1.2-5 .2-.3.6-.6.9-1 .3-.3.7-.6 1.1-.7 2.1-1.1 4.5-1.9 6.9-1.9 2.2 0 4.1.9 5.4 2.2 1.9-1.9 3.9-2.3 5.1-2.3 1.1 0 2.2.2 3.1.7v-.2C50 12.8 39.2 2 26 2S2 12.8 2 26s10.7 24 23.8 24c-.5-1-.8-2.1-.8-3.5zm20-22.9h-6.3C38.5 18 37.2 13 35.3 9.2c5.3 3 8.9 8.3 9.7 14.4zM28.4 7.9c2.7 2.3 5.1 8.2 5.5 15.8h-5.5V7.9zM7 28.4h6.3c.2 5.7 1.5 10.6 3.4 14.4-5.3-2.9-8.9-8.2-9.7-14.4zm6.3-4.8H7c.8-6.2 4.5-11.4 9.8-14.4-2 3.8-3.2 8.8-3.5 14.4zm10.3 20.6c-2.7-2.3-5.1-8.2-5.5-15.8h5.5v15.8zm0-20.6h-5.5c.4-7.5 2.8-13.4 5.5-15.8v15.8z"${3}/><path d="M46.4 36c1 0 3.1-.9 3.1-3.6s-2-2.9-2.6-2.9c-1.2 0-2.4.9-3.4 2.7-1.1 1.8-2.3 3.9-2.3 3.9h-.1c-.2-1.3-.5-2.4-.6-2.9-.2-1.1-1.5-3.6-4.2-3.6s-5.2 1.6-5.2 1.6c-.5.3-.8.8-.8 1.4 0 .9.7 1.7 1.7 1.7.2 0 .5-.1.7-.2 0 0 2.1-1.1 2.5 0 .2.3.2.7.4 1.1.6 1.8 1 3.9 1.4 5.8l-1.8 2.5s-2-.7-3-.7-3.1.9-3.1 3.6 2 2.9 2.6 2.9c1.2 0 2.4-.9 3.4-2.7 1-1.8 2.2-3.9 2.2-3.9.3 1.7.6 3 .8 3.6.7 1.9 2.2 3.1 4.3 3.1 0 0 2.2 0 4.6-1.4.6-.2 1-.9 1-1.5 0-.9-.7-1.7-1.7-1.7-.2 0-.5.1-.7.2 0 0-1.8 1-2.4.2-.5-.8-.8-1.9-1.1-3.4-.2-1.2-.6-2.6-.9-4.1l1.8-2.6c.4.1 2.4.9 3.4.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-53vmq89t6st";
freezeTemplate(tmpl);