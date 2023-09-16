import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./solution.css";

import _implicitScopedStylesheets from "./solution.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M47.6 20.1c-9.8 1.1-17.7 8.8-18.5 18.4-.6 7 2.5 13.4 7.5 17.5 1.5 1.2 2.4 3 2.4 4.9v.1c0 2.8 2.3 5.1 5.2 5.1h11.6c2.9 0 5.2-2.3 5.2-5.1v-.1c0-1.9.9-3.7 2.4-4.9C68 52.2 71 46.6 71 40.3c0-12-10.7-21.5-23.4-20.2zM59 72H41c-1.1 0-2 .9-2 2 0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6 0-1.1-.9-2-2-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5qm05mte8od";
freezeTemplate(tmpl);
