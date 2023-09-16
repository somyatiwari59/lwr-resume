import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./instore_locations.css";

import _implicitScopedStylesheets from "./instore_locations.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M32.1 70.1c-.6 0-1.2-.5-1.2-1.2v-7.3c0-.6.5-1.2 1.2-1.2h7.5c.6 0 1.2.5 1.2 1.2V69c0 .6-.5 1.2-1.2 1.2h-7.5zM46.3 70.1c-.6 0-1.2-.5-1.2-1.2V57.7c0-.6.5-1.2 1.2-1.2h7.5c.6 0 1.2.5 1.2 1.2V69c0 .6-.5 1.2-1.2 1.2h-7.5zM60.5 70.1c-.6 0-1.2-.5-1.2-1.2v-7.3c0-.6.5-1.2 1.2-1.2H68c.6 0 1.2.5 1.2 1.2V69c0 .6-.5 1.2-1.2 1.2h-7.5zM32.1 42.9c-.6 0-1.2-.5-1.2-1.2V31.1c0-.6.5-1.2 1.2-1.2h21.7c.6 0 1.2.5 1.2 1.2v10.7c0 .6-.5 1.2-1.2 1.2H32.1zM60.5 42.9c-.6 0-1.2-.5-1.2-1.2v-7.3c0-.6.5-1.2 1.2-1.2H68c.6 0 1.2.5 1.2 1.2v7.3c0 .6-.5 1.2-1.2 1.2h-7.5z"${3}/><path d="M73.8 20H26.2c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2zm0 51.7c0 1.2-.9 2.1-2.1 2.1H28.3c-1.1 0-2.1-.9-2.1-2.1v-19h47.6v19zm0-25H26.2V28.3c0-1.2.9-2.1 2.1-2.1h43.4c1.1 0 2.1.9 2.1 2.1v18.4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-74nd2apu4l7";
freezeTemplate(tmpl);
