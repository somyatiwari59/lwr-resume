import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./socialshare.css";

import _implicitScopedStylesheets from "./socialshare.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M40.9 32c-2.6 0-4.9 1.1-6.5 2.8l-14.6-7.3c.1-.5.1-1 .1-1.6 0-.5-.1-1.1-.1-1.6L34.4 17c1.6 1.8 4 2.9 6.6 2.9 5 0 9-4 9-9s-4-9-9-9-9 4-9 9v.6l-15.1 7.6c-1.7-1.3-3.7-2.1-6-2.1-5 0-9 4-9 9s4 9 9 9c2.3 0 4.3-.8 5.9-2.2l15.1 7.5v.7c0 5 4 9 9 9s9-4 9-9-4-9-9-9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7hgg3oldclo";
freezeTemplate(tmpl);
