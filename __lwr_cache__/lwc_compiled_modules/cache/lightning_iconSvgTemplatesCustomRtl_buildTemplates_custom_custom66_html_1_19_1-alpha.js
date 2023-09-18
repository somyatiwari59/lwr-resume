import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom66.css";

import _implicitScopedStylesheets from "./custom66.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M78.3 55.3L63.7 40.7c-2.3-2.3-6-2.3-8.3 0L40.7 55.3c-2.3 2.3-2.3 6 0 8.3l14.6 14.6c2.3 2.3 6 2.3 8.3 0l14.6-14.6c2.4-2.2 2.4-6 .1-8.3zM50.7 62c-1.4 1.4-3.6 1.4-4.9 0-1.4-1.4-1.4-3.6 0-4.9 1.4-1.399 3.6-1.399 4.9 0 1.3 1.3 1.3 3.5 0 4.9zM62 73.3c-1.4 1.4-3.6 1.4-4.9 0-1.4-1.4-1.4-3.6 0-4.9 1.4-1.4 3.601-1.4 4.9 0 1.3 1.3 1.3 3.5 0 4.9zm0-22.6c-1.4 1.399-3.6 1.399-4.9 0-1.399-1.4-1.399-3.6 0-4.9 1.4-1.4 3.601-1.4 4.9 0 1.3 1.3 1.3 3.5 0 4.9zM73.3 62c-1.399 1.4-3.6 1.4-4.899 0-1.4-1.4-1.4-3.6 0-4.9 1.399-1.4 3.599-1.4 4.899 0 1.4 1.3 1.4 3.5 0 4.9zM53 33.5V26c0-3.3-2.7-6-6-6H26c-3.3 0-6 2.7-6 6v21c0 3.3 2.7 6 6 6h7.5c.6 0 1.2-.3 1.6-.7.3-.399.7-.8 1.1-1.2L51 36.2c.4-.4.8-.7 1.2-1.1.5-.4.8-1 .8-1.6zM28.5 48c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm8-8c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm8-8c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-21m11u3mdgo";
freezeTemplate(tmpl);
