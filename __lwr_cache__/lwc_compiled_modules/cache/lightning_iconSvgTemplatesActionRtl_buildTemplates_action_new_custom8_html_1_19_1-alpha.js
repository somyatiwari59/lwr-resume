import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom8.css";

import _implicitScopedStylesheets from "./new_custom8.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M23.7 3L4.8 23.8c-1.1 1.2-1.1 3.1 0 4.3L23.7 49c1.3 1.4 3.4 1.4 4.6 0l18.9-20.8c1.1-1.2 1.1-3.1 0-4.3L28.3 3c-1.2-1.3-3.4-1.3-4.6 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7dpdr9drduj";
freezeTemplate(tmpl);
