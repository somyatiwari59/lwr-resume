import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./spinner.css";

import _implicitScopedStylesheets from "./spinner.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M16 27.5v-3c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5zM17.9 32c-.6-.6-1.5-.6-2.1 0L8 39.8c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0l7.8-7.8c.6-.6.6-1.5 0-2.1L17.9 32zM34.1 20c.6.6 1.5.6 2.1 0l7.8-7.8c.6-.6.6-1.5 0-2.1L41.9 8c-.6-.6-1.5-.6-2.1 0L32 15.7c-.6.6-.6 1.5 0 2.1l2.1 2.2zM12.2 8c-.6-.6-1.5-.6-2.1 0L8 10.1c-.6.6-.6 1.5 0 2.1l7.8 7.8c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1L12.2 8zM36.3 32c-.6-.6-1.5-.6-2.1 0L32 34.1c-.6.6-.6 1.5 0 2.1l7.8 7.8c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1L36.3 32zM27.5 36h-3c-.8 0-1.5.7-1.5 1.5v11c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5zM48.5 23h-11c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM27.5 2h-3c-.8 0-1.5.7-1.5 1.5v11c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-68shrndo7u0";
freezeTemplate(tmpl);
