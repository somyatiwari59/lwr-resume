import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./progressStep.html";
import labelCurrentStage from '@salesforce/label/LightningProgressIndicator.currentStage';
import labelStageComplete from '@salesforce/label/LightningProgressIndicator.stageComplete';
import { classSet } from 'lightning/utils';
import { classListMutation } from 'lightning/utilsPrivate';
import { Tooltip, TooltipType, Direction } from 'lightning/tooltipLibrary';
import path from './path.html';
import base from './base.html';

// Temporary workaround until we get real label support. New label entries must
// also be added to the static `labels` prop inside the class.
// https://git.soma.salesforce.com/raptor/raptor/issues/196
const i18n = {
  currentStage: labelCurrentStage,
  stageComplete: labelStageComplete
};

// Maps the status of the base progress-step to the icon it should render
const baseIconNameMap = {
  completed: 'utility:success',
  error: 'utility:error'
};

/**
 * Defines a step in the lightning-progress-indicator.
 */
class LightningProgressStep extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * Text string to reference the step of the progress indicator.
     * @type {string}
     */
    this.value = void 0;
    this._privateLabel = void 0;
    this.state = {};
  }
  updateInternal(newStatus, newType, newIndex, newActive, shouldFocus) {
    classListMutation(this.classList, this.computeClassSet(newType, newStatus, newActive));
    // Added `shouldFocus` as fix for W-9862373
    // This ensures progressStep is focused only when this argument is true.
    if (newActive === true && shouldFocus) {
      this.focusPathLink();
    }
    this.state.status = newStatus;
    this.state.type = newType;
    this.state.index = newIndex;
    this.state.active = newActive;
    this.initializeTooltip();
  }
  /**
   * Text to display as the name or tooltip for the step.
   * @type {string}
   */
  set label(value) {
    this._privateLabel = value;
    this.initializeTooltip();
  }
  get label() {
    return this._privateLabel;
  }
  computeClassSet(type, status, isActive) {
    const isPath = type === 'path';
    return classSet({
      'slds-progress__item': !isPath,
      'slds-is-completed': !isPath && status === 'completed',
      'slds-has-error': !isPath && status === 'error',
      'slds-is-active': isPath && isActive === true || type === 'base' && status === 'current',
      'slds-path__item': isPath,
      'slds-is-complete': isPath && status === 'completed',
      'slds-is-current': isPath && (status === 'error' || status === 'current'),
      'slds-is-incomplete': isPath && status === 'incomplete'
    });
  }
  connectedCallback() {
    this.setAttribute('role', 'listitem');
    this.dispatchEvent(new CustomEvent('privateregisterstep', {
      bubbles: true,
      detail: {
        callback: this.updateInternal.bind(this),
        stepName: this.value,
        setDeRegistrationCallback: deRegistrationCallback => {
          this._deRegistrationCallback = deRegistrationCallback;
        }
      }
    }));
  }
  disconnectedCallback() {
    if (this._deRegistrationCallback) {
      this._deRegistrationCallback();
    }
    if (this._tooltip) {
      this._tooltip.disconnect();
    }
  }
  renderedCallback() {
    if (this._tooltip && !this._tooltip.initialized) {
      this._tooltip.initialize();
    }
  }
  get computedButtonClass() {
    const classes = classSet('slds-button slds-progress__marker');
    if (this.hasIcon) {
      classes.add('slds-button_icon').add('slds-progress__marker').add('slds-progress__marker_icon');
    }
    return classes.toString();
  }
  get hasIcon() {
    return this.state.status === 'completed' || this.state.status === 'error';
  }
  get baseIconName() {
    return baseIconNameMap[this.state.status];
  }
  get isPath() {
    return this.state.type === 'path';
  }
  get ariaSelected() {
    return this.state.active === true ? 'true' : 'false';
  }
  get tabIndex() {
    return this.state.active === true ? 0 : -1;
  }
  get assistiveText() {
    if (this.state.status === 'completed') {
      return `${this.label} - ${i18n.stageComplete}`;
    } else if (this.state.status === 'current') {
      return `${this.label} - ${i18n.currentStage}`;
    }
    return this.state.type === 'path' ? '' : this.label;
  }
  handleMouseEnter() {
    this.dispatchEvent(
    // eslint-disable-next-line lightning-global/no-custom-event-bubbling
    new CustomEvent('stepmouseenter', {
      bubbles: true,
      detail: {
        index: this.state.index
      }
    }));
  }
  handleMouseLeave() {
    this.clearAriaDescribedBy();
    this.dispatchEvent(
    // eslint-disable-next-line lightning-global/no-custom-event-bubbling
    new CustomEvent('stepmouseleave', {
      bubbles: true,
      detail: {
        index: this.state.index
      }
    }));
  }
  handleFocus() {
    this.dispatchEvent(
    // eslint-disable-next-line lightning-global/no-custom-event-bubbling
    new CustomEvent('stepfocus', {
      bubbles: true,
      detail: {
        index: this.state.index
      }
    }));
  }
  handleBlur() {
    this.clearAriaDescribedBy();
    this.dispatchEvent(
    // eslint-disable-next-line lightning-global/no-custom-event-bubbling
    new CustomEvent('stepblur', {
      bubbles: true,
      detail: {
        index: this.state.index
      }
    }));
  }
  clearAriaDescribedBy() {
    if (this.state.type === 'base') {
      const button = this.template.querySelector('button');
      if (button) {
        button.removeAttribute('aria-describedBy');
      }
    }
  }
  focusPathLink() {
    const pathLink = this.template.querySelector('a.slds-path__link');
    if (pathLink) {
      pathLink.focus();
    }
  }
  render() {
    if (this.isPath) {
      return path;
    }
    return base;
  }
  initializeTooltip() {
    if (this._tooltip) {
      this._tooltip.value = this._privateLabel;
    } else if (this._privateLabel && this.state.type && !this.isPath) {
      // Note that because the tooltip target is a child element it may not be present in the
      // dom during initial rendering.
      this._tooltip = new Tooltip(this._privateLabel, {
        root: this,
        target: () => this.template.querySelector('button'),
        type: TooltipType.Toggle,
        align: {
          horizontal: Direction.Center,
          vertical: Direction.Bottom
        },
        targetAlign: {
          horizontal: Direction.Center,
          vertical: Direction.Top
        }
      });
      this._tooltip.initialize();

      // unset aria-describedby that would've been set by tooltipLibrary
      this.clearAriaDescribedBy();
    }
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningProgressStep, {
  publicProps: {
    value: {
      config: 0
    },
    label: {
      config: 3
    }
  },
  track: {
    state: 1
  },
  fields: ["_privateLabel"]
});
export default _registerComponent(LightningProgressStep, {
  tmpl: _tmpl,
  sel: "lightning-progress-step",
  apiVersion: 59
});