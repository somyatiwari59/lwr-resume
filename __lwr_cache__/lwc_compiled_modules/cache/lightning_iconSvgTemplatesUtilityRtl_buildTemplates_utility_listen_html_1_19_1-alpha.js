import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./listen.css";

import _implicitScopedStylesheets from "./listen.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50.6 30.2C50.6 15.8 39.7 4 26.2 4S1.7 15.8 1.7 30.2c0 3.4.6 6.8 1.8 10 1.4 3.9 4.9 6.7 9.1 6.8 1.2 0 2.2-1 2.2-2.2V32.3c0-1.2-1-2.2-2.2-2.2-2.2 0-4.3.8-5.9 2-.1-.7-.1-1.3-.1-2 0-11.8 8.8-21.3 19.6-21.3s19.6 9.6 19.6 21.3c0 .7 0 1.4-.1 2-1.6-1.3-3.6-2.1-5.9-2.1-1.2 0-2.2 1-2.2 2.2v12.4c0 1.2 1 2.2 2.2 2.2 2.4 0 4.9-.9 6.5-2.7 1.7-1.8 2.5-3.8 3.2-6.2.7-2.4 1.1-5 1.1-7.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-72gcamhhjq9";
freezeTemplate(tmpl);
