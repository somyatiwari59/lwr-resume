import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share.css";

import _implicitScopedStylesheets from "./share.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.5 30h-3c-.8 0-1.5.7-1.5 1.5v11c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5v-21c0-.8.7-1.5 1.5-1.5h4c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V31.5c0-.8-.7-1.5-1.5-1.5zM34 14c-10 0-19.1 8.9-19.9 19.4-.1.8.6 1.6 1.5 1.6h3c.8 0 1.4-.6 1.5-1.3C20.8 26.2 27.2 20 35 20h1.6c.9 0 1.3 1.1.7 1.7l-5.5 5.6c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0L49.6 18c.6-.6.6-1.5 0-2.1L36.1 2.4c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.7 1.5-.1 2.1l5.6 5.6c.6.6.2 1.7-.7 1.7L34 14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3hveamdp077";
freezeTemplate(tmpl);
