import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./freeze_column.css";

import _implicitScopedStylesheets from "./freeze_column.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M14.5 44a1.54 1.54 0 011.5 1.5v3a1.54 1.54 0 01-1.5 1.5h-9A1.54 1.54 0 014 48.5v-3A1.54 1.54 0 015.5 44zm19.6 0c.59 0 1.1.7 1.1 1.5v3c0 .8-.51 1.5-1.1 1.5h-6.6c-.59 0-1.1-.7-1.1-1.5v-3c0-.8.51-1.5 1.1-1.5zm12.8 0c.59 0 1.1.7 1.1 1.5v3c0 .8-.51 1.5-1.1 1.5h-6.6c-.59 0-1.1-.7-1.1-1.5v-3c0-.8.51-1.5 1.1-1.5zM21.6 14a.8.8 0 01.8.8v34.4a.8.8 0 01-.8.8h-.8a.8.8 0 01-.8-.8V14.8a.8.8 0 01.8-.8zm-7.1 20a1.54 1.54 0 011.5 1.5v3a1.54 1.54 0 01-1.5 1.5h-9A1.54 1.54 0 014 38.5v-3A1.54 1.54 0 015.5 34zm19.6 0c.59 0 1.1.7 1.1 1.5v3c0 .8-.51 1.5-1.1 1.5h-6.6c-.59 0-1.1-.7-1.1-1.5v-3c0-.8.51-1.5 1.1-1.5zm12.8 0c.59 0 1.1.7 1.1 1.5v3c0 .8-.51 1.5-1.1 1.5h-6.6c-.59 0-1.1-.7-1.1-1.5v-3c0-.8.51-1.5 1.1-1.5zM14.5 24a1.54 1.54 0 011.5 1.5v3a1.54 1.54 0 01-1.5 1.5h-9A1.54 1.54 0 014 28.5v-3A1.54 1.54 0 015.5 24zm19.6 0c.59 0 1.1.7 1.1 1.5v3c0 .8-.51 1.5-1.1 1.5h-6.6c-.59 0-1.1-.7-1.1-1.5v-3c0-.8.51-1.5 1.1-1.5zm12.8 0c.59 0 1.1.7 1.1 1.5v3c0 .8-.51 1.5-1.1 1.5h-6.6c-.59 0-1.1-.7-1.1-1.5v-3c0-.8.51-1.5 1.1-1.5zM14.5 14a1.54 1.54 0 011.5 1.5v3a1.54 1.54 0 01-1.5 1.5h-9A1.54 1.54 0 014 18.5v-3A1.54 1.54 0 015.5 14zm19.6 0c.59 0 1.1.7 1.1 1.5v3c0 .8-.51 1.5-1.1 1.5h-6.6c-.59 0-1.1-.7-1.1-1.5v-3c0-.8.51-1.5 1.1-1.5zm12.8 0c.59 0 1.1.7 1.1 1.5v3c0 .8-.51 1.5-1.1 1.5h-6.6c-.59 0-1.1-.7-1.1-1.5v-3c0-.8.51-1.5 1.1-1.5zm-.4-12A1.54 1.54 0 0148 3.5v5a1.54 1.54 0 01-1.5 1.5h-41A1.54 1.54 0 014 8.5v-5A1.54 1.54 0 015.5 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3kddk5vdseq";
freezeTemplate(tmpl);
