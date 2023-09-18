import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom111.css";

import _implicitScopedStylesheets from "./custom111.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g fill-rule="evenodd"${3}><path d="M53.373 45.053c-.06 0-.093 0-.12-.06-2.306-.993-5.7-3.66-10.74-4.566 1.287-1.334 2.28-3.507 3.267-6.087.573-1.473.48-2.733.48-4.533 0-1.334.24-3.447-.093-4.62-1.107-4-3.9-5.074-7.2-5.074-3.3 0-6.12 1.114-7.234 5.074-.326 1.166-.06 3.3-.06 4.62 0 1.8-.093 3.06.48 4.56 1.02 2.553 2 4.713 3.24 6.086-4.98.934-8.373 3.54-10.666 4.534C20.047 47.12 20 49.4 20 49.4v7.593h23.653a20.1 20.1 0 019.72-11.94zM62.827 70.46a7.767 7.767 0 117.766-7.793 7.773 7.773 0 01-7.766 7.793zM80 64.547v-3.88l-.54-.18-4.2-1.334-1.107-2.666 2.127-4.527-2.76-2.76-.513.267-3.9 2-2.667-1.114-1.68-4.706h-3.947l-.146.486-1.38 4.167-2.667 1.113L52 49.28l-2.733 2.76.266.513 2 3.927-1.113 2.667-4.707 1.68v3.9l.54.18 4.174 1.38 1.113 2.666-2.207 4.6 2.76 2.76.507-.266 3.933-2L59.2 75.16l1.68 4.707h3.9l.18-.54 1.38-4.167 2.667-1.113 4.533 2.126 2.76-2.76-.267-.506-2-3.9 1.107-2.667L80 64.547z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-k49q5cc8vq";
freezeTemplate(tmpl);
