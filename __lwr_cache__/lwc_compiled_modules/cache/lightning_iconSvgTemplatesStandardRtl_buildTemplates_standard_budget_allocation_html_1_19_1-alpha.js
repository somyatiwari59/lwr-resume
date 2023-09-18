import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./budget_allocation.css";

import _implicitScopedStylesheets from "./budget_allocation.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M62 20H38a.89.89 0 00-.87.88v2.91a.89.89 0 00.87.88h24a.9.9 0 00.87-.88v-2.91A.9.9 0 0062 20zM43.29 27H38a.89.89 0 00-.87.88v1.74a.89.89 0 00.87.88h5.25a.9.9 0 00.88-.88v-1.74a.9.9 0 00-.84-.88zM52.62 27h-5.24a.9.9 0 00-.88.88v1.74a.9.9 0 00.88.88h5.24a.9.9 0 00.88-.88v-1.74a.9.9 0 00-.88-.88zM62 27h-5.29a.9.9 0 00-.88.88v1.74a.9.9 0 00.88.88H62a.9.9 0 00.87-.88v-1.74A.9.9 0 0062 27zM43.29 32.83H38a.89.89 0 00-.87.88v1.75a.89.89 0 00.87.87h5.25a.9.9 0 00.88-.87v-1.75a.9.9 0 00-.84-.88zM52.62 32.83h-5.24a.9.9 0 00-.88.88v1.75a.9.9 0 00.88.87h5.24a.9.9 0 00.88-.87v-1.75a.9.9 0 00-.88-.88zM62 32.83h-5.29a.9.9 0 00-.88.88v1.75a.9.9 0 00.88.87H62a.9.9 0 00.87-.87v-1.75a.9.9 0 00-.87-.88zM43.29 38.67H38a.89.89 0 00-.87.87v1.75a.89.89 0 00.87.88h5.25a.9.9 0 00.88-.88v-1.75a.9.9 0 00-.84-.87zM52.62 38.67h-5.24a.9.9 0 00-.88.87v1.75a.9.9 0 00.88.88h5.24a.9.9 0 00.88-.88v-1.75a.9.9 0 00-.88-.87zM62 38.67h-5.29a.9.9 0 00-.88.87v1.75a.9.9 0 00.88.88H62a.9.9 0 00.87-.88v-1.75a.9.9 0 00-.87-.87zM43.29 44.5H38a.89.89 0 00-.87.88v1.75A.89.89 0 0038 48h5.25a.9.9 0 00.88-.87v-1.75a.9.9 0 00-.84-.88zM52.62 44.5h-5.24a.9.9 0 00-.88.88v1.75a.9.9 0 00.88.87h5.24a.9.9 0 00.88-.87v-1.75a.9.9 0 00-.88-.88zM62 44.5h-5.29a.9.9 0 00-.88.88v1.75a.9.9 0 00.88.87H62a.9.9 0 00.87-.87v-1.75a.9.9 0 00-.87-.88zM75.11 57.45H51.5v-5.32a1.5 1.5 0 10-3 0v5.32H24.89a1.5 1.5 0 00-1.5 1.5v7.86a1.5 1.5 0 003 0v-6.36H48.5v5.16a1.5 1.5 0 003 0v-5.16h22.11v6.36a1.5 1.5 0 003 0V59a1.5 1.5 0 00-1.5-1.55z"${3}/><circle cx="24.89" cy="74.71" r="4.89"${3}/><circle cx="49.82" cy="74.71" r="4.89"${3}/><circle cx="75.11" cy="74.71" r="4.89"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7t6fabhftmr";
freezeTemplate(tmpl);
