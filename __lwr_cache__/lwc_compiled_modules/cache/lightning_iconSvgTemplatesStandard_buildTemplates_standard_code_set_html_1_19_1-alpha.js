import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./code_set.css";

import _implicitScopedStylesheets from "./code_set.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74.6 33.6L61.4 20.4a1.29 1.29 0 00-1-.4 1.37 1.37 0 00-1.4 1.34V32a4 4 0 004 4h10.6a1.37 1.37 0 001.4-1.34v-.06a1.29 1.29 0 00-.4-1zM41.31 35.98H37.9l-.85 3.3h3.41l.85-3.3z"${3}/><path d="M73 42H59a6 6 0 01-6-6V22a2 2 0 00-2-2H31a6 6 0 00-6 6v48a6 6 0 006 6h38a6 6 0 006-6V44a2 2 0 00-2-2zm-42-.57v-.14l.43-1.53a.62.62 0 01.62-.47h2l.84-3.3h-1.73a.62.62 0 01-.64-.62v-.18l.48-1.6a.62.62 0 01.62-.47h2.05l.87-3.29a.64.64 0 01.62-.51h1.64a.63.63 0 01.64.62v.21l-.79 3h3.44l.84-3.32a.64.64 0 01.62-.51h1.69a.63.63 0 01.63.63v.16l-.79 3h1.63a.93.93 0 01.48.17l.15.11v.35l-.42 1.59a.61.61 0 01-.62.51h-2l-.88 3.3h1.69a.63.63 0 01.64.62V40l-.42 1.59a.61.61 0 01-.62.5h-2l-.84 3.35a.61.61 0 01-.62.51h-1.7a.62.62 0 01-.63-.61v-.18l.78-3h-3.4l-.86 3.35a.62.62 0 01-.63.51h-1.68a.62.62 0 01-.64-.62v-.18l.8-3.11h-1.66a.63.63 0 01-.63-.68zM61 69a2 2 0 01-2 2H33a2 2 0 01-2-2v-2a2 2 0 012-2h26a2 2 0 012 2zm4-12a2 2 0 01-2 2H33a2 2 0 01-2-2v-2a2 2 0 012-2h30a2 2 0 012 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-43b6jeest9e";
freezeTemplate(tmpl);
