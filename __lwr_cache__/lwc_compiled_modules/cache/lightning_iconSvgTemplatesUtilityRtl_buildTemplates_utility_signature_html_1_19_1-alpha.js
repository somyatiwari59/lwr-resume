import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./signature.css";

import _implicitScopedStylesheets from "./signature.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.31 9.28a1.25 1.25 0 00-.82-.37 1.08 1.08 0 00-.81.37l-1 1a.35.35 0 000 .45l2.56 2.57a.48.48 0 00.24.07.31.31 0 00.2-.07l1-1a1.18 1.18 0 000-1.65l-.09-.08zM44.86 11.55a.4.4 0 00-.24-.07.25.25 0 00-.2.07L34.18 21.73l-1 3.39a.47.47 0 00.29.59h.25l3.4-1 10.25-10.17a.3.3 0 000-.4z"${3}/><path d="M49.11 16.3l-4.57 4.54v15.7a1.64 1.64 0 01-1.64 1.64H8.54a1.64 1.64 0 01-1.64-1.64V17.72a1.64 1.64 0 011.64-1.64h27.82l4.91-4.91H6.9A4.91 4.91 0 002 16.08v22.1a4.91 4.91 0 004.9 4.91h37.64a4.91 4.91 0 004.91-4.91V15.89a2.64 2.64 0 01-.34.41z"${3}/><path d="M29.94 26.37c-.77.45-1.49.94-2.26 1.35A3.13 3.13 0 0127 28a.17.17 0 000-.1 3.32 3.32 0 00-3.83-2.73h-.13a47.41 47.41 0 00-5.46 1.73 46.8 46.8 0 01-5.69 1.41 1.55 1.55 0 00-1.07 1.89 1.57 1.57 0 001.88 1.08 48.77 48.77 0 005.69-1.42c.93-.29 1.86-.61 2.79-.91l1.63-.53a4.59 4.59 0 011-.28c.09 0 .11.18.17.3.16.38.27.77.47 1.14a2.68 2.68 0 002.24 1.51c1.83.1 3.37-1.23 4.91-2.06 1.62-.97.07-3.62-1.66-2.66z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4jdu4a4g8mu";
freezeTemplate(tmpl);
