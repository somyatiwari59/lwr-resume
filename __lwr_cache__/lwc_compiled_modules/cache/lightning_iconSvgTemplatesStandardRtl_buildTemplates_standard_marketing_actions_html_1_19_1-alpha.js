import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./marketing_actions.css";

import _implicitScopedStylesheets from "./marketing_actions.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M47.5 26c-5.1.3-9.2 4.4-9.5 9.5.2-5.2 4.3-9.3 9.5-9.5zM58 35.5c-.3-5.1-4.4-9.2-9.5-9.5 5.2.2 9.3 4.3 9.5 9.5zM63.6 54.8l-10.2-3.5c-.8-.3-1.4-1-1.4-1.9V35.8c0-2.1-1.7-3.8-3.8-3.8h-.4c-2.1 0-3.8 1.7-3.8 3.8v26.9c0 2.3-2.9 3.2-4.1 1.2l-2.6-5.5c-1.4-2.4-4.5-3-6.7-1.4L29 58.2l8.6 20.4c.4.9 1.2 1.4 2.2 1.4h22.6c1.1 0 2-.8 2.3-1.8l4-14.3c.8-3.9-1.4-7.8-5.1-9.1z"${3}/><path d="M38 46.2V36v-.5c.3-5.1 4.4-9.2 9.5-9.5h1c5.1.3 9.2 4.4 9.5 9.5v10.7c0 .9 1.1 1.3 1.7.7C62.4 44 64 40.2 64 36c0-9.3-8-16.8-17.5-15.9-7.2.7-13.2 6.3-14.3 13.4-.8 5 .8 9.9 4.1 13.4.6.6 1.7.2 1.7-.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7fcku19hh8i";
freezeTemplate(tmpl);
