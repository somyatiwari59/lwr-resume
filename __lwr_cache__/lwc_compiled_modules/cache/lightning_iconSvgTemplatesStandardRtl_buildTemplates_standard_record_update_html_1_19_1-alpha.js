import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_update.css";

import _implicitScopedStylesheets from "./record_update.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M68.4 27.1c.1 0 .1 0 0 0"${3}/><g${3}><path d="M39 32h22c1.1 0 2-.9 2-2v-4c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v4c0 1.1.9 2 2 2z"${3}/><path d="M72 25h-2c-.6 0-1 .4-1 1v4c0 4.4-3.6 8-8 8H39c-4.4 0-8-3.6-8-8v-4c0-.6-.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V31c0-3.3-2.7-6-6-6zM60 55.5l-16 16h.1l-7 2c-.7.2-1.3-.5-1.1-1.2l2-6.9 16-16c.2-.2.6-.2.9 0l5.1 5.3c.2.2.2.6 0 .8zm4.6-4.6l-2 2c-.2.2-.6.2-.9 0l-5.2-5.2c-.2-.2-.2-.6 0-.9l2-2c.9-1 2.4-1 3.4 0l2.6 2.6c1.1 1 1.1 2.5.1 3.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-7um8ehj0f2o";
freezeTemplate(tmpl);
