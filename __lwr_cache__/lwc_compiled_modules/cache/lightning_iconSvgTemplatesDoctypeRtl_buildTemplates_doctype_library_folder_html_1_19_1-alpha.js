import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./library_folder.css";

import _implicitScopedStylesheets from "./library_folder.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#032D60" d="M51.5 15.5c2.5 0 4.5 2 4.5 4.5v31c0 2.5-2 4.5-4.5 4.5h-47C2 55.5 0 53.5 0 51V13c0-2.5 2-4.5 4.5-4.5H16c3.8 0 4.2 1.2 6.7 4.5 2.1 2.7 7.2 2.5 10.4 2.5h18.4z"${3}/><path fill="#90D0FE" d="M51.5 18.1H9.2c-2.5 0-4.5 2-4.5 4.5v2.9L9.2 19h42.3l4.5 6.5v-2.9c0-2.5-2-4.5-4.5-4.5z"${3}/><path fill="#1AB9FF" d="M4.6 55.5h46.9c2.5 0 4.5-2 4.5-4.5V23.5c0-2.5-2-4.5-4.5-4.5H9.3c-2.5-.1-4.5 1.9-4.6 4.4v28.3c0 1.3-1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3.3 2.2 2.3 3.8 4.5 3.8z"${3}/><g fill="#FFF"${3}><path d="M25.5 37.8h3.6v11.5h-3.6zM31.6 37.8h3.6v11.5h-3.6z"${3}/><path d="M46.4 31.8l-15-6.2c-.4-.2-.7-.3-1.1-.3-.1 0-.5 0-1.1.3l-15 6.2c-.3.2-.5.5-.5.8v.9c0 .5.4.9.9.9h2.9v14c0 .5.4.9.9.9h4.5V37.8h-1.8c-.4 0-.6-.2-.6-.6V36c0-.4.2-.6.6-.6H39.4c.4 0 .6.2.6.6v1.2c0 .4-.2.6-.6.6h-1.8v11.5h4.5c.5 0 .9-.4.9-.9V34.5v-.1h2.9c.5 0 .9-.4.9-.9v-.8c.1-.4-.1-.7-.4-.9zm-16.1.5c-1.1 0-1.9-.9-1.9-1.9 0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9 0 1-.8 1.9-1.9 1.9z"${3}/></g></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 56 64",
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
tmpl.stylesheetToken = "lwc-2fth627moik";
freezeTemplate(tmpl);
