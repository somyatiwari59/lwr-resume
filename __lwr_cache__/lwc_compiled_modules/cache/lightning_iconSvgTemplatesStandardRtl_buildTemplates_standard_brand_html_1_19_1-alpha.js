import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./brand.css";

import _implicitScopedStylesheets from "./brand.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79.4 39.1C76.5 27.2 64 20 50.2 20 33.5 20 20 33.4 20 50s13.5 30 30.3 30c23.2 0 21.4-11.8 14-16.4-4.4-2.8-6.8-9.1-2.4-13.6 8.1-8.4 21.2 5 17.5-10.9zM33.7 60c-3.5 0-6.3-2.8-6.3-6.2s2.8-6.2 6.3-6.2 6.2 2.8 6.2 6.2-2.7 6.2-6.2 6.2zM35 36.2c0-3.5 2.8-6.2 6.2-6.2 3.5 0 6.2 2.8 6.2 6.2s-2.8 6.2-6.2 6.2c-3.5.1-6.2-2.6-6.2-6.2zm13.7 36.3c-3.5 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2c3.5 0 6.2 2.8 6.2 6.2s-2.7 6.2-6.2 6.2zM60 40c-3.5 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2c3.5 0 6.2 2.8 6.2 6.2S63.5 40 60 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ed18fqfgl3";
freezeTemplate(tmpl);
