import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveBubble.html";
/* eslint-disable @lwc/lwc/no-api-reassignments */
import { classSet } from 'lightning/utils';
const DEFAULT_ALIGN = {
  horizontal: 'left',
  vertical: 'bottom'
};
class LightningPrimitiveBubble extends LightningElement {
  constructor(...args) {
    super(...args);
    this.state = {
      // tracks the `visibility` of the tooltip
      visible: false,
      // tracks the `display` of the tooltip
      hidden: true,
      contentId: ''
    };
    /*
        Tooltip manages the visibility state of the PrimitiveBubble element
        to ensure there are no differences beteween TooltipLibrary._visible and
        LightningPrimitiveBubble.state.visible. See @W-12512833
    */
    this.disableVisibilityChangeOnLeave = void 0;
  }
  get contentId() {
    return this.state.contentId;
  }
  set contentId(value) {
    this.state.contentId = value;
    if (this.state.inDOM) {
      this.divEl.setAttribute('id', this.state.contentId);
    }
  }
  connectedCallback() {
    this.setAttribute('role', 'tooltip');
    this.state.inDOM = true;
  }
  disconnectedCallback() {
    this.state.inDOM = false;
  }
  renderedCallback() {
    // set content manually once rendered
    // - this is required to avoid the content update being in the wrong 'tick'
    this.setContentManually();
    this.setIdManually();
  }
  set content(value) {
    this.state.content = value;
    if (this.state.inDOM) {
      this.setContentManually();
    }
  }
  get content() {
    return this.state.content || '';
  }
  get align() {
    return this.state.align || DEFAULT_ALIGN;
  }
  set align(value) {
    this.state.align = value;
  }
  get visible() {
    return this.state.visible;
  }
  set visible(value) {
    this.state.visible = value;
    if (this.state.visible) {
      // Show the tooltip before css animation
      this.state.hidden = false;
    }
  }
  handleTransitionEnd() {
    // Hide the tooltip after css animation
    if (!this.state.visible) {
      this.state.hidden = true;
    }
  }
  setIdManually() {
    this.setAttribute('id', this.state.contentId);
  }

  // manually set the content value
  setContentManually() {
    /* manipulate DOM directly */
    this.template.querySelector('.slds-popover__body').textContent = this.state.content;
  }

  // compute class value for this bubble
  get computedPopoverClass() {
    const classes = classSet('slds-popover').add('slds-popover_tooltip').add('fix-popover_tooltip_alignment'); // fix for W-11677142

    // show or hide bubble
    classes.add({
      'slds-rise-from-ground': this.visible,
      'slds-fall-into-ground': !this.visible,
      'slds-hide': this.state.hidden
    });

    // apply the proper nubbin CSS class
    const {
      horizontal,
      vertical
    } = this.align;
    classes.add({
      'slds-nubbin_top-left': horizontal === 'left' && vertical === 'top',
      'slds-nubbin_top-right': horizontal === 'right' && vertical === 'top',
      'slds-nubbin_bottom-left': horizontal === 'left' && vertical === 'bottom',
      'slds-nubbin_bottom-right': horizontal === 'right' && vertical === 'bottom',
      'slds-nubbin_bottom': horizontal === 'center' && vertical === 'bottom',
      'slds-nubbin_top': horizontal === 'center' && vertical === 'top',
      'slds-nubbin_left': horizontal === 'left' && vertical === 'center',
      'slds-nubbin_right': horizontal === 'right' && vertical === 'center'
    });
    return classes.toString();
  }
  handleMouseLeave() {
    /**
     * This causes a number of issues when primitive-bubble is managed through tooltipLibrary, due to the fact
     * that changing the visibility inside the primitive bubble creates a mismatch with the tooltipLibrary Tooltip._visible state.
     * This contributes to a number of problems and can result in the tooltip being made visible again in unwanted situations.
     * (W-12512833). Remove this completely if no longer required by other consumers.
     */
    if (!this.disableVisibilityChangeOnLeave) {
      this.visible = false;
    }
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningPrimitiveBubble, {
  publicProps: {
    disableVisibilityChangeOnLeave: {
      config: 0
    },
    contentId: {
      config: 3
    },
    content: {
      config: 3
    },
    align: {
      config: 3
    },
    visible: {
      config: 3
    }
  },
  track: {
    state: 1
  }
});
export default _registerComponent(LightningPrimitiveBubble, {
  tmpl: _tmpl,
  sel: "lightning-primitive-bubble",
  apiVersion: 59
});