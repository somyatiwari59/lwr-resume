import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./merge_field.css";

import _implicitScopedStylesheets from "./merge_field.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M16.5 39.9h-.7c-2.3 0-3.2-1.3-3.2-3.5 0-1 .1-1.9.3-2.9.2-1 .3-2 .3-3.1 0-2.6-1.1-4-2.9-4.4 1.8-.5 2.9-1.8 2.9-4.4 0-1.1-.1-2.1-.3-3.1-.2-1-.3-1.9-.3-2.9 0-2.2.8-3.5 3.2-3.5h.7c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1h-3.8c-3.4 0-5.9 1.6-5.9 5.3 0 1.1.2 2.2.3 3.4.2 1.1.3 2.3.3 3.4 0 1.3-.3 2.7-2.5 2.9h-.1c-.6 0-1.1.5-1.1 1.1s.5 1 1.1 1.1H5c2.2.3 2.5 1.8 2.5 2.9 0 1.1-.2 2.2-.3 3.3s-.3 2.2-.3 3.3c0 4.1 2.5 5.5 5.9 5.5h3.8c.6 0 1.1-.5 1.1-1.1-.1-.6-.6-1.1-1.2-1.1zM35.5 39.9h.7c2.3 0 3.2-1.3 3.2-3.5 0-1-.1-1.9-.3-2.9-.2-1-.3-2-.3-3.1 0-2.6 1.1-4 2.9-4.4-1.8-.5-2.9-1.8-2.9-4.4 0-1.1.1-2.1.3-3.1.2-1 .3-1.9.3-2.9 0-2.2-.8-3.5-3.2-3.5h-.7c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h3.8c3.4 0 5.9 1.6 5.9 5.3 0 1.1-.2 2.2-.3 3.4-.2 1.1-.3 2.3-.3 3.4 0 1.3.3 2.7 2.5 2.9h.1c.6 0 1.1.5 1.1 1.1s-.5 1-1.1 1.1H47c-2.2.3-2.5 1.8-2.5 2.9 0 1.1.2 2.2.3 3.3s.3 2.2.3 3.3c0 4.1-2.5 5.5-5.9 5.5h-3.8c-.6 0-1.1-.5-1.1-1.1.1-.6.6-1.1 1.2-1.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-fkhdvecmmo";
freezeTemplate(tmpl);
