import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_step.css";

import _implicitScopedStylesheets from "./work_step.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M39 32h22a2 2 0 002-2v-4a6 6 0 00-6-6H43a6 6 0 00-6 6v4a2 2 0 002 2z"${3}/><path d="M72 25h-2a.94.94 0 00-1 1v4a8 8 0 01-8 8H39a8 8 0 01-8-8v-4a.94.94 0 00-1-1h-2a6 6 0 00-6 6v43a6 6 0 006 6h44a6 6 0 006-6V31a6 6 0 00-6-6zM57 64a2 2 0 01-2 2H34.9a2 2 0 01-2-2v-2a2 2 0 012-2H55a2 2 0 012 2zm10-10a2 2 0 01-2 2H34.9a2 2 0 01-2-2v-2a2 2 0 012-2H65a2 2 0 012 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6jeqojtn24i";
freezeTemplate(tmpl);
