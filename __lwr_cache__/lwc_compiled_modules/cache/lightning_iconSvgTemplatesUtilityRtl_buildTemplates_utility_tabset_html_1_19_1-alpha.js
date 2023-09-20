import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tabset.css";

import _implicitScopedStylesheets from "./tabset.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M31.6 2H20.4c-.7 0-1.2.6-1.2 1.3v2.5c0 .7.6 1.3 1.2 1.3h11.2c.7 0 1.2-.6 1.2-1.3V3.3c.1-.7-.5-1.3-1.2-1.3zM48.7 2H37.5c-.7 0-1.3.6-1.3 1.3v2.5c0 .7.6 1.3 1.3 1.3h11.2c.7-.1 1.3-.6 1.3-1.3V3.3c0-.7-.6-1.3-1.3-1.3z"${3}/><path d="M48.7 10.4H17c-.7 0-1.3-.6-1.3-1.3V3.3c0-.7-.6-1.3-1.3-1.3H3.3C2.6 2 2 2.6 2 3.3v45.5c0 .6.6 1.2 1.3 1.2H48.7c.7 0 1.3-.6 1.3-1.3v-37c0-.7-.6-1.3-1.3-1.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-60enk2bqglc";
freezeTemplate(tmpl);