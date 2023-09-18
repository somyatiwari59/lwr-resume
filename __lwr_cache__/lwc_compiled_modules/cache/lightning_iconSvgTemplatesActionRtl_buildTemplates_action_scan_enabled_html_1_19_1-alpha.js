import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./scan_enabled.css";

import _implicitScopedStylesheets from "./scan_enabled.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.5 32a1.61 1.61 0 011.5 1.5v8.85Q50 47 45.5 47h-9a1.55 1.55 0 010-3.1h8.25c1.66 0 2.25-.61 2.25-2.32V33.5a1.61 1.61 0 011.5-1.5zm-45 0A1.61 1.61 0 015 33.5v8.08c0 1.71.59 2.32 2.25 2.32h8.25a1.55 1.55 0 010 3.1h-9Q2 47 2 42.35V33.5A1.61 1.61 0 013.5 32zm16.67-18c.73 0 1.33.45 1.33 1v22c0 .55-.6 1-1.33 1h-3.34c-.73 0-1.33-.45-1.33-1V15c0-.55.6-1 1.33-1h3.34zm-8.67 0a1 1 0 011 1v22a1 1 0 01-1 1h-1a1 1 0 01-1-1V15a1 1 0 011-1h1zm15 0a1 1 0 011 1v22a1 1 0 01-1 1h-1a1 1 0 01-1-1V15a1 1 0 011-1h1zm15 0a1 1 0 011 1v22a1 1 0 01-1 1h-1a1 1 0 01-1-1V15a1 1 0 011-1h1zm-6.33 0c.73 0 1.33.45 1.33 1v22c0 .55-.6 1-1.33 1h-3.34c-.73 0-1.33-.45-1.33-1V15c0-.55.6-1 1.33-1h3.34zM45.5 5Q50 5 50 9.65v8.85a1.5 1.5 0 01-3 0v-8.08c0-1.71-.59-2.32-2.25-2.32H36.5a1.55 1.55 0 010-3.1h9zm-30 0a1.55 1.55 0 010 3.1H7.25C5.59 8.1 5 8.71 5 10.42v8.08A1.61 1.61 0 013.5 20 1.61 1.61 0 012 18.5V9.65Q2 5 6.5 5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-25j7fbqvq8q";
freezeTemplate(tmpl);
