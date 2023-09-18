import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotion_segments.css";

import _implicitScopedStylesheets from "./promotion_segments.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M27.25 24.79l-.16-.1zM22.49 33.16l1.24-1.44a1.55 1.55 0 00.37-.87l.14-1.85a5.35 5.35 0 01.39-1.55c-.52-.32-1.07-.63-1.66-.93l-2.07-1c-2.4-1-2.77-2-2.77-3a4.15 4.15 0 011.48-2.86 7.66 7.66 0 002.12-5.53c0-4.14-2.4-7.74-6.64-7.74h-.46C10.38 6.4 8 10 8 14.14a7.62 7.62 0 002.12 5.53 4 4 0 011.47 2.86c0 1-.28 2-2.76 3C5.31 27.14 2.09 28.7 1.91 32c.18 2.3 1.75 4 3.77 4h15.54a5.34 5.34 0 011.27-2.84z"${3}/><path d="M25.58 14.33A13.7 13.7 0 0123.74 21a1.45 1.45 0 00.56 2c.9.51 1.86 1.05 2.79 1.7a5.27 5.27 0 012.1-.6l2-.14a1 1 0 00.59-.25l1.57-1.32a5.51 5.51 0 012-1 17.86 17.86 0 00-3.82-2.25C29.45 18.2 29 17.37 29 16.36a4.64 4.64 0 011.28-2.59 6.38 6.38 0 001.94-4.88c.09-3.68-2-6.91-5.9-6.91a5.76 5.76 0 00-5 2.86 11.73 11.73 0 014.26 9.49zM41.77 38.76a1.88 1.88 0 101.88 1.88 1.88 1.88 0 00-1.88-1.88z"${3}/><path d="M31.86 31.05a1.88 1.88 0 101.88 1.88 1.88 1.88 0 00-1.88-1.88zm0 0a1.88 1.88 0 101.88 1.88 1.88 1.88 0 00-1.88-1.88zm17.35 4l-1.42-1.71a3 3 0 01-.71-1.77l-.16-2.18a2.8 2.8 0 00-2.56-2.6l-1.9-.15a4 4 0 01-2.29-1l-1.44-1.27a2.8 2.8 0 00-3.65 0l-1.57 1.32a3.55 3.55 0 01-2.07.84l-2 .14a2.83 2.83 0 00-2.62 2.56l-.14 1.86a4.13 4.13 0 01-1 2.31l-1.25 1.44a2.82 2.82 0 000 3.65l1.36 1.63a3.36 3.36 0 01.77 1.94l.16 2.1a2.79 2.79 0 002.55 2.6l1.91.17a3.94 3.94 0 012.27 1l1.45 1.26a2.84 2.84 0 003.66 0l1.66-1.39A3.22 3.22 0 0142 47l2.18-.16a2.78 2.78 0 002.6-2.55l.22-1.73A4.43 4.43 0 0148.06 40l1.16-1.33a2.78 2.78 0 00-.01-3.62zm-20.93-2.12a3.59 3.59 0 113.58 3.58 3.58 3.58 0 01-3.58-3.58zm5.2 11.54a.32.32 0 01-.24.16H32.1a.29.29 0 01-.26-.16.27.27 0 010-.3l8.25-15.12a.35.35 0 01.24-.15h1.23a.31.31 0 01.15.41zm8.29-.25a3.59 3.59 0 113.59-3.59 3.59 3.59 0 01-3.59 3.59zm-8-11.29a1.88 1.88 0 10-1.88 1.88 1.88 1.88 0 001.85-1.88z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ngcba1g6i2";
freezeTemplate(tmpl);
