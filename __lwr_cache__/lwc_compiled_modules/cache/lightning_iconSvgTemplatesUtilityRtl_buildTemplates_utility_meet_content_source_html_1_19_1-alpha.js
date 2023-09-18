import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./meet_content_source.css";

import _implicitScopedStylesheets from "./meet_content_source.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M46.31 7.54H5.69A3.69 3.69 0 002 11.23v29.54a3.69 3.69 0 003.69 3.69h40.62A3.69 3.69 0 0050 40.77V11.23a3.69 3.69 0 00-3.69-3.69zm0 32.31a.93.93 0 01-.93.92H6.62a.93.93 0 01-.93-.92V14a.93.93 0 01.93-.92h38.76a.93.93 0 01.93.92z"${3}/><path d="M26.52 17a.7.7 0 00-1-.1.47.47 0 00-.1.1l-6.57 7.12a.88.88 0 000 1.19L20 26.52a.71.71 0 001 .1l.1-.1 2.42-2.61a.57.57 0 01.81 0 .56.56 0 01.15.37v10.16a.8.8 0 00.72.85h1.59a.87.87 0 00.83-.85V24.26a.53.53 0 01.9-.4l2.42 2.66a.87.87 0 001.15 0l1.1-1.18a.88.88 0 000-1.19z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6bcp4ijgqei";
freezeTemplate(tmpl);
