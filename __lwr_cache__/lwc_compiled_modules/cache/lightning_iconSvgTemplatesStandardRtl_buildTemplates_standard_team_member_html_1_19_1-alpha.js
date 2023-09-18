import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./team_member.css";

import _implicitScopedStylesheets from "./team_member.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M57 44H45c-3.3 0-6 2.7-6 6v9c0 1.1.5 2.1 1.2 2.8.7.7 1.7 1.2 2.8 1.2v9c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6v-9c1.1 0 2.1-.4 2.8-1.2.7-.7 1.2-1.7 1.2-2.8v-9c0-3.3-2.7-6-6-6z"${3}/><path d="M36.6 66.7c-.2-.2-.5-.4-.7-.6-1.9-2-3-4.5-3-7.1v-9c0-3.2 1.3-6.2 3.4-8.3.6-.6.1-1.7-.7-1.7H26c-3.3 0-6 2.7-6 6v9c0 1.1.5 2.1 1.2 2.8.7.7 1.7 1.2 2.8 1.2v9c0 3.3 2.7 6 6 6h4c.9 0 1.7-.2 2.4-.5.4-.2.6-.5.6-.9v-5.1c0-.3-.1-.6-.4-.8z"${3}/><path d="M76 40h-6-3.6c-.9 0-1.3 1-.7 1.7 2.1 2.2 3.4 5.1 3.4 8.3v9c0 2.6-1 5.1-3 7.1-.2.2-.4.4-.7.6-.2.2-.4.5-.4.8v5.1c0 .4.2.8.6.9.7.3 1.5.5 2.4.5h4c3.3 0 6-2.7 6-6v-9c1.1 0 2.1-.4 2.8-1.2.7-.7 1.2-1.7 1.2-2.8v-9c0-3.3-2.7-6-6-6z"${3}/><circle cx="51" cy="33" r="7"${3}/><circle cx="32" cy="29" r="7"${3}/><circle cx="70" cy="29" r="7"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-25e2hqde8nt";
freezeTemplate(tmpl);
