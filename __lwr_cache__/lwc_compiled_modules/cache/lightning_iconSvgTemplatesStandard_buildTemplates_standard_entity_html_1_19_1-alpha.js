import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entity.css";

import _implicitScopedStylesheets from "./entity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74.4 28.7c0-4.8-10.9-8.7-24.4-8.7s-24.4 3.9-24.4 8.7v3c0 4.8 10.9 8.7 24.4 8.7s24.4-3.9 24.4-8.7v-3zm-48.8 10c0 3.8 10.9 6.8 24.4 6.8s24.4-3 24.4-6.8v6.2c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.9-24.4-8.7v-6.2zm0 0c0 3.8 10.9 6.8 24.4 6.8s24.4-3 24.4-6.8v6.2c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.9-24.4-8.7v-6.2zm0 13.2c0 3.8 10.9 6.8 24.4 6.8s24.4-3 24.4-6.8V58c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.8-24.4-8.5v-6.3zm0 13.3c0 3.8 11 6.8 24.4 6.8s24.4-3 24.4-6.8v6.2c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.9-24.4-8.7v-6.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3vr3jrug487";
freezeTemplate(tmpl);