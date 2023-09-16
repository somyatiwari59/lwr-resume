import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./forecasts.css";

import _implicitScopedStylesheets from "./forecasts.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M77.7 29.2S74.2 22 66.4 22s-11.5 7.4-11.5 7.4c-5.2-2.5-9.9 0-9.9 0S41.4 22 33.6 22s-11.3 7.2-11.3 7.2-7.3 16.3-7.5 30.9C14.6 74.5 24.3 78 28.9 78c5 0 16.8-2.1 16.2-18.5 0 0 1.2-2.8 4.5-2.7 4 0 5.4 2.7 5.4 2.7C54.4 75.9 66.2 78 71.1 78c4.5 0 14.3-3.5 14.1-17.9-.2-14.6-7.5-30.9-7.5-30.9zM29.8 71.6c-4.8 0-8.7-3.9-8.7-8.7s3.9-8.7 8.7-8.7 8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7zm40.4 0c-4.8 0-8.7-3.9-8.7-8.7s3.9-8.7 8.7-8.7 8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-502thje2t0l";
freezeTemplate(tmpl);
