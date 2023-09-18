import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./audio.css";

import _implicitScopedStylesheets from "./audio.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M5.151.012A5.073 5.073 0 00.078 5.085v53.842A5.073 5.073 0 005.151 64h45.774A5.074 5.074 0 0056 58.927V20.321L37.097.012H5.151z" fill="#0D9DDA"${3}/><path d="M56 20.357v1H43.2s-6.312-1.26-6.128-6.707c0 0 .208 5.707 6.003 5.707H56z" fill="#05628A"${3}/><path d="M37.097.006v14.561c0 1.656 1.104 5.791 6.104 5.791h12.8L37.097.006z" fill="#90D0FE"${3}/><path d="M29.798 34.036L15.633 35.85v13.438c-.738-.205-1.628-.243-2.531-.064-2.009.394-3.325 1.702-2.938 2.918.386 1.215 2.325 1.88 4.333 1.48 1.764-.348 2.994-1.397 3.005-2.473h.002v-10.74l10.422-1.288v8.306c-.75-.212-1.655-.251-2.572-.068-2.03.399-3.357 1.718-2.969 2.947.389 1.229 2.35 1.897 4.379 1.499 1.849-.366 3.116-1.494 3.031-2.621V34.036z" fill="#fff"${3}/></g></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 56 64",
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
tmpl.stylesheetToken = "lwc-3fp79ihj9tr";
freezeTemplate(tmpl);
