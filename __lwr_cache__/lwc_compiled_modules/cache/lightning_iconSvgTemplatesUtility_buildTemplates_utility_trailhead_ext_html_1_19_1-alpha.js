import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./trailhead_ext.css";

import _implicitScopedStylesheets from "./trailhead_ext.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M49.8 32.5a1.37 1.37 0 00-1.4-1.4h-12a1.43 1.43 0 00-1.4 1.4v1.4a1.37 1.37 0 001.4 1.4h6.1l-11 11a1.52 1.52 0 000 2l1 1a1.61 1.61 0 001.1.5 1 1 0 00.9-.4l11-11v6a1.37 1.37 0 001.4 1.4h1.5a1.37 1.37 0 001.4-1.4zM21.8 25.1h7.7l-3.9-5.7z"${3}/><path d="M16.8 12.5l.3-.3a1.38 1.38 0 011.8.3l4.2 6 1.5-2.1.3-.3a1.38 1.38 0 011.8.3l6 8.6h3.9a10.46 10.46 0 011.7-.4A28.91 28.91 0 0020.8 2.3a1.08 1.08 0 00-1.1 0A29 29 0 002.3 25h5.8z"${3}/><path d="M17.8 15.4l-3.3 4.9-3.1 4.7h7.3l2.9-4.1zM2.1 32.2a1.61 1.61 0 00.5 1.1 32.87 32.87 0 0016 5.4l1.6-2.5 1.1-2a.64.64 0 00-.3-1l-1.2-.5-.4-.2a3.42 3.42 0 01-1.3-4.6c0-.1.1-.1.1-.2H2.1z"${3}/><path d="M23.6 35.9c-.5.9-1.1 2.2-1.4 2.8l2.5-.3a15.58 15.58 0 016.5-10.8h-9.5l-1.1 1.6a.73.73 0 00.4 1l1.14.45.36.15a3.42 3.42 0 011.3 4.7z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-79uhgdqbqmr";
freezeTemplate(tmpl);
