import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./agent_home.css";

import _implicitScopedStylesheets from "./agent_home.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50.93 20.37l28.71 28.77a1.48 1.48 0 01.29 1.4c-.1.5-.79.8-1.29.8h-6.28v27.45c0 .8-.5 1.2-1.3 1.2H28.81a1.18 1.18 0 01-1.29-1V51.34h-6.29a1 1 0 01-1.09-.8 1.09 1.09 0 01.3-1.4l28.7-28.77a1.27 1.27 0 011.79 0zM40.39 65h-5.3A1.11 1.11 0 0034 66.09v6.8a1.11 1.11 0 001.1 1.1h5.3a1.1 1.1 0 001.1-1.1v-6.8A1.09 1.09 0 0040.39 65zm12-9h-5.3A1.11 1.11 0 0046 57.1v15.79a1.11 1.11 0 001.1 1.1h5.3a1.1 1.1 0 001.1-1.1V57.1a1.1 1.1 0 00-1.11-1.1zm12-9h-5.3A1.11 1.11 0 0058 48.1v24.79a1.11 1.11 0 001.1 1.1h5.3a1.1 1.1 0 001.1-1.1V48.1a1.1 1.1 0 00-1.11-1.1z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1iqkfoa8ajm";
freezeTemplate(tmpl);
