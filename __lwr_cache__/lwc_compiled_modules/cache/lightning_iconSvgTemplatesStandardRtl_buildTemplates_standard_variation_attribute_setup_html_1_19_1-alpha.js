import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./variation_attribute_setup.css";

import _implicitScopedStylesheets from "./variation_attribute_setup.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46.8 23.1a1.66 1.66 0 00-1.8 1.7V52a1.53 1.53 0 001.7 1.7h.1a1.58 1.58 0 001.7-1.7V24.7a1.55 1.55 0 00-1.7-1.6zM29.3 23.1h-6.7a1.58 1.58 0 00-1.7 1.7V52a1.63 1.63 0 001.7 1.7h6.7A1.58 1.58 0 0031 52V24.7a1.66 1.66 0 00-1.7-1.6zM38.8 23.1h-1.7a1.58 1.58 0 00-1.7 1.7V52a1.53 1.53 0 001.7 1.7h1.7a1.58 1.58 0 001.7-1.7V24.7a1.55 1.55 0 00-1.7-1.6zM71.9 48.1v.2l.1.8a2.09 2.09 0 01.6.4l.9-.5.7-.3.6-.2V24.7a1.58 1.58 0 00-1.7-1.7h-3.4a1.58 1.58 0 00-1.7 1.7v19a5.82 5.82 0 013.9 4.4zM56.6 49l.6.2a4.35 4.35 0 01.7-.4l.1-.7v-.2a6 6 0 015-4.6V24.7a1.66 1.66 0 00-1.7-1.6h-6.7a1.58 1.58 0 00-1.7 1.7v24a6.75 6.75 0 011.4-.2 5.76 5.76 0 012.3.4zM75.5 64.3a14.92 14.92 0 00.2-2.1 14.92 14.92 0 00-.2-2.1l2.3-1.9a2.12 2.12 0 00.5-2.6l-1-1.8a2.23 2.23 0 00-1.8-1c-.2 0-.5.1-.7.1L72 54a10.27 10.27 0 00-3.6-2.1l-.5-2.9a2 2 0 00-2.1-1.5h-2a2.08 2.08 0 00-2.1 1.5l-.5 2.8a10.46 10.46 0 00-3.7 2.1l-2.7-1.1a1.48 1.48 0 00-.7-.1 2.23 2.23 0 00-1.8 1l-1 1.7a2 2 0 00.5 2.6l2.3 1.9a14.92 14.92 0 00-.2 2.1 14.92 14.92 0 00.2 2.1l-2.3 2a2.12 2.12 0 00-.5 2.6l1 1.9a2.23 2.23 0 001.8 1c.2 0 .5-.1.7-.1l2.8-1.1a10.27 10.27 0 003.6 2.1l.5 3a2.06 2.06 0 002.1 1.7h2a2.14 2.14 0 002.1-1.7l.5-3a10 10 0 003.8-2.3l2.6 1.1a1.7 1.7 0 00.7.1 2.23 2.23 0 001.8-1l.9-1.6a2 2 0 00-.4-2.6zm-10.6 4.9a6.8 6.8 0 116.8-6.8 6.81 6.81 0 01-6.8 6.8z"${3}/><path d="M64.8 58.7a3.7 3.7 0 103.7 3.7 3.7 3.7 0 00-3.7-3.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-280ujd9rjt";
freezeTemplate(tmpl);
