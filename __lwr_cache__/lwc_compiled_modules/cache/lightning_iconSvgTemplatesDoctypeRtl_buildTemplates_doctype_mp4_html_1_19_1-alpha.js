import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./mp4.css";

import _implicitScopedStylesheets from "./mp4.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M5.116.006A5.073 5.073 0 00.044 5.08v53.841a5.073 5.073 0 005.072 5.074h45.775a5.074 5.074 0 005.074-5.074V20.316L37.062.006H5.116z" fill="#730394"${3}/><path d="M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#3D0157"${3}/><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z" fill="#E5B9FE"${3}/></g><path d="M21.13 53.879a.73.73 0 01-.738-.738v-9.254l-4.033 9.759c-.054.144-.198.233-.378.233a.37.37 0 01-.342-.233l-4.015-9.759v9.254a.734.734 0 01-.756.738.73.73 0 01-.738-.738V42.878c0-.648.558-1.206 1.243-1.206.486 0 .99.288 1.188.756L16 50.8l3.457-8.372c.198-.468.684-.756 1.188-.756.684 0 1.243.558 1.243 1.206v10.263a.737.737 0 01-.758.738zM29.966 49h-3.331v4.141a.734.734 0 01-.756.738.73.73 0 01-.738-.738V42.842c0-.594.486-1.081 1.081-1.081h3.745c2.413 0 3.763 1.657 3.763 3.619-.001 1.964-1.387 3.62-3.764 3.62zm-.18-5.906h-3.151v4.573h3.151c1.422 0 2.395-.936 2.395-2.287 0-1.349-.973-2.286-2.395-2.286zm13.915 7.635h-1.17v2.413a.734.734 0 01-.757.738.73.73 0 01-.738-.738v-2.413h-5.077c-.378 0-.738-.324-.738-.81 0-.162.053-.342.144-.486l4.807-7.22a1.322 1.322 0 011.081-.558c.684 0 1.278.594 1.278 1.26v6.5h1.17c.342 0 .63.288.63.667a.643.643 0 01-.63.647zm-2.665-7.581l-4.213 6.266h4.213v-6.266z" fill="#fff"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-50usuhrjg5r";
freezeTemplate(tmpl);
