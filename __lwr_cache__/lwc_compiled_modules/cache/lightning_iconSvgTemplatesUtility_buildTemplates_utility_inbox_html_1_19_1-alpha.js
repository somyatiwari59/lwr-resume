import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./inbox.css";

import _implicitScopedStylesheets from "./inbox.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 8c0-2.2-1.8-4-4-4H6C3.8 4 2 5.8 2 8v36c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V8zM19 35c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v4zm0-10c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v4zm0-10c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v4zm25 26c0 .6-.4 1-1 1H24c-.6 0-1-.4-1-1V11c0-.6.4-1 1-1h19c.6 0 1 .4 1 1v30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-32r1t00u534";
freezeTemplate(tmpl);
