import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom50.css";

import _implicitScopedStylesheets from "./custom50.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M76.6 56.3C74.3 57.4 71.7 58 69 58c-3.3 0-6.3-.9-9-2.4a.912.912 0 00-1 0c-2.6 1.6-5.7 2.4-9 2.4s-6.3-.9-9-2.4a.912.912 0 00-1 0c-2.6 1.6-5.7 2.4-9 2.4-2.7 0-5.3-.6-7.6-1.7-.6-.3-1.4.2-1.4.9v12.1c0 2.4 1.4 4.5 3.6 5.5 5 2.2 10.4 3.8 16.1 4.601 1.2.199 2.3-.801 2.3-2v-7.5c0-3.301 2.7-5.9 5.9-5.9h.1c3.3 0 5.9 2.7 5.9 5.9v7.5c0 1.199 1.1 2.1 2.3 2 5.6-.801 11-2.4 16.1-4.601 2.2-1 3.601-3.1 3.601-5.5V57.2c.099-.7-.701-1.2-1.301-.9zM31 52c3.6 0 6.7-1.5 8.7-3.9.4-.5 1.1-.5 1.5 0 2 2.4 5.2 3.9 8.7 3.9 3.6 0 6.7-1.5 8.7-3.9.4-.5 1.101-.5 1.5 0 2 2.4 5.2 3.9 8.7 3.9 5.601 0 10.3-3.9 10.9-8.8.1-.7-.2-1.4-.8-1.8l-25.3-20c-2.199-1.7-5.3-1.7-7.399 0l-25.5 20c-.6.4-.8 1.1-.8 1.8C20.7 48.2 25.4 52 31 52z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-ktnfs4aude";
freezeTemplate(tmpl);