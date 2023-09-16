import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./maintenance_work_rule.css";

import _implicitScopedStylesheets from "./maintenance_work_rule.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79.67 49.23l-10-10a1.36 1.36 0 00-1.86 0l-1.86 1.87a1.34 1.34 0 000 1.86L69 46a.89.89 0 01-.09 1.27.87.87 0 01-.53.22H41l16.33-16.25a.89.89 0 011.27.09.87.87 0 01.22.53v4.46a1.18 1.18 0 001.1 1.24h2.71a1.17 1.17 0 001.24-1.09V22a1.17 1.17 0 00-1.1-1.24H48.53a1.36 1.36 0 00-1.24 1.37v2.49a1.18 1.18 0 001.12 1.24H53a.88.88 0 01.86.9.89.89 0 01-.24.58l-20.1 20.03H21.24A1.28 1.28 0 0020 48.69v2.64a1.46 1.46 0 001.36 1.37h12.41l20 20a.9.9 0 01-.1 1.27.85.85 0 01-.52.21h-4.5a1.17 1.17 0 00-1.24 1.1.33.33 0 000 .14v2.49a1.45 1.45 0 001.24 1.37H62.8a1.18 1.18 0 001.2-1.12V63.74a1.18 1.18 0 00-1.12-1.24h-2.7a1.17 1.17 0 00-1.24 1.09v4.61a.88.88 0 01-.89.87.9.9 0 01-.6-.25L41.08 52.7H68.5a.89.89 0 01.62 1.48l-3.22 3.1a1.35 1.35 0 000 1.87L67.76 61a1.34 1.34 0 001.86 0l10-9.92a1.36 1.36 0 00.05-1.85z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7a2gvkflurm";
freezeTemplate(tmpl);
