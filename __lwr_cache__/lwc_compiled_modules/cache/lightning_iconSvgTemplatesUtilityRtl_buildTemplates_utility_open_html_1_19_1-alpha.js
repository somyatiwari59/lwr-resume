import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./open.css";

import _implicitScopedStylesheets from "./open.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M8 35v-.6.6z"${3}/><g${3}><path d="M46 2H6C3.8 2 2 3.8 2 6v36c0 2.2 1.8 4 4 4h12c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1H9.5c-.8 0-1.5-.7-1.5-1.5v-25c0-.8.7-1.5 1.5-1.5h33c.8 0 1.5.7 1.5 1.5v25c0 .8-.7 1.5-1.5 1.5H34c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h12c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4z"${3}/><path d="M37.5 34.6l2.1-2.1c.6-.6.6-1.5 0-2.1L27 17.8c-.6-.6-1.5-.6-2.1 0L12.4 30.3c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0l4.6-4.6c.6-.6 1.8-.2 1.8.7v17.9c0 .8.6 1.5 1.4 1.5h3c.8 0 1.6-.7 1.6-1.5V30.6c0-.9 1-1.3 1.7-.7l4.6 4.7c.6.5 1.6.5 2.2 0z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3ah8u3mamp9";
freezeTemplate(tmpl);