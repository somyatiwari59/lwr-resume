import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./password.css";

import _implicitScopedStylesheets from "./password.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74 80H26c-3.3 0-6-2.7-6-6V26c0-3.3 2.7-6 6-6h48c3.3 0 6 2.7 6 6v48c0 3.3-2.7 6-6 6zM28.1 30v40c0 1.1.9 2 2 2H70c1.1 0 2-.9 2-2V30c0-1.1-.9-2-2-2H30.1c-1.1 0-2 .9-2 2z"${3}/><path d="M66.3 47.3l-1.2-3.8c-.3-1-1.5-1.6-2.5-1.3L53.9 45v-8.6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2V45l-8.5-2.8c-1-.3-2.2.3-2.5 1.3l-1.2 3.8c-.3 1 .3 2.2 1.3 2.5l7.9 2.6-5.7 7.8c-.6.9-.4 2.2.5 2.8l3.3 2.3c.9.6 2.2.4 2.8-.5l6.3-8.7 6.3 8.7c.6.9 1.9 1.1 2.8.5l3.3-2.3c.9-.6 1.1-1.9.5-2.8l-5.7-7.9 7.8-2.5c.9-.4 1.5-1.5 1.2-2.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6rc2af11t92";
freezeTemplate(tmpl);
