import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crossfilter.css";

import _implicitScopedStylesheets from "./crossfilter.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M35 9c-1.7 0-3.3.2-4.8.7 1.8 1.5 3.4 3.3 4.7 5.3h.1c6.1 0 11 4.9 11 11s-4.9 11-11 11c-1.5 0-3-.3-4.3-.9.8-1.1 1.5-2.3 2-3.5.2-.5.4-.9.5-1.4.5-1.6.8-3.4.8-5.2 0-9.4-7.6-17-17-17S0 16.6 0 26s7.6 17 17 17c1.7 0 3.3-.2 4.8-.7-1.8-1.5-3.4-3.3-4.7-5.3H17c-6.1 0-11-4.9-11-11s4.9-11 11-11c1.5 0 3 .3 4.4.9C19.3 18.7 18 22.2 18 26c0 9.4 7.6 17 17 17s17-7.6 17-17S44.4 9 35 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-61kr6bqmosg";
freezeTemplate(tmpl);
