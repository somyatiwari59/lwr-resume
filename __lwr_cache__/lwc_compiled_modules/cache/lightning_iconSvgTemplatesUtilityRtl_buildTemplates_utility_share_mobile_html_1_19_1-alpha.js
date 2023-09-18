import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_mobile.css";

import _implicitScopedStylesheets from "./share_mobile.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M41.957 50.438c2.2 0 4-1.799 4-4V19.512c0-2.2-1.8-4-4-4h-7.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h4c.801 0 1.5.7 1.5 1.501v19.924c0 .799-.699 1.5-1.5 1.5H13.465c-.8 0-1.5-.701-1.5-1.5V23.013c0-.801.7-1.501 1.5-1.501h4c.8 0 1.5-.699 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-7.5c-2.2 0-4 1.8-4 4v26.925c0 2.198 1.8 4 4 4h31.992v.001z"${3}/><path d="M28.952 30.898V11.487h5.899c1 0 1.5-.9.899-1.4l-9-8.3c-.399-.3-1-.3-1.399 0l-9 8.3c-.601.6-.101 1.4.899 1.4h5.7v19.412c0 .802.7 1.602 1.5 1.602h3c.802-.001 1.502-.801 1.502-1.603z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-1h7431d80d0";
freezeTemplate(tmpl);
