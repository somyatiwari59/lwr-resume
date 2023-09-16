import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./progressIndicator.html";
import { classSet } from 'lightning/utils';
import { getStepIndex, getCurrentStepIndex, computeProgressValue } from './utils';
import base from './base.html';
import path from './path.html';
const STATE_COMPLETED = 'completed';
const STATE_CURRENT = 'current';
const STATE_INCOMPLETE = 'incomplete';
const STATE_ERROR = 'error';
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

/**
 * Provides a visual indication on the progress of a particular process.
 * @slot default Placeholder for lightning-progress-step.
 */
class LightningProgressIndicator extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * Changes the visual pattern of the indicator. Valid values are base and path.
     * The default is base.
     * @type {string}
     * @default base
     */
    this.type = 'base';
    /**
     * Changes the appearance of the progress indicator for the base type only.
     * Valid values are base or shade. The shade variant adds a light gray border to the step indicators.
     * The default is base.
     * @type {string}
     * @default base
     */
    this.variant = 'base';
    /**
     * If present, the current step is in error state and an error icon is displayed on the step indicator.
     * Only the base type can display errors.
     * @type {boolean}
     * @default false
     */
    this.hasError = false;
    this.privateStepHandlers = {};
    this.privateProgressValue = 0;
    this.privateTooltipHidden = true;
    this.privateTooltipLabel = void 0;
    this.privateActiveStepIndex = void 0;
    this.privateTooltipElement = void 0;
    this.privateRendered = false;
    this.privateCurrentStep = void 0;
  }
  /**
   * Set current-step to match the value attribute of one of progress-step components.
   * If current-step is not provided, the value of the first progress-step component is used.
   * @type {string}
   */
  get currentStep() {
    return this.privateCurrentStep;
  }
  set currentStep(value) {
    this.privateCurrentStep = value;
    if (this.privateRendered) {
      this.updateSteps(value);
    }
  }
  connectedCallback() {
    this.addEventListener('privateregisterstep', this.handlePrivateRegisterStep.bind(this));
  }
  renderedCallback() {
    this.privateRendered = true;
    this.updateSteps();
  }
  handleSlotChange() {
    this.updateSteps();
  }

  // Added `shouldFocus` as fix for W-9862373
  updateSteps(activeStep, shouldFocus) {
    const steps = this.getSteps();
    const {
      privateStepHandlers,
      type,
      hasError,
      currentStep
    } = this;
    const currentStepIndex = getCurrentStepIndex(steps, currentStep);
    let activeStepIndex = -1;
    // Set activeStepIndex to activeStep if provided.
    // This happens when focus is updated by user using arrow keys or clicking a progress step.
    // When component re-renders, active step is not passed from renderedCallback or handleSlotChange
    // In this scenario, use the privateActiveStepIndex to maintain the activeStep.
    // privateActiveStepInde will have the active step before the re-render
    // In case of initial render, privateActiveStepIndex is undefined. Use privateCurrentStep as activeStepIndex for fallback.
    // activeStep is needed to set active class and proper tabIndex for the progress step
    if (activeStep) {
      activeStepIndex = getStepIndex(steps, activeStep);
    } else if (this.privateActiveStepIndex !== undefined) {
      activeStepIndex = this.privateActiveStepIndex;
    } else {
      activeStepIndex = getStepIndex(steps, this.privateCurrentStep);
    }
    this.privateActiveStepIndex = activeStepIndex;

    // cast 'steps' NodeList to an Array for crossbrowser compatibility
    const stepsArray = Array.prototype.slice.call(steps);
    stepsArray.forEach((step, index) => {
      const stepName = step.value;
      const isActive = index === this.privateActiveStepIndex;
      if (index < currentStepIndex) {
        privateStepHandlers[stepName](STATE_COMPLETED, type, index, isActive, shouldFocus);
      } else if (index === currentStepIndex) {
        const state = hasError ? STATE_ERROR : STATE_CURRENT;
        privateStepHandlers[stepName](state, type, index, isActive, shouldFocus);
      } else {
        privateStepHandlers[stepName](STATE_INCOMPLETE, type, index, isActive, shouldFocus);
      }
    });
    if (this.isBase) {
      this.privateProgressValue = computeProgressValue(steps, currentStepIndex);
    }
  }
  isActive(stepName) {
    return this.currentStep === stepName;
  }
  getSteps() {
    return Array.from(this.querySelectorAll('lightning-progress-step'));
  }
  handlePrivateRegisterStep(event) {
    const {
      stepName,
      callback
    } = event.detail;
    this.privateStepHandlers[stepName] = callback;
  }
  handleStepFocus(event) {
    if (!this.isBase) {
      this.updateActiveStepStatus(event.target);
    }
  }
  handleStepKeyDown(event) {
    if (this.privateActiveStepIndex >= 0) {
      const steps = this.getSteps();
      switch (event.keyCode) {
        case UP:
        case LEFT:
          if (this.privateActiveStepIndex - 1 >= 0) {
            this.updateSteps(steps[this.privateActiveStepIndex - 1].value, true // Set shouldFocus to true to focus on nthe updated progress step
            );
          }

          break;
        case DOWN:
        case RIGHT:
          if (this.privateActiveStepIndex + 1 < steps.length) {
            this.updateSteps(steps[this.privateActiveStepIndex + 1].value, true // Set shouldFocus to true to focus on nthe updated progress step
            );
          }

          break;
        default:
          break;
      }
    }
  }
  get computedWrapperClass() {
    return classSet('slds-progress').add({
      'slds-progress_shade': this.variant === 'shade'
    });
  }
  get computedTooltipClass() {
    return classSet('slds-popover slds-popover_tooltip slds-nubbin_bottom slds-is-absolute').add({
      'slds-hidden': this.privateTooltipHidden
    });
  }
  updateActiveStepStatus(activeStep) {
    if (this.currentStep !== activeStep) {
      this.updateSteps(activeStep.value);
    }
  }
  get isBase() {
    return this.type === 'base';
  }
  render() {
    if (this.isBase) {
      return base;
    }
    return path;
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningProgressIndicator, {
  publicProps: {
    type: {
      config: 0
    },
    variant: {
      config: 0
    },
    currentStep: {
      config: 3
    },
    hasError: {
      config: 0
    }
  },
  track: {
    privateProgressValue: 1,
    privateTooltipHidden: 1,
    privateTooltipLabel: 1
  },
  fields: ["privateStepHandlers", "privateActiveStepIndex", "privateTooltipElement", "privateRendered", "privateCurrentStep"]
});
export default _registerComponent(LightningProgressIndicator, {
  tmpl: _tmpl,
  sel: "lightning-progress-indicator",
  apiVersion: 59
});