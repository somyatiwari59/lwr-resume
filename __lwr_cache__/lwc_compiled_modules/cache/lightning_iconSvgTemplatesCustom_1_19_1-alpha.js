import _tmpl from "./iconSvgTemplatesCustom.html";
import { registerComponent as _registerComponent } from "lwc";
import templates from './buildTemplates/templates';
export default _registerComponent(templates, {
  tmpl: _tmpl,
  sel: "lightning-icon-svg-templates-custom",
  apiVersion: 59
});