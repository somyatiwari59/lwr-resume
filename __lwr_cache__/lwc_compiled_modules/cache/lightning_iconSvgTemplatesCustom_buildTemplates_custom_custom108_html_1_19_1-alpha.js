import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom108.css";

import _implicitScopedStylesheets from "./custom108.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g fill-rule="evenodd"${3}><path d="M47.9 60.35l.42-2.82 3.96-2.73-.87-3.72h-.54l-4.2-.33-1.62-2.28.93-4.8-3.12-2.01-.39.39-3.15 2.79-2.7-.42-2.64-4.08-3.57.9v.57l-.3 4.29-2.22 1.68-4.68-.99-1.92 3.27.36.42 2.7 3.27-.39 2.82-3.96 2.7.87 3.69.54.06 4.14.33 1.65 2.25-.96 4.8 3.15 1.98.42-.36 3.15-2.82 2.7.42 2.61 4.08 3.6-.9v-.6l.27-4.2 2.22-1.68 4.62.99 1.92-3.27-.36-.42-2.64-3.24v-.03zm-5.49.66a7.2 7.2 0 01-10.08 2.55 7.8 7.8 0 01-2.49-10.44 7.2 7.2 0 0110.08-2.58 7.8 7.8 0 012.49 10.47z"${3}/><path d="M75.65 46.28l.42-2.82 3.93-2.7-.87-3.69h-.54l-4.14-.33-1.65-2.34.93-4.8-3.15-1.98-.42.36-3.15 2.79-2.7-.42-2.58-4.08-3.6.9-.06.6L57.8 32l-2.22 1.68-4.62-.96-1.92 3.27.36.45 2.7 3.27-.42 2.82-3.93 2.67.87 3.72h.54l4.14.33 1.62 2.31-.96 4.8 3.15 2.04.42-.36 3.15-2.82 2.7.42 2.61 4.08 3.57-.9.03-.57.3-4.29 2.22-1.68 4.65.96 1.92-3.27-.36-.42-2.67-3.27zm-5.52.66a7.2 7.2 0 01-10.08 2.55 7.752 7.752 0 01-2.46-10.44 7.2 7.2 0 0110.08-2.58 7.8 7.8 0 012.46 10.47z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6b3sn7j066j";
freezeTemplate(tmpl);
