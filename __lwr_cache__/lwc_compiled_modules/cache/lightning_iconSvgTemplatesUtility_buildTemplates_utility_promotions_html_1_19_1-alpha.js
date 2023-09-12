import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotions.css";

import _implicitScopedStylesheets from "./promotions.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M33.39 28.66a3.12 3.12 0 103.15 3.13 3.13 3.13 0 00-3.11-3.13zM18.52 17.08a3.12 3.12 0 103.12 3.13 3.12 3.12 0 00-3.12-3.13z"${3}/><path d="M48.77 22.84l-2.61-3.13a5.61 5.61 0 01-1.31-3.24l-.3-4a5.13 5.13 0 00-4.69-4.78l-3.49-.28a7.36 7.36 0 01-4.2-1.79l-2.65-2.33a5.15 5.15 0 00-6.7-.06l-2.88 2.43a6.64 6.64 0 01-3.79 1.54l-3.74.26a5.14 5.14 0 00-4.78 4.7l-.27 3.41a7.49 7.49 0 01-1.8 4.24l-2.29 2.64a5.14 5.14 0 00-.06 6.69l2.49 3a6.21 6.21 0 011.42 3.56l.28 3.85a5.14 5.14 0 004.69 4.78l3.5.31a7.23 7.23 0 014.18 1.78l2.66 2.3a5.17 5.17 0 006.7.05l3.05-2.55a5.9 5.9 0 013.4-1.36l4-.29a5.13 5.13 0 004.78-4.69l.29-3.24a8.14 8.14 0 012-4.64l2.13-2.43a5.12 5.12 0 00-.01-6.73zm-36-2.63A5.8 5.8 0 1118.55 26a5.79 5.79 0 01-5.82-5.79zm8.39 17.11a.46.46 0 01-.35.23h-1.73a.44.44 0 01-.37-.22.42.42 0 010-.43l12.12-22.25a.51.51 0 01.36-.22H33a.44.44 0 01.21.59zm18.13-5.54A5.81 5.81 0 1133.44 26a5.79 5.79 0 015.77 5.82z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4bna9edv0bb";
freezeTemplate(tmpl);
