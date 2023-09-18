import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./visualforce_page.css";

import _implicitScopedStylesheets from "./visualforce_page.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M55.4 53.6c-.6 0-1.2-.5-1.2-1.2v-7.3c0-.6.5-1.2 1.2-1.2h7.5c.6 0 1.2.5 1.2 1.2v7.3c0 .6-.5 1.2-1.2 1.2h-7.5zM58.6 57.9l-4.3 4.7c-.3.3-.3.7 0 1l4.3 4.7c.3.3.8.3 1.1 0l4.3-4.7c.3-.3.3-.7 0-1l-4.3-4.7c-.3-.3-.8-.3-1.1 0z"${3}/><path d="M36.4 45.6l3.8-2.2c.3-.2.8-.2 1.1 0l3.8 2.2c.3.2.6.6.6 1v4.3c0 .4-.2.8-.6 1l-3.8 2.2c-.3.2-.8.2-1.1 0l-3.8-2.2c-.3-.2-.6-.6-.6-1v-4.3c0-.4.2-.8.6-1z"${3}/><path d="M73.8 20H26.2c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2zm0 51.7c0 1.2-.9 2.1-2.1 2.1H28.3c-1.1 0-2.1-.9-2.1-2.1V38.2h47.6v33.5zm0-39.5H26.2v-3.9c0-1.2.9-2.1 2.1-2.1h43.4c1.1 0 2.1.9 2.1 2.1v3.9z"${3}/><circle cx="40.7" cy="63" r="4.9"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4hkp9tee4mk";
freezeTemplate(tmpl);
