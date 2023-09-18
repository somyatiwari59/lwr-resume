import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom51.css";

import _implicitScopedStylesheets from "./custom51.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M40.5 25.6c2.5 1.7 5 5.8 6 8.9.2.7.8 1.2 1.5 1.3.7.2 1.3.2 2 .2 1.1 0 2 0 2.9-.4 2.6-.9 4.8-2 6.699-3.9 3.101-3.1 4.2-7.5 3-11.2-3.699-1.1-8.1-.1-11.199 3-.9.9-1.601 1.9-2.2 3-1.6-2.5-3.5-4.7-5.7-6.1-1.5-.9-3.4-.4-4.3 1.1-.6 1.5 0 3.2 1.3 4.1zM71.2 40.2c-10.3-5.8-12.5 2-21.2 2s-10.9-7.8-21.2-2c-10 5.7-7.1 24.1-3.1 31 3.6 6.1 10.1 12.4 23.4 6.4.5-.199 1.2-.199 1.7 0 13.3 6 19.9-.3 23.4-6.399 4.1-6.901 7-25.401-3-31.001z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2i9ie38sp6b";
freezeTemplate(tmpl);
