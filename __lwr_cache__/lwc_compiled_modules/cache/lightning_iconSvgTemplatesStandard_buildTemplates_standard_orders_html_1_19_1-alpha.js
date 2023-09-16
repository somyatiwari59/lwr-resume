import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./orders.css";

import _implicitScopedStylesheets from "./orders.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78.8 62.1l-3.6-1.7c-.5-.3-1.2-.3-1.7 0L52 70.6c-1.2.6-2.7.6-3.9 0L26.5 60.4c-.5-.3-1.2-.3-1.7 0l-3.6 1.7c-1.6.8-1.6 2.9 0 3.7L48 78.5c1.2.6 2.7.6 3.9 0l26.8-12.7c1.7-.8 1.7-3 .1-3.7z"${3}/><path d="M78.8 48.1l-3.7-1.7c-.5-.3-1.2-.3-1.7 0L52 56.6c-1.2.6-2.7.6-3.9 0L26.6 46.4c-.5-.3-1.2-.3-1.7 0l-3.7 1.7c-1.6.8-1.6 2.9 0 3.7L48 64.6c1.2.6 2.7.6 3.9 0l26.8-12.7c1.7-.8 1.7-3 .1-3.8z"${3}/><path d="M21.2 37.8L48 50.5c1.2.6 2.7.6 3.9 0l26.8-12.7c1.6-.8 1.6-2.9 0-3.7L51.9 21.4c-1.2-.6-2.7-.6-3.9 0L21.2 34.2c-1.6.7-1.6 2.9 0 3.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6j35mfn5ctt";
freezeTemplate(tmpl);
