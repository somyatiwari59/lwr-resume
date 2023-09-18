import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom66.css";

import _implicitScopedStylesheets from "./new_custom66.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M48.6 30.3L37 18.6c-1.8-1.8-4.8-1.8-6.6 0L18.6 30.3c-1.8 1.8-1.8 4.8 0 6.6l11.7 11.7c1.8 1.8 4.8 1.8 6.6 0l11.7-11.7c1.9-1.7 1.9-4.8 0-6.6zm-22 5.3c-1.1 1.1-2.9 1.1-3.9 0-1.1-1.1-1.1-2.9 0-3.9 1.1-1.1 2.9-1.1 3.9 0s1 2.8 0 3.9zm9 9.1c-1.1 1.1-2.9 1.1-3.9 0-1.1-1.1-1.1-2.9 0-3.9 1.1-1.1 2.9-1.1 3.9 0 1 1 1 2.8 0 3.9zm0-18.1c-1.1 1.1-2.9 1.1-3.9 0-1.1-1.1-1.1-2.9 0-3.9 1.1-1.1 2.9-1.1 3.9 0 1 1 1 2.8 0 3.9zm9 9c-1.1 1.1-2.9 1.1-3.9 0-1.1-1.1-1.1-2.9 0-3.9 1.1-1.1 2.9-1.1 3.9 0 1.2 1.1 1.2 2.8 0 3.9zM28.4 12.8v-6c0-2.6-2.2-4.8-4.8-4.8H6.8C4.2 2 2 4.2 2 6.8v16.8c0 2.6 2.2 4.8 4.8 4.8h6c.5 0 1-.2 1.3-.6.2-.3.6-.6.9-1L26.8 15c.3-.3.6-.6 1-.9.4-.3.6-.8.6-1.3zM8.8 24.4c-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm6.4-6.4c-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm6.4-6.4c-1.5 0-2.8-1.3-2.8-2.8S20.1 6 21.6 6c1.5 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3v2lmv7d3hv";
freezeTemplate(tmpl);
