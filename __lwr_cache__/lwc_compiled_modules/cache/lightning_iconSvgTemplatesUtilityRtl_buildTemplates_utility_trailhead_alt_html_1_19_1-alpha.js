import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./trailhead_alt.css";

import _implicitScopedStylesheets from "./trailhead_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M22.21 36.21a2.72 2.72 0 01-.11.25 6.89 6.89 0 002.42 7.85c1.58 1.24 1.89 1.76 1.73 2.92a7.59 7.59 0 01-1.1 2.77A44.87 44.87 0 012 42.64v-3.7c0-.93 0-1.83.1-2.73h20.11zm27.69 0c.05.9.1 1.8.1 2.73v3.69a45 45 0 01-20.31 7.2 10 10 0 00.54-2c.53-3.73-1.83-5.57-3.24-6.67a2.83 2.83 0 01-1.12-3.25 8.24 8.24 0 01.89-1.67H49.9zM22.5 19.59l4.4 6.47-4.16 6.13h-8.8zM26 2a39.25 39.25 0 0123.48 30.19H43.6l-8.77-12.9a2.08 2.08 0 00-3.33 0l-2.17 3.19-5.17-7.6a2.09 2.09 0 00-3.33 0L9.08 32.19H2.52A39.25 39.25 0 0126 2zm7.17 22l5.56 8.19H27.61z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-gh5pfpg3ta";
freezeTemplate(tmpl);
