import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./resource_capacity.css";

import _implicitScopedStylesheets from "./resource_capacity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M37.9 25c-6.7 0-12.1 5.5-12.1 12.2s5.4 12.1 12.1 12.1S50 43.8 50 37.2 44.6 25 37.9 25zm8.5 13.4h-8.8v-9.3s3.3-.2 6.3 2.9 2.5 6.4 2.5 6.4z"${3}/><path d="M22.2 37.3c0-2.7.9-5.9 2.3-8.3 1.7-3 3.6-4.2 5.1-6.5 2.5-3.7 3-9.1 1.4-13.1-1.6-4.1-5.4-6.5-9.9-6.4-4.4.1-8.1 2.8-9.5 7-1.6 4.5-.9 10 2.7 13.4 1.5 1.4 2.9 3.6 2.1 5.8-.7 2-3.1 2.9-4.8 3.7-3.9 1.7-8.7 4.1-9.5 8.8-.8 3.8 1.8 7.8 5.9 7.8h17.1c.8 0 1.3-1 .8-1.6-2.3-3-3.7-6.7-3.7-10.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2276oaadsms";
freezeTemplate(tmpl);
