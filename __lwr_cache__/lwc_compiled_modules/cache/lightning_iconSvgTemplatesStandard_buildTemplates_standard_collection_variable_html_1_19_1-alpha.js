import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./collection_variable.css";

import _implicitScopedStylesheets from "./collection_variable.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M73.8 20H26.2c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2zm-3 49.3h-.1c0 .8-.8 1.4-1.6 1.4H30.4c-.8 0-1.4-.8-1.4-1.6V30.7c0-.8.8-1.4 1.6-1.4h38.8c.8 0 1.4.8 1.4 1.6v38.4z"${3}/><path d="M58.8 45.6c1.3 0 3.9-1.1 3.9-4.5s-2.5-3.6-3.2-3.6c-1.5 0-3 1.1-4.3 3.4-1.3 2.3-2.8 4.9-2.8 4.9h-.1c-.3-1.6-.6-3-.7-3.6-.3-1.4-1.9-4.5-5.3-4.5s-6.5 2-6.5 2c-.6.4-1 1-1 1.8 0 1.1.9 2.1 2.1 2.1.3 0 .6-.1.9-.2 0 0 2.6-1.4 3.1 0 .2.4.3.9.5 1.4.7 2.2 1.3 4.9 1.8 7.3L45 55.3s-2.5-.9-3.8-.9-3.9 1.1-3.9 4.5 2.5 3.6 3.2 3.6c1.5 0 3-1.1 4.3-3.4 1.3-2.3 2.8-4.9 2.8-4.9.4 2.1.8 3.8 1 4.5.9 2.4 2.8 3.9 5.4 3.9 0 0 2.7 0 5.8-1.8.8-.3 1.3-1.1 1.3-1.9 0-1.1-.9-2.1-2.1-2.1-.3 0-.6.1-.9.2 0 0-2.3 1.3-3 .3-.6-1-1-2.4-1.4-4.2-.3-1.5-.7-3.3-1.1-5.1l2.3-3.3c.1 0 2.6.9 3.9.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1gplbo9scum";
freezeTemplate(tmpl);
