import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pdf_ext.css";

import _implicitScopedStylesheets from "./pdf_ext.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M28.6 11.4h5.1a1.11 1.11 0 001.1-1.1 1.32 1.32 0 00-.3-.8l-7.2-7.1a.89.89 0 00-.7-.3 1.11 1.11 0 00-1.1 1.1v5.1a3.12 3.12 0 003.1 3.1zM49.83 32.45A1.43 1.43 0 0048.44 31h-12A1.43 1.43 0 0035 32.44v1.44a1.43 1.43 0 001.4 1.44h6.14l-11 11a1.42 1.42 0 000 2l1 1a1.54 1.54 0 001.09.45 1.32 1.32 0 00.94-.38l11-11v6A1.43 1.43 0 0047 45.83h1.53a1.43 1.43 0 001.47-1.4zM18.35 20.68h-1.46v4.93h1.46a1.56 1.56 0 001.56-1.1 3.93 3.93 0 00.24-1.44 3.61 3.61 0 00-.36-1.77 1.53 1.53 0 00-1.44-.62zM11.29 20.93a1.27 1.27 0 00-.84-.25H9v2.23h1.46a1.18 1.18 0 00.84-.28 1.09 1.09 0 00.3-.86 1 1 0 00-.33-.84z"${3}/><path d="M33.24 16H25.4a4.67 4.67 0 01-4.7-4.6V3.6a1.42 1.42 0 00-1.34-1.5H6.8a4.67 4.67 0 00-4.7 4.6v29.4a4.6 4.6 0 004.62 4.6H24.6v-.1a15.92 15.92 0 0110.2-14.9v-8.1a1.58 1.58 0 00-1.56-1.6zm-20.75 7.65a2.93 2.93 0 01-1.89.56H9v2.71H7.49v-7.55h3.24a2.64 2.64 0 011.76.63 2.3 2.3 0 01.66 1.8 2.35 2.35 0 01-.66 1.85zm8.66 1.9A2.73 2.73 0 0118.62 27h-3.26v-7.63h3.26a3.85 3.85 0 011.17.17 2.49 2.49 0 011.28.95 3.43 3.43 0 01.54 1.22 5.6 5.6 0 01.14 1.29 5 5 0 01-.6 2.55zm7.92-4.84h-3.81v1.74h3.34v1.31h-3.34v3.16h-1.57v-7.54h5.38z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3gtnlefbu0g";
freezeTemplate(tmpl);
