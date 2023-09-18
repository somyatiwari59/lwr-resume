import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./people.css";

import _implicitScopedStylesheets from "./people.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M42 22.3c-2.8-1.1-3.2-2.2-3.2-3.3s.8-2.2 1.8-3c1.7-1.4 2.6-3.5 2.6-5.8 0-4.4-2.9-8.2-8-8.2-4.7 0-7.5 3.2-7.9 7.1 0 .4.2.7.5.9 3.8 2.4 6.1 6.6 6.1 11.7 0 3.8-1.5 7.2-4.2 9.6-.2.2-.2.6 0 .8.7.5 2.3 1.2 3.3 1.7.3.1.5.2.8.2h12.1c2.3 0 4.1-1.9 4.1-4v-.6c0-3.5-3.8-5.4-8-7.1z"${3}/><path d="M28.6 36.2c-3.4-1.4-3.9-2.6-3.9-3.9 0-1.3 1-2.6 2.1-3.6 2-1.7 3.1-4.1 3.1-6.9 0-5.2-3.4-9.7-9.6-9.7-6.1 0-9.6 4.5-9.6 9.7 0 2.8 1.1 5.2 3.1 6.9 1.1 1 2.1 2.3 2.1 3.6 0 1.3-.5 2.6-4 3.9-5 2-9.9 4.3-9.9 8.5V46c0 2.2 1.8 4 4.1 4h27.7c2.3 0 4.2-1.8 4.2-4v-1.4c0-4.1-4.4-6.4-9.4-8.4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3n8vm4cpnbs";
freezeTemplate(tmpl);
