import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./uploaded_model.css";

import _implicitScopedStylesheets from "./uploaded_model.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M42.58 29.16c0 1.53.46 2.96 1.26 4.14l-8.98 10.1c1.08.63 2.02 1.47 2.77 2.47l8.98-10.1c1.02.53 2.16.82 3.38.82s2.37-.29 3.38-.82a7.327 7.327 0 002.77-2.47 7.437 7.437 0 001.26-4.14c0-4.1-3.32-7.42-7.42-7.42s-7.42 3.32-7.42 7.42zm14.85 5.56c-.75 1-1.69 1.83-2.77 2.47l8.98 10.1c-.22.33-.42.68-.59 1.05-.44.94-.68 1.99-.68 3.09a7.42 7.42 0 004.33 6.75c.94.44 1.99.68 3.09.68 4.1 0 7.42-3.32 7.42-7.42s-3.32-7.42-7.42-7.42c-1.22 0-2.37.29-3.38.82l-8.98-10.1v-.02zM33.3 44.68c1.61.74 2.91 2.04 3.66 3.66.18.39.33.81.44 1.24h23.31c-.12.6-.19 1.22-.19 1.85s.06 1.26.19 1.85H37.4c-.83 3.2-3.73 5.57-7.19 5.57-4.1 0-7.42-3.32-7.42-7.42s3.32-7.42 7.42-7.42c1.1 0 2.16.24 3.09.68zm5.92 23.17l9.95-9.95c.48-.4 1.27-.4 1.67 0l9.95 10.03c.48.48.48 1.19 0 1.67l-1.67 1.67c-.48.48-1.19.48-1.67 0l-3.66-3.66c-.48-.48-1.35-.16-1.35.56v12.36c0 .63-.56 1.19-1.19 1.19h-2.39c-.63 0-1.19-.56-1.27-1.19V68.09c0-.71-.87-1.03-1.35-.56l-3.66 3.66c-.48.48-1.19.48-1.67 0l-1.67-1.67c-.48-.48-.48-1.19 0-1.67z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-63ajqq2t8sv";
freezeTemplate(tmpl);