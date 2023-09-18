import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit_groups.css";

import _implicitScopedStylesheets from "./edit_groups.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M39.4 31.5c-.2-.2-.6-.2-.8 0L26.9 43.2 25.2 49c-.2.6.4 1.1 1 1l5.9-1.7 11.7-11.7c.2-.2.2-.6 0-.8l-4.4-4.3zM49.4 28l-2.2-2.2c-.8-.8-2.1-.8-2.9 0 0 0-1.3 1.3-2 2.1-.2.2-.2.6 0 .8l4.2 4.2c.2.2.6.2.8 0 .7-.7 2.1-2 2.1-2 .8-.8.8-2.1 0-2.9zM26 13.7c0 2.2-.6 4.3-1.8 6.1-.4.6-.2 1.5.5 1.9 2.2 1.1 4.7 2.5 6.1 4.9.2.4.7.5 1.1.5h2.8c1.8 0 3-1.2 3-3.1-.1-2.8-2.9-4.5-5.9-5.8-2.1-.9-2.4-1.7-2.4-2.6 0-.9.6-1.7 1.3-2.4 1.2-1.1 1.9-2.7 1.9-4.6C32.5 5 30.4 2 26.7 2c-2.2 0-3.9 1.1-4.8 2.7 2.5 1.9 4.1 5.1 4.1 9z"${3}/><path d="M27.5 30.3c-.1-3.2-3.3-4.6-6.7-6.1-2.3-1-2.7-1.9-2.7-2.9s.6-2 1.4-2.7c1.4-1.3 2.1-3.1 2.1-5.2 0-3.9-2.3-7.3-6.5-7.3h-.4c-4.2 0-6.5 3.4-6.5 7.3 0 2.1.7 3.9 2.1 5.2.8.7 1.4 1.7 1.4 2.7 0 1-.4 1.9-2.7 2.9-3.4 1.5-6.6 3-6.7 6.1C2.5 32.4 4 34 6 34h18c2 0 3.5-1.6 3.5-3.7z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3biks1bl70e";
freezeTemplate(tmpl);
