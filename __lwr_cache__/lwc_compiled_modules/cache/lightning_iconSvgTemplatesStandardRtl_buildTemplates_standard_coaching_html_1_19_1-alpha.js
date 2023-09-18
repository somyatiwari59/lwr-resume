import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./coaching.css";

import _implicitScopedStylesheets from "./coaching.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M47 53c-1.3 0-2.6.5-3.5 1.5-1.9 1.9-1.9 5.1 0 7.1.9.9 2.2 1.5 3.5 1.5 1.3 0 2.6-.5 3.5-1.5 1.9-1.9 1.9-5.1 0-7.1-.9-1-2.2-1.5-3.5-1.5z"${3}/><path d="M79.6 30.6l-6.8-9.8c-.6-.9-1.8-1.1-2.7-.6L36.7 40.9c-3.2 1.9-6 4.7-7.8 8.9-1.8 4.3-2.2 8.9-1.1 13.2-4.3.4-7.8 4-7.8 8.5 0 4.7 3.8 8.5 8.5 8.5 3.5 0 6.5-2.1 7.8-5.1 7.7 4.9 18.1 4 24.9-2.8 6.1-6.1 7.4-15.2 4-22.7-1.2-2.6-.5-5.8 1.9-7.5l12.1-8.6c.8-.5 1-1.8.4-2.7zM28.5 74c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm26.3-8.2C52.7 67.9 49.9 69 47 69c-2.9 0-5.7-1.1-7.8-3.2-4.3-4.3-4.3-11.3 0-15.6C41.3 48.1 44 47 47 47c2.9 0 5.7 1.1 7.8 3.2 4.3 4.3 4.3 11.3 0 15.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-27popbjr6cb";
freezeTemplate(tmpl);
