import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./javascript_button.css";

import _implicitScopedStylesheets from "./javascript_button.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M63 36h10.6c.8 0 1.4-.6 1.4-1.4 0-.4-.1-.7-.4-1L61.4 20.4c-.3-.3-.6-.4-1-.4-.8 0-1.4.6-1.4 1.4V32c0 2.2 1.8 4 4 4z"${3}/><path d="M73 42H59c-3.3 0-6-2.7-6-6V22c0-1.1-.9-2-2-2H31c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h38c3.3 0 6-2.7 6-6V44c0-1.1-.9-2-2-2zM37.8 66.3c0 2.9-1.4 3.9-3.6 3.9l-1.7-.2.3-1.8 1.2.2c1 0 1.6-.4 1.6-2v-6.5h2.2v6.4zm4.3 3.7c-1 0-2-.2-2.9-.6l.6-1.8c.8.4 1.6.6 2.5.6 1 0 1.6-.4 1.6-1.1s-.5-1-1.7-1.4c-1.2-.4-2.8-1.5-2.8-3s1.4-3 3.8-3c.9 0 1.8.1 2.6.5l-.5 1.8c-.7-.3-1.4-.5-2.1-.5-1 0-1.5.5-1.5 1s.6.9 1.9 1.4 2.6 1.6 2.6 3-1.3 3.1-4.1 3.1z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-sbn4qnr9lo";
freezeTemplate(tmpl);