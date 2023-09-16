import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./indicator_performance_period.css";

import _implicitScopedStylesheets from "./indicator_performance_period.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M80 46.4l-1.41-2.12-4.11 1.77c-5.31-8.55-15.03-14.82-25.17-14.82C34.25 31.23 20 45.11 20 59.81v.9l.06 1.2h7.2l-.09-1.2c-.01-.29-.01-.58 0-.87 0-11.88 9.93-21.57 22.14-21.57 7.72-.03 14.91 3.95 18.99 10.5l-14.07 6.11a8.236 8.236 0 00-9.03-.99c-1.89.93-3.32 2.6-3.96 4.61-.64 2.01-.43 4.19.57 6.05 2.14 3.88 6.98 5.36 10.92 3.33a7.839 7.839 0 004.29-7.8l13.05-7.76c.93 2.4 1.41 4.96 1.41 7.53v.87l-.09 1.2h7.2l.06-1.2c.02-.3.02-.6 0-.9a25.43 25.43 0 00-2.68-11.02l4.02-2.4z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1aoam23t1bg";
freezeTemplate(tmpl);