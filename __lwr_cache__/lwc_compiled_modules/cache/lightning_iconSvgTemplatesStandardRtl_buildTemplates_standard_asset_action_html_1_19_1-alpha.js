import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_action.css";

import _implicitScopedStylesheets from "./asset_action.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M64.2 72.4a3.74 3.74 0 01-3.7-3.9v-2.1a3.49 3.49 0 011-3.1l11.6-11.6V26.8a2.43 2.43 0 00-2.4-2.4H29.3a2.43 2.43 0 00-2.4 2.4v41.5a2.43 2.43 0 002.4 2.4h5.3v2.5a2.43 2.43 0 002.4 2.4h2.8a2.43 2.43 0 002.4-2.4v-2.5H58v2.5a2.43 2.43 0 002.4 2.4h2.8a2.43 2.43 0 002.4-2.4v-.8zM36.3 36.8a.84.84 0 01.9-.9h25.7a.84.84 0 01.9.9v.9a.84.84 0 01-.9.9H37.1a.84.84 0 01-.9-.9v-.9zm27.2 4.3V54a.84.84 0 01-.9.9h-1.7a.84.84 0 01-.9-.9V41.1a.84.84 0 01.9-.9h1.7q.9.15.9.9zm-5.9 0V54a.9.9 0 01-1.8 0V41.1a.84.84 0 01.9-.9q.9.15.9.9zm-3.3 0V54a.84.84 0 01-.9.9H50a.84.84 0 01-.9-.9V41.1a.84.84 0 01.9-.9h3.4c.5.1.9.4.9.9zm-7.7 0V54a.84.84 0 01-.9.9H44a.84.84 0 01-.9-.9V41.1a.84.84 0 01.9-.9h1.7c.5.1.9.4.9.9zm-10.3 0a.84.84 0 01.9-.9h3.4a.84.84 0 01.9.9V54a.84.84 0 01-.9.9h-3.4a.84.84 0 01-.9-.9zm.8 17.9a.84.84 0 01-.9-.9v-.9a.84.84 0 01.9-.9h25.7a.84.84 0 01.9.9v.9a.84.84 0 01-.9.9z"${3}/><path d="M79 54.7l-.9-.9a1.57 1.57 0 00-2.2 0L64 65.7c-.1.1 0 .2 0 .3v2.5c0 .2 0 .4.2.4h2.6c.1 0 .2-.1.3-.1L79 57a1.52 1.52 0 000-2.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4bfeit6g0uv";
freezeTemplate(tmpl);
