import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_cloud.css";

import _implicitScopedStylesheets from "./data_cloud.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.96 9.3c-.12-1.45-.8-3.59-3.33-5.6-2.19-1.74-5.63-1.88-7.41-1.55-.44.08-2.37.61-3.86 1.71-2.85 2.12-4.17 4.91-5.09 7.35-.83 2.21-1.37 6.19-1.71 9a15.637 15.637 0 00-5.12 0c-.61-2.87-2.67-10.52-7.87-15.35-2.17-1.89-4.35-2.85-6.49-2.85-3.45 0-5.82 2.55-6.63 5.09-1.78 5.54 2.02 9.79 5.29 11.04 2.93 1.15 3.36 1.57 3.95 2.16.16.16.33.33.52.51.92.84 1.76 2.24 2.43 3.62C10.56 27.95 8 33.04 8 37.71c0 7.7 6.73 12.31 18 12.31s18-4.6 18-12.31c0-4.72-2.62-9.88-6.78-13.4l.39-.81c1.48-2.61 3.18-5.47 4.45-7.49.76.1 1.43.11 2.07.03 1.96-.26 3.39-.91 4.36-1.99 1.09-1.22 1.65-2.98 1.49-4.72l-.02-.03zm-4.05 2.43c-.39.45-1.13.73-2.25.87-.37.05-.78.03-1.31-.05-.2-.03-.41-.08-.64-.15-.73-.21-1.51.08-1.92.71-1.36 2.1-3.41 5.51-5.22 8.71-.02.03-.04.07-.06.11l-.16.34c-.79-.45-1.6-.84-2.46-1.17.02-.12.03-.28.06-.48.18-1.52.74-6.14 1.52-8.21 1.07-2.85 2.21-4.53 3.93-5.81.87-.65 2.18-1.04 2.43-1.09 1.37-.26 3.62.03 4.65.87 1.26 1 1.95 2.08 2.05 3.21.09 1.04-.36 1.83-.63 2.14zM25.99 46.55c-3.42 0-14.57-.64-14.57-8.88 0-6.46 6.5-14.27 14.57-14.27s14.57 7.81 14.57 14.27c0 8.24-11.15 8.88-14.57 8.88zM14.51 18.26c-.15-.15-.28-.27-.41-.39-.95-.94-1.77-1.61-5.13-2.93-1.59-.61-4.46-3.06-3.26-6.79.4-1.25 1.53-2.71 3.38-2.71 1.27 0 2.73.69 4.2 1.97 4.54 4.22 6.36 11.36 6.85 13.69-.93.35-1.82.78-2.67 1.29-.77-1.49-1.76-3.04-2.95-4.12z"${3}/><path d="M18.28 38.86c.95 0 1.71-1.15 1.71-2.57s-.77-2.57-1.71-2.57-1.71 1.15-1.71 2.57.77 2.57 1.71 2.57zM33.7 38.86c.95 0 1.71-1.15 1.71-2.57s-.77-2.57-1.71-2.57-1.71 1.15-1.71 2.57.77 2.57 1.71 2.57zM25.99 38c-1.18 0-2.14.77-2.14 1.71s.96 1.71 2.14 1.71 2.14-.77 2.14-1.71S27.17 38 25.99 38z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4qo09771qhl";
freezeTemplate(tmpl);
