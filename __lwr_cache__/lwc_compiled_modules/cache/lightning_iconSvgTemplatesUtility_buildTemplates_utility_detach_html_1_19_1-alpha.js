import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./detach.css";

import _implicitScopedStylesheets from "./detach.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M16.55 33.84a1.42 1.42 0 001.93 0l9.2-9.2a1.86 1.86 0 012.57 0 1.91 1.91 0 010 2.76L18.94 38.53a6.5 6.5 0 01-9.1 0l-.09-.09a6.49 6.49 0 010-9.11l20-19.95a6.5 6.5 0 019.1 0l.1.09a6.5 6.5 0 010 9.1l-.1.1a1.26 1.26 0 00-.18 1.65 14.17 14.17 0 011.29 3.22.94.94 0 001.56.46c.74-.74 1.38-1.47 1.38-1.47a12 12 0 000-17h-.18a12 12 0 00-17 0L5.7 25.38a12 12 0 000 17l.19.18a11.92 11.92 0 0016.91 0l11.41-11.3a7.48 7.48 0 10-10.76-10.39l-9 9a1.44 1.44 0 000 2l2.11 1.93zM45.31 41.63l4.23-4.23a.89.89 0 000-1.29L47 33.54a.89.89 0 00-1.29 0l-4.14 4.32-3.95-4a.89.89 0 00-1.29 0l-2.58 2.57a.91.91 0 000 1.29l4 3.95-3.86 3.87a.88.88 0 000 1.28l2.57 2.58a.89.89 0 001.29 0l3.86-3.86 4.14 4.13a.89.89 0 001.29 0l2.57-2.57a.89.89 0 000-1.29z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1hrrmb03ril";
freezeTemplate(tmpl);
