import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./input.html";
import labelA11yTriggerText from '@salesforce/label/LightningColorPicker.a11yTriggerText';
import labelMessageToggleActive from '@salesforce/label/LightningControl.activeCapitalized';
import labelMessageToggleInactive from '@salesforce/label/LightningControl.inactiveCapitalized';
import labelRequired from '@salesforce/label/LightningControl.required';
import labelClearInput from '@salesforce/label/LightningControl.clear';
import labelLoadingIndicator from '@salesforce/label/LightningControl.loading';
import labelNumberIncrementCounter from '@salesforce/label/LightningInputNumber.incrementCounter';
import labelNumberDecrementCounter from '@salesforce/label/LightningInputNumber.decrementCounter';
import labelHelpTextAlternativeText from '@salesforce/label/LightningInput.helptextAlternativeText';
import userTimeZone from '@salesforce/i18n/timeZone';
import formFactor from '@salesforce/client/formFactor';
import { classSet, formatLabel } from 'lightning/utils';
import { assert, classListMutation, reflectAttribute, isNativeComponent, isUndefinedOrNull, normalizeAriaAttribute, normalizeBoolean, normalizeString, synchronizeAttrs, decorateInputForDragon, setDecoratedDragonInputValueWithoutEvent, computeAriaInvalid } from 'lightning/utilsPrivate';
import AriaObserver from 'lightning/ariaObserver';
import { normalizeDate, normalizeDateTimeToUTC, normalizeTime, normalizeUTCDateTime } from './dateTimeUtil';
import { isAfter, isBefore } from 'lightning/internationalizationLibrary';
import { FieldConstraintApiWithProxyInput, InteractingState, normalizeVariant, VARIANT, normalizeInput, isValidNumber, isValidEmail, isValidMultipleEmails } from 'lightning/inputUtils';
const i18n = {
  a11yTriggerText: labelA11yTriggerText,
  messageToggleActive: labelMessageToggleActive,
  messageToggleInactive: labelMessageToggleInactive,
  numberIncrementCounter: labelNumberIncrementCounter,
  numberDecrementCounter: labelNumberDecrementCounter,
  required: labelRequired,
  clear: labelClearInput,
  loading: labelLoadingIndicator,
  helpTextAlternativeText: labelHelpTextAlternativeText
};
const ARIA_CONTROLS = 'aria-controls';
const ARIA_LABEL = 'aria-label';
const ARIA_LABELLEDBY = 'aria-labelledby';
const ARIA_DESCRIBEDBY = 'aria-describedby';

/*
 * This component supports the regular native input types, with the addition of toggle, checkbox-button and color.
 * Furthermore the file type supports a droppable zone, search has a clear button, number has formatting.
 * Input changes (native oninput event) triggers an onchange event,
 *     the native even is stopped, the dispatched custom event has a value that points to the state of the component
 *     in case of files it's the files uploaded (via droppable zone or through the upload button),
 *     checked for radio and checkbox, checkbox-button, and just straight input's value for everything else
 *
 *
 * _Toggle_ (always has an aria-describedby, on error has an additional one, default label text for active and inactive
 * states)
 * _File_ (as it has a droppable zone, the validity returned would have to be valid - unless a custom error message was
 *    passed)
 * _Search_ (it has the clear button and the icon)
 * _Number_ (formatting when not in focus, when in focus shows raw value)
 *
 * */

const VALID_NUMBER_FORMATTERS = ['decimal', 'percent', 'percent-fixed', 'currency'];
const DEFAULT_FORMATTER = VALID_NUMBER_FORMATTERS[0];

/**
 * Represents interactive controls that accept user input depending on the type attribute.
 */
class LightningInput extends LightningElement {
  /**
   * Controls auto-filling of the field. Use this attribute with
   * email, search, tel, text, and url input types only. Set the attribute to pass
   * through autocomplete values to be interpreted by the browser.
   * @type {string}
   */
  get autocomplete() {
    if (this.isAutoCompleteSupported) {
      return this._autocomplete;
    }
    if (this.isTypeDate || this.isTypeDateTime || this.isTypeTime) {
      // When type='date' or type='datetime' or type='time'
      // the value of autocomplete is 'off'
      return 'off';
    }
    return undefined;
  }
  set autocomplete(value) {
    this._autocomplete = value;
  }

  /**
   * The display style of the date when type='date' or type='datetime'. Valid values are
   * short, medium (default), and long. The format of each style is specific to the locale.
   * On mobile devices this attribute has no effect.
   * @type {string}
   * @default medium
   */

  constructor() {
    super();
    /**
     * Text that is displayed when the field is empty, to prompt the user for a valid entry. Use this attribute with date, email, number, password, search, tel, text, time, and url input types only.
     * @type {string}
     *
     */
    this.placeholder = void 0;
    /**
     * Specifies the name of an input element.
     * @type {string}
     *
     */
    this.name = void 0;
    /**
     * Text label for the input.
     * @type {string}
     * @required
     *
     */
    this.label = void 0;
    /**
     * Error message to be displayed when a bad input is detected. The badInput error can be returned for invalid input for any input type.
     * @type {string}
     *
     */
    this.messageWhenBadInput = void 0;
    /**
     * Error message to be displayed when a pattern mismatch is detected. The patternMismatch error can be returned when you specify a pattern for email, password, search, tel, text, or url input types.
     * @type {string}
     *
     */
    this.messageWhenPatternMismatch = void 0;
    /**
     * Error message to be displayed when a range overflow is detected. The rangeOverflow error can be returned when you specify a max value for number or range input types.
     * @type {string}
     *
     */
    this.messageWhenRangeOverflow = void 0;
    /**
     * Error message to be displayed when a range underflow is detected. The rangeUnderflow error can be returned when you specify a min value for number or range input types.
     * @type {string}
     *
     */
    this.messageWhenRangeUnderflow = void 0;
    /**
     * Error message to be displayed when a step mismatch is detected. The stepMismatch error can be returned when you specify a step value for number and range input types.
     * @type {string}
     *
     */
    this.messageWhenStepMismatch = void 0;
    /**
     * Error message to be displayed when the value is too short. The tooShort error can be returned when you specify a min-length value for email, password, search, tel, text, and url input types.
     * @type {string}
     *
     */
    this.messageWhenTooShort = void 0;
    /**
     * Error message to be displayed when the value is too long. The tooLong error can be returned when you specify a max-length value for email, password, search, tel, text, and url input types.
     * @type {string}
     *
     */
    this.messageWhenTooLong = void 0;
    /**
     * Error message to be displayed when a type mismatch is detected. The typeMismatch error can be returned for the email and url input types.
     * @type {string}
     *
     */
    this.messageWhenTypeMismatch = void 0;
    /**
     * Error message to be displayed when the value is missing. The valueMissing error can be returned when you specify the required attribute for any input type.
     * @type {string}
     *
     */
    this.messageWhenValueMissing = void 0;
    /**
     * Text shown for the active state of a toggle. The default is "Active".
     * @type {string}
     */
    this.messageToggleActive = i18n.messageToggleActive;
    /**
     * Text shown for the inactive state of a toggle. The default is "Inactive".
     * @type {string}
     */
    this.messageToggleInactive = i18n.messageToggleInactive;
    /**
     * Describes the input to assistive technologies.
     * @type {string}
     */
    this.ariaLabel = void 0;
    this.dateStyle = void 0;
    /**
     * The display style of the time when type='time' or type='datetime'. Valid values are
     * short (default), medium, and long. Currently, medium and long styles look the same.
     * On mobile devices this attribute has no effect.
     * @type {string}
     * @default short
     *
     */
    this.timeStyle = void 0;
    /**
     * Describes the date input to assistive technologies when type='datetime'. On mobile devices,
     * this label is merged with aria-label and time-aria-label to describe the native date time input.
     * @type {string}
     *
     */
    this.dateAriaLabel = void 0;
    this._timeAriaDescribedBy = void 0;
    this._timeAriaLabelledBy = void 0;
    this._timeAriaControls = void 0;
    this._dateAriaControls = void 0;
    this._dateAriaDescribedBy = void 0;
    this._dateAriaLabelledBy = void 0;
    this._value = '';
    this._type = 'text';
    this._pattern = void 0;
    this._max = void 0;
    this._min = void 0;
    this._step = void 0;
    this._disabled = false;
    this._readOnly = false;
    this._required = false;
    this._checked = false;
    this._isLoading = false;
    this._multiple = false;
    this._timezone = false;
    this._helpMessage = null;
    this._isColorPickerPanelOpen = false;
    this._fieldLevelHelp = void 0;
    this._accesskey = void 0;
    this._maxLength = void 0;
    this._minLength = void 0;
    this._accept = void 0;
    this._variant = void 0;
    this._numberRawValue = '';
    this._ariaInvalid = void 0;
    this._autocomplete = void 0;
    this._shouldShowHelpMessage = true;
    this._helpMessageChanged = false;
    this._formatter = DEFAULT_FORMATTER;
    this._showRawNumber = false;
    this._initialValueSet = false;
    this._rendered = void 0;
    /**
     * Reserved for internal use.
     * @type {number}
     *
     */
    this.formatFractionDigits = void 0;
    /**
     * Specifies the value of the aria-haspopup attribute
     */
    this.ariaHasPopup = void 0;
    this.ariaObserver = new AriaObserver(this);

    // Native Shadow Root will return [native code].
    // Our synthetic method will return the function source.
    this._isNativeShadow = isNativeComponent(this);
  }
  connectedCallback() {
    if (!this.ariaObserver) {
      this.ariaObserver = new AriaObserver(this);
    }
    // Manually track connected state because this.template.isConnected can be false
    // when input is created using createElement and inserted into dom manually.
    // i.e. create an input element and pass it to showCustomOverlay
    // Remove this state and the one in AriaObserver once the issue is fixed.
    // PR: https://github.com/salesforce/lwc/pull/1798

    this.classList.add('slds-form-element');
    this.updateClassListForVariant();
    this.validateRequiredAttributes();
    this.interactingState = new InteractingState();
    this.interactingState.onleave(() => this.reportValidity());
  }
  disconnectedCallback() {
    this._rendered = false;
    this._initialValueSet = false;
    this._cachedInputElement = undefined;
    this.cachedPrimitiveComponent = undefined;
    if (this.ariaObserver) {
      this.ariaObserver.disconnect();
      this.ariaObserver = undefined;
    }
  }
  renderedCallback() {
    if (this.isConnected) {
      this.ariaObserver.sync(this.isNativeShadow);

      // If the help message changed, the help message element needs to be (un)related
      if (this._helpMessageChanged) {
        this.connectAriaDescribedBy();
        this._helpMessageChanged = false;
      }
      if (!this._rendered) {
        this.connectAriaDescribedBy();
        this.connectAriaLabelledBy();
        this.connectAriaControls();
      }
    }
    if (!this._initialValueSet && this._inputElement) {
      this._rendered = true;
      this._setInputValue(this._displayedValue);
      if (this.isTypeCheckable) {
        this._inputElement.checked = this._checked;
      }
      this._initialValueSet = true;
    }
    this._synchronizeA11y();
  }
  /**
   * A space-separated list of element IDs whose presence or content is controlled by the
   * time input when type='datetime'. On mobile devices, this is merged with aria-controls
   * and date-aria-controls to describe the native date time input.
   * @type {string}
   */
  get timeAriaControls() {
    return this._timeAriaControls;
  }
  set timeAriaControls(references) {
    this._timeAriaControls = references;
    this.ariaObserver.connectLiveIdRef(references, reference => {
      this._timeAriaControls = reference;
    });
  }

  /**
   * A space-separated list of element IDs that provide labels for the date input when type='datetime'.
   * On mobile devices, this is merged with aria-labelled-by and time-aria-labelled-by to describe
   * the native date time input.
   * @type {string}
   */
  get dateAriaLabelledBy() {
    return this._dateAriaLabelledBy;
  }
  set dateAriaLabelledBy(references) {
    this._dateAriaLabelledBy = references;
    this.ariaObserver.connectLiveIdRef(references, reference => {
      this._dateAriaLabelledBy = reference;
    });
  }

  /**
   * A space-separated list of element IDs that provide labels for the time input when type='datetime'.
   * On mobile devices, this is merged with aria-labelled-by and date-aria-labelled-by to describe
   * the native date time input.
   * @type {string}
   *
   */
  get timeAriaLabelledBy() {
    return this._timeAriaLabelledBy;
  }
  set timeAriaLabelledBy(references) {
    this._timeAriaLabelledBy = references;
    this.ariaObserver.connectLiveIdRef(references, reference => {
      this._timeAriaLabelledBy = reference;
    });
  }

  /**
   * A space-separated list of element IDs that provide descriptive labels for the time input when
   * type='datetime'. On mobile devices, this is merged with aria-described-by and date-aria-described-by
   * to describe the native date time input.
   *  @type {string}
   *
   */
  get timeAriaDescribedBy() {
    return this._timeAriaDescribedBy;
  }
  set timeAriaDescribedBy(references) {
    this._timeAriaDescribedBy = references;
    this.ariaObserver.connectLiveIdRef(references, reference => {
      this._timeAriaDescribedBy = reference;
    });
  }

  /**
   * A space-separated list of element IDs whose presence or content is controlled by the
   * date input when type='datetime'. On mobile devices, this is merged with aria-controls
   * and time-aria-controls to describe the native date time input.
   * @type {string}
   *
   */
  get dateAriaControls() {
    return this._dateAriaControls;
  }
  set dateAriaControls(references) {
    this._dateAriaControls = references;
    this.ariaObserver.connectLiveIdRef(references, reference => {
      this._dateAriaControls = reference;
    });
  }

  /**
   * A space-separated list of element IDs that provide descriptive labels for the date input when
   * type='datetime'. On mobile devices, this is merged with aria-described-by and time-aria-described-by
   * to describe the native date time input.
   * @type {string}
   */
  get dateAriaDescribedBy() {
    return this._dateAriaDescribedBy;
  }
  set dateAriaDescribedBy(references) {
    this._dateAriaDescribedBy = references;
    this.ariaObserver.connectLiveIdRef(references, reference => {
      this._dateAriaDescribedBy = reference;
    });
  }

  /**
   * A space-separated list of element IDs whose presence or content is controlled by the input.
   * @type {string}
   */
  get ariaControls() {
    return this._ariaControls;
  }
  set ariaControls(references) {
    this._ariaControls = references;
    if (this._rendered) {
      this.connectAriaControls();
    }
    reflectAttribute(this, ARIA_CONTROLS, references);
  }

  /**
   * A space-separated list of element IDs that provide labels for the input.
   * @type {string}
   */
  get ariaLabelledBy() {
    // native shadow version returns the mirrored values
    return this._rendered && this.isNativeShadow ? this._inputElement.getAttribute(ARIA_LABELLEDBY) : this._ariaLabelledBy;
  }
  set ariaLabelledBy(references) {
    this._ariaLabelledBy = references;
    if (this._rendered) {
      this.connectAriaLabelledBy();
    }
  }

  /**
   * A space-separated list of element IDs that provide descriptive labels for the input.
   * @type {string}
   */
  get ariaDescribedBy() {
    // native shadow version returns the mirrored values
    return this._rendered && this.isNativeShadow ? this._inputElement.getAttribute(ARIA_DESCRIBEDBY) : this._ariaDescribedBy;
  }
  set ariaDescribedBy(references) {
    this._ariaDescribedBy = references;
    if (this._rendered) {
      this.connectAriaDescribedBy();
    }
  }
  get isNativeShadow() {
    return this._primitiveComponent?.isNativeShadow || this._isNativeShadow;
  }

  /**
   * Connect aria-labelledby to the ariaObserver.
   */
  connectAriaLabelledBy() {
    if (this._primitiveComponent) {
      this.ariaObserver.connect({
        attribute: ARIA_LABELLEDBY,
        targetNode: this._inputElement,
        relatedNodes: this._primitiveComponent.ariaLabelledByElements,
        relatedNodeIds: this._ariaLabelledBy
      });
    }
  }

  /**
   * Connect aria-describedby to the ariaObserver.
   */
  connectAriaDescribedBy() {
    if (this._primitiveComponent) {
      this.ariaObserver.connect({
        attribute: ARIA_DESCRIBEDBY,
        targetNode: this._inputElement,
        relatedNodes: this._primitiveComponent.ariaDescribedByElements,
        relatedNodeIds: this._ariaDescribedBy
      });
    }
  }

  /**
   * Connect aria-controls to the ariaObserver.
   */
  connectAriaControls() {
    if (this._primitiveComponent) {
      this.ariaObserver.connect({
        attribute: ARIA_CONTROLS,
        targetNode: this._inputElement,
        relatedNodeIds: this._ariaControls
      });
    }
  }

  /**
   * A Boolean value for aria-invalid.
   * @type {boolean}
   */
  get ariaInvalid() {
    return this._ariaInvalid;
  }
  set ariaInvalid(value) {
    let _value = typeof value == 'undefined' ? undefined : normalizeBoolean(value); /* Preserving Backward compatibility donot set any aria-invalid when not specified by user */
    this._ariaInvalid = _value;
  }
  /**
   * String value with the formatter to be used for number input. Valid values include
   * decimal, percent, percent-fixed, and currency.
   * @type {string}
   */
  get formatter() {
    // Formatters are applicable to the number type
    // If the primitive exists, retrieve value from primitive-input-simple
    if (this.isTypeNumber && this._primitiveComponent) {
      return this._primitiveComponent.formatter;
    }
    return this._formatter;
  }
  set formatter(value) {
    this._formatter = value;

    // If the primitive exists, retrieve value from primitive-input-simple
    // The primitive will normalize the value
    if (this.isTypeNumber && this._primitiveComponent) {
      this._primitiveComponent.formatter = this._formatter;
    }
  }

  /**
   * The type of the input. Valid values are checkbox, checkbox-button,
   * color, date, datetime, time, email, file, password, range, search,
   * tel, url, number, and toggle. This value defaults to text.
   * @type {string}
   * @default text
   */
  get type() {
    return this._type;
  }
  set type(value) {
    const normalizedValue = normalizeString(value);
    this._type = normalizedValue === 'datetime' ? 'datetime-local' : normalizedValue;
    this._validateType(normalizedValue);
    this._inputElementRefreshNeeded = true;
    if (this._rendered) {
      // The type is being changed after render, which means the input element may be different (eg. changing
      // from text to 'checkbox', so we need to set the initial value again
      this._initialValueSet = false;

      // Reconnect aria attributes as the parentSelector is based on the input type
      this.connectAriaLabelledBy();
      this.connectAriaDescribedBy();
      this.connectAriaControls();
    }
    this._updateProxyInputAttributes(['type', 'value', 'max', 'min', 'required', 'pattern']);
  }

  /**
   * For the search type only. If present, a spinner is displayed to indicate that data is loading.
   * @type {boolean}
   * @default false
   */
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(value) {
    this._isLoading = normalizeBoolean(value);
  }

  /**
   * Specifies the regular expression that the input's value is checked against.
   * This attribute is supported for email, password, search, tel, text, and url types.
   * @type {string}
   *
   */
  get pattern() {
    if (this.isTypeColor) {
      return '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$';
    }
    return this._pattern;
  }
  set pattern(value) {
    this._pattern = value;
    this._updateProxyInputAttributes('pattern');
  }

  /**
   * The maximum number of characters allowed in the field.
   * Use this attribute with email, password, search, tel, text, and url input types only.
   * @type {number}
   */
  get maxLength() {
    return this._maxLength;
  }
  set maxLength(value) {
    this._maxLength = value;
    this._updateProxyInputAttributes('maxlength');
  }

  /**
   * Specifies the types of files that the server accepts. Use this attribute with file input type only.
   * @type {string}
   */
  get accept() {
    return this._accept;
  }
  set accept(value) {
    this._accept = value;
    this._updateProxyInputAttributes('accept');
  }

  /**
   * The minimum number of characters allowed in the field.
   * Use this attribute with email, password, search, tel, text, and url input types only.
   * @type {number}
   */
  get minLength() {
    return this._minLength;
  }
  set minLength(value) {
    this._minLength = value;
    this._updateProxyInputAttributes('minlength');
  }

  // number and date/time
  /**
   * The maximum acceptable value for the input.  Use this attribute with number,
   * range, date, time, and datetime input types only. For number and range type, the max value is a
   * decimal number. For the date, time, and datetime types, the max value must use a valid string for the type.
   * @type {decimal|string}
   */
  get max() {
    return this._max;
  }
  set max(value) {
    this._max = value;
    this._updateProxyInputAttributes('max');
  }

  /**
   * The minimum acceptable value for the input. Use this attribute with number,
   * range, date, time, and datetime input types only. For number and range types, the min value
   * is a decimal number. For the date, time, and datetime types, the min value must use a valid string for the type.
   * @type {decimal|string}
   */
  get min() {
    return this._min;
  }
  set min(value) {
    this._min = value;
    this._updateProxyInputAttributes('min');
  }

  /**
   * Granularity of the value, specified as a positive floating point number.
   * Use this attribute with number and range input types only.
   * Use 'any' when granularity is not a concern. This value defaults to 1.
   * @type {decimal|string}
   * @default 1
   */
  get step() {
    // This should be reconsidered as it in effect disabled any step support for datetime/time types on mobile
    if (this.isTypeDateTime || this.isTypeTime) {
      return 'any';
    }
    // It should probably default to '1' instead, but this means that we'd be explicitly passing step='1' to the
    // native input
    return this._step;
  }
  set step(value) {
    if (typeof value === 'string' && value.toLowerCase() === 'any') {
      this._step = 'any';
    } else {
      this._step = isUndefinedOrNull(value) || isNaN(value) ? undefined : String(value);
    }
    this._updateProxyInputAttributes('step');
  }

  /**
   * If present, the checkbox is selected.
   * @type {boolean}
   * @default false
   */
  get checked() {
    // checkable inputs can be part of a named group, in that case there won't be a change event thrown and so
    // the internal tracking _checked would be out of sync with the actual input value.
    if (this.isTypeCheckable && this._initialValueSet) {
      return this._inputElement.checked;
    }
    return this._checked;
  }
  set checked(value) {
    this._checked = normalizeBoolean(value);
    if (this._rendered) {
      if (this.isTypeCheckbox) {
        this._primitiveComponent.checked = this._checked;
      } else {
        this._inputElement.checked = this._checked;
      }
    }

    // Update proxy input should be set after _inputElement is updated.
    // because when update proxy input, it will use this.checked.
    // if not update this._inputElement, will lead to inconsistent state.
    this._updateProxyInputAttributes('checked');
    reflectAttribute(this, 'checked', this._checked);
  }

  /**
   * Specifies that a user can enter more than one value. Use this attribute with file and email input types only.
   * @type {boolean}
   * @default false
   */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = normalizeBoolean(value);
    this._updateProxyInputAttributes('multiple');
  }

  /**
   * Specifies the value of an input element.
   * @type {object}
   */
  get value() {
    if (this.isTypeSimple) {
      const subcomponent = this._primitiveComponent;
      if (subcomponent) {
        return subcomponent.value;
      }
    }
    return this._value;
  }
  set value(value) {
    // Setting value of a type='file' isn't allowed
    if (!this.isTypeFile) {
      this._value = normalizeInput(value);
      if (this.isTypeSimple) {
        const subcomponent = this._primitiveComponent;
        if (subcomponent) {
          subcomponent.value = this._value;
        }
      }
      this._updateProxyInputAttributes('value');

      // Again, due to the interop layer we need to check whether the value being set
      // is different, otherwise we're duplicating the sets on the input, which result
      // in different bugs like Japanese IME duplication of characters in Safari (likely a browser bug) or
      // character position re-set in IE11.
      if (this._rendered && this._inputElement.value !== this._displayedValue) {
        this._setInputValue(this._displayedValue);
      }
    }
  }

  /**
   * The variant changes the appearance of an input field.
   * Accepted variants include standard, label-inline, label-hidden, and label-stacked.
   * This value defaults to standard, which displays the label above the field.
   * Use label-hidden to hide the label but make it available to assistive technology.
   * Use label-inline to horizontally align the label and input field.
   * Use label-stacked to place the label above the input field.
   * @type {string}
   * @default standard
   */
  get variant() {
    return this._variant || VARIANT.STANDARD;
  }
  set variant(value) {
    this._variant = normalizeVariant(value);
    this.updateClassListForVariant();
    reflectAttribute(this, 'variant', this._variant);
  }

  /**
   * If present, the input field is disabled and users cannot interact with it.
   * @type {boolean}
   * @default false
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = normalizeBoolean(value);
    this._updateProxyInputAttributes('disabled');
    reflectAttribute(this, 'disabled', this.disabled);
  }

  /**
   * If present, the input field is read-only and cannot be edited by users.
   * @type {boolean}
   * @default false
   */
  get readOnly() {
    return this._readOnly;
  }
  set readOnly(value) {
    this._readOnly = normalizeBoolean(value);
    this._updateProxyInputAttributes('readonly');
    reflectAttribute(this, 'readonly', this.readOnly);
  }

  /**
   * If present, the input field must be filled out before the form is submitted.
   * @type {boolean}
   * @default false
   */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = normalizeBoolean(value);
    this._updateProxyInputAttributes('required');
  }

  /**
   * Specifies the time zone used when type='datetime' only. This value defaults to the user's Salesforce time zone setting.
   * @type {string}
   *
   */
  get timezone() {
    return this._timezone || userTimeZone;
  }
  set timezone(value) {
    this._timezone = value;
    // mobile date/time normalization of value/max/min depends on timezone, so we need to update here as well
    this._updateProxyInputAttributes(['value', 'max', 'min']);
  }

  /**
   * Help text detailing the purpose and function of the input.
   * This attribute isn't supported for file, toggle, and checkbox-button types.
   * @type {string}
   *
   */
  get fieldLevelHelp() {
    return this._fieldLevelHelp;
  }
  set fieldLevelHelp(value) {
    this._fieldLevelHelp = value;
  }

  /**
   * Specifies a shortcut key to activate or focus an element.
   * @type {string}
   *
   */
  get accessKey() {
    return this._accesskey;
  }
  set accessKey(newValue) {
    this._accesskey = newValue;
  }

  /**
   * A FileList that contains selected files. Use this attribute with the file input type only.
   * @type {object}
   *
   */
  get files() {
    if (this.isTypeFile) {
      return this._primitiveComponent.files;
    }
    return null;
  }

  /**
   * Represents the validity states that an element can be in, with respect to constraint validation.
   * @type {object}
   *
   */
  get validity() {
    return this._constraint.validity;
  }

  /**
   * Not moving selectionStart and selectionEnd to the inner component. Looks like
   * one of the expected error/fail cases is that the component throws an error in the console,
   * if the user attempts to set it on a non-supported type (like range, file, checkbox).
   * That can only happen from `lightning-input`. To avoid duplicating code, it's best to keep
   * this here.
   */

  /**
   * Specifies the index of the first character to select in the input element.
   * This attribute is supported only for text type.
   * Use with selection-end to programmatically set or read the position of
   * selected text.
   */
  get selectionStart() {
    if (this._inputElement && 'selectionStart' in this._inputElement) {
      return this._inputElement.selectionStart;
    }
    return undefined;
  }
  set selectionStart(index) {
    if (this._inputElement && 'selectionStart' in this._inputElement) {
      this._inputElement.selectionStart = index;
    }
  }
  /**
   * Specifies the index of the last character to select in the input element.
   * This attribute is supported only for text type.
   * Use with selection-start to programmatically set or read the position of
   * selected text.
   */
  get selectionEnd() {
    if (this._inputElement && 'selectionEnd' in this._inputElement) {
      return this._inputElement.selectionEnd;
    }
    return undefined;
  }
  set selectionEnd(index) {
    if (this._inputElement && 'selectionEnd' in this._inputElement) {
      this._inputElement.selectionEnd = index;
    }
  }

  /**
   * Checks if the input is valid.
   * @returns {boolean} Indicates whether the element meets all constraint validations.
   */
  checkValidity() {
    return this._constraint.checkValidity();
  }

  /**
   * Sets a custom error message to be displayed when a form is submitted.
   * @param {string} message - The string that describes the error. If message is an empty string, the error message is reset.
   */
  setCustomValidity(message) {
    this._constraint.setCustomValidity(message);
  }

  /**
   * Displays the error messages and returns false if the input is invalid.
   * If the input is valid, reportValidity() clears displayed error messages and returns true.
   * @returns {boolean} - The validity status of the input fields.
   */
  reportValidity() {
    return this._constraint.reportValidity(message => {
      if (this.isTypeDesktopTime) {
        reflectAttribute(this._inputElement.comboboxComponent, 'invalid', !this.checkValidity());
      }
      if (this._rendered && !this.isNativeInput) {
        this._inputElement.showHelpMessage(message);
        return;
      }
      if (this._rendered && this.isTypePrimitiveInput) {
        this._shouldShowHelpMessage = false;
        this._helpMessageChanged = true;
      }
      this._helpMessage = message;
    });
  }

  /**
   * Displays error messages on invalid fields.
   * An invalid field fails at least one constraint validation and returns false when checkValidity() is called.
   */
  showHelpMessageIfInvalid() {
    this.reportValidity();
  }

  /**
   * Sets focus on the input element.
   */
  focus() {
    if (this._rendered) {
      this._inputElement.focus();
    }
  }

  /**
   * Removes keyboard focus from the input element.
   */
  blur() {
    if (this._rendered) {
      this._inputElement.blur();
    }
  }
  get primitiveSelector() {
    if (this.isTypeSimple) {
      return 'lightning-primitive-input-simple';
    }
    if (this.isTypeCheckboxButton) {
      return 'lightning-primitive-input-checkbox-button';
    }
    if (this.isTypeToggle) {
      return 'lightning-primitive-input-toggle';
    }
    if (this.isTypeColor) {
      return 'lightning-primitive-input-color';
    }
    if (this.isTypeCheckbox) {
      return 'lightning-primitive-input-checkbox';
    }
    if (this.isTypeRadio) {
      return 'lightning-primitive-input-radio';
    }
    if (this.isTypeFile) {
      return 'lightning-primitive-input-file';
    }
    return null;
  }
  get shouldShowHelpMessage() {
    return this._shouldShowHelpMessage && this._helpMessage;
  }

  /************************* INPUT TYPE GETTERS *************************/

  get isTypePrimitiveInput() {
    return this.isTypeSimple || this.isTypeCheckboxButton || this.isTypeCheckbox || this.isTypeToggle || this.isTypeColor || this.isTypeRadio || this.isTypeFile;
  }
  get isTypeNumber() {
    return this.type === 'number';
  }
  get isTypeTelephone() {
    return this.type === 'tel';
  }
  get isTypeUrl() {
    return this.type === 'url';
  }
  get isTypeEmail() {
    // To test against native change this to type="emails"
    return this.type === 'email';
  }
  get isTypeCheckable() {
    return this.isTypeCheckbox || this.isTypeCheckboxButton || this.isTypeRadio || this.isTypeToggle;
  }
  get isTypeToggle() {
    return this.type === 'toggle';
  }
  get isTypeText() {
    return this.type === 'text';
  }
  get isTypeCheckbox() {
    return this.type === 'checkbox';
  }
  get isTypeRadio() {
    return this.type === 'radio';
  }
  get isTypeCheckboxButton() {
    return this.type === 'checkbox-button';
  }
  get isTypeFile() {
    return this.type === 'file';
  }
  get isTypeColor() {
    return this.type === 'color';
  }
  get isTypeDate() {
    return this.type === 'date';
  }
  get isTypeDateTime() {
    return this.type === 'datetime' || this.type === 'datetime-local';
  }
  get isTypeTime() {
    return this.type === 'time';
  }
  get isTypeSearch() {
    return this.type === 'search';
  }
  get isTypeMobileDate() {
    return this.isTypeDate && !this._isDesktopBrowser();
  }
  get isTypeDesktopDate() {
    return this.isTypeDate && this._isDesktopBrowser();
  }
  get isTypeMobileDateTime() {
    return this.isTypeDateTime && !this._isDesktopBrowser();
  }
  get isTypeDesktopDateTime() {
    return this.isTypeDateTime && this._isDesktopBrowser();
  }
  get isTypeMobileTime() {
    return this.isTypeTime && !this._isDesktopBrowser();
  }
  get isTypeDesktopTime() {
    return this.isTypeTime && this._isDesktopBrowser();
  }
  get isTypeSimple() {
    const type = this.type;
    return type === 'text' || type === 'number' || type === 'email' || type === 'tel' || type === 'url' || type === 'search' || type === 'password' || type === 'range' || !type || !this._isDesktopBrowser() && (type === 'date' || type === 'time' || type === 'datetime' || type === 'datetime-local');
  }
  get isNativeInput() {
    return !(this.isTypeDesktopDate || this.isTypeDesktopDateTime || this.isTypeDesktopTime);
  }
  get _primitiveComponent() {
    if (!this.cachedPrimitiveComponent) {
      this.cachedPrimitiveComponent = this.template.querySelector(this.primitiveSelector);
    }
    return this.cachedPrimitiveComponent;
  }
  /************************* GETTERS *************************/

  /*** Accessibility ***/

  get computedAriaLabel() {
    const ariaValues = [];

    // merge all date & time arias on mobile since it's displayed as a single field
    if (this.isTypeMobileDateTime) {
      ariaValues.push(this.dateAriaLabel);
      ariaValues.push(this.timeAriaLabel);
    }
    if (this.ariaLabel) {
      ariaValues.push(this.ariaLabel);
    }
    return normalizeAriaAttribute(ariaValues);
  }
  get computedAriaInvalid() {
    // W-8796658: aria-invalid should always follow the visual indication of errors
    return computeAriaInvalid(this._helpMessage, this.value, this.ariaInvalid);
  }

  /****** ******/

  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }
  get isLabelStacked() {
    return this.variant === VARIANT.LABEL_STACKED;
  }
  get accesskey() {
    return this._accesskey;
  }
  get i18n() {
    return i18n;
  }
  get computedLabelClass() {
    const classnames = classSet('slds-form-element__label');
    if (this.isTypeCheckable || this.isTypeFile) {
      // do nothing
    } else if (this.isTypeToggle) {
      classnames.add('slds-m-bottom_none');
    } else {
      classnames.add('slds-no-flex');
    }
    return classnames.add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }
  get normalizedMax() {
    return this._normalizeDateTimeString(this.max);
  }
  get normalizedMin() {
    return this._normalizeDateTimeString(this.min);
  }
  get _inputElement() {
    if (!this._cachedInputElement || this._inputElementRefreshNeeded) {
      this._inputDragonDecorated = false;
      let inputElement;
      if (this.isTypeDesktopDate) {
        inputElement = this.template.querySelector('lightning-datepicker');
      } else if (this.isTypeDesktopDateTime) {
        inputElement = this.template.querySelector('lightning-datetimepicker');
      } else if (this.isTypeDesktopTime) {
        inputElement = this.template.querySelector('lightning-timepicker');
      } else {
        inputElement = this._primitiveComponent.inputElement;
        this._inputDragonDecorated = true;
        decorateInputForDragon(inputElement);
      }
      this._inputElementRefreshNeeded = false;
      this._cachedInputElement = inputElement;
    }
    return this._cachedInputElement;
  }
  get _inputTypeForValidity() {
    let inputType = 'text';
    if (this.isTypeSimple) {
      if (this.isTypeEmail) {
        inputType = 'text';
      } else if (this.isTypeNumber) {
        inputType = 'number';
      } else {
        inputType = this.type;
      }
    } else if (this.isTypeCheckable) {
      inputType = this.isTypeRadio ? 'radio' : 'checkbox';
    } else if (this.isTypeFile) {
      inputType = 'file';
    } else if (this.isTypeDateTime) {
      inputType = 'datetime-local';
    } else if (this.isTypeTime) {
      inputType = 'time';
    } else if (this.isTypeDate) {
      inputType = 'date';
    }
    return inputType;
  }
  get _displayedValue() {
    if (this.isTypeNumber || this.isTypeMobileDate || this.isTypeMobileDateTime || this.isTypeMobileTime) {
      const subcomponent = this._primitiveComponent;
      return subcomponent.getDisplayedValue();
    }
    return this._value;
  }
  get isStandardVariant() {
    return this.variant === VARIANT.STANDARD || this.variant === VARIANT.LABEL_HIDDEN;
  }
  get _ignoreRequired() {
    // If uploading via the drop zone or via the input directly, we should
    // ignore the required flag as a file has been uploaded
    return this.isTypeFile && this._required && this.files && this.files.length;
  }
  get _constraint() {
    if (!this._constraintApi) {
      const overrides = {
        badInput: () => {
          if (!this._rendered) {
            return false;
          }
          if (this.isTypeNumber) {
            return !isValidNumber(this._numberRawValue);
          }
          if (!this.isNativeInput) {
            return this._inputElement.hasBadInput();
          }
          return this._inputElement.validity.badInput;
        },
        tooLong: () =>
        // since type=number is type=text in the dom when not in focus
        // we should always return false as maxlength doesn't apply
        this.isNativeInput && !this.isTypeNumber && this._rendered && this._inputElement.validity.tooLong,
        tooShort: () =>
        // since type=number is type=text in the dom when not in focus
        // we should always return false as minlength doesn't apply
        this.isNativeInput && !this.isTypeNumber && this._rendered && this._inputElement.validity.tooShort,
        patternMismatch: () => this.isNativeInput && this._rendered && this._inputElement.validity.patternMismatch
      };
      // International email support, note that the type="email" does not currently
      // support full unicode that 226+ now supports
      if (this.isTypeEmail) {
        overrides.typeMismatch = () => {
          if (this._multiple) {
            return !isValidMultipleEmails(this.value);
          }
          return !isValidEmail(this.value);
        };
      }
      // FF, IE and Safari don't support type datetime-local,
      // IE and Safari don't support type date or time
      // we need to defer to the base component to check rangeOverflow/rangeUnderflow.
      // Due to the custom override, changing the type to or from datetime/time would affect the validation
      if (this.isTypeDesktopDateTime || this.isTypeDesktopTime || this.isTypeDesktopDate) {
        overrides.rangeOverflow = () => {
          // input type='time' is timezone agnostic, so we should remove the timezone designator before comparison
          const max = this.isTypeDesktopTime ? normalizeTime(this.max) : this.max;
          return isAfter(this.value, max);
        };
        overrides.rangeUnderflow = () => {
          // input type='time' is timezone agnostic, so we should remove the timezone designator before comparison
          const min = this.isTypeDesktopTime ? normalizeTime(this.min) : this.min;
          return isBefore(this.value, min);
        };
        overrides.stepMismatch = () => false;
      }
      if (this.isIE11) {
        overrides.stepMismatch = () => false;
      }
      this._constraintApi = new FieldConstraintApiWithProxyInput(() => {
        // The date/time components display their own errors and have custom messages for badInput and rangeOverflow/Underflow.
        if (!this.isNativeInput) {
          return this._inputElement;
        }
        return this;
      }, overrides);

      // Buggy: This (or similar code) creates invalid DOM when attributes like 'step' are passed
      // directly along to the input element if the type doesn't allow those attributes.
      // For example: 'step' is allowed on type=number but not type=text.
      // See https://www.w3.org/TR/html52/sec-forms.html#apply for which attributes apply to which types.
      this._constraintApiProxyInputUpdater = this._constraintApi.setInputAttributes({
        type: () => this._inputTypeForValidity,
        // We need to normalize value so that it's consumable by the proxy input (otherwise the value
        // will be invalid for the native input)
        value: () => this._normalizeDateTimeString(this.value),
        checked: () => this.checked,
        maxlength: () => this.maxLength,
        minlength: () => this.minLength,
        // 'pattern' depends on type
        pattern: () => this.pattern,
        // 'max' and 'min' depend on type and timezone
        max: () => this.normalizedMax,
        min: () => this.normalizedMin,
        step: () => this.step,
        accept: () => this.accept,
        multiple: () => this.multiple,
        disabled: () => this.disabled,
        readonly: () => this.readOnly,
        // depends on type and whether an upload has been made
        required: () => this.required && !this._ignoreRequired
      });
    }
    return this._constraintApi;
  }
  get hasExternalLabel() {
    return this.variant === VARIANT.LABEL_HIDDEN && this.ariaLabelledBy && this.ariaLabelledBy.length;
  }
  get helptextAlternativeText() {
    return formatLabel(i18n.helpTextAlternativeText, this.label);
  }
  get isAutoCompleteSupported() {
    return this.isTypeTelephone || this.isTypeUrl || this.isTypeSearch || this.isTypeEmail || this.isTypeText;
  }
  get templateRootNode() {
    return this.template.host.getRootNode();
  }
  handleFocus() {
    this.interactingState.enter();
    if (this.isTypeColor) {
      this._isColorPickerPanelOpen = false;
    }
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleBlur(event) {
    this.interactingState.leave();
    if (!event.relatedTarget || !this.template.contains(event.relatedTarget)) {
      this.dispatchEvent(new CustomEvent('blur'));
    }
  }
  handleCheckboxClick() {
    if (this.template.activeElement === null) {
      this.template.querySelector("[type='checkbox']").focus();
    }
  }
  handleChange(event) {
    event.stopPropagation();
    this._dispatchCommitEvent();
    this._dispatchChangeEvent();
  }
  handleCommit() {
    this._dispatchCommitEvent();
  }
  handlePrimitiveInputFileChange() {
    const detail = {
      files: this.files,
      value: this._inputElement.value
    };
    this._updateProxyInputAttributes('required');
    this._updateValueAndValidityAttribute(detail.value);
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail
    }));
  }
  handlePrimitiveInputSimpleChange() {
    this.interactingState.enter();
    this._updateProxyInputAttributes('value');
  }
  _dispatchCommitEvent() {
    this.dispatchEvent(new CustomEvent('commit'));
  }
  _dispatchChangeEventWithDetail(detail) {
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail
    }));
  }
  _validateType(type) {
    assert(type !== 'hidden', `<lightning-input> The type attribute value "hidden" is invalid. Use a regular <input type="hidden"> instead.`);
    assert(type !== 'submit' && type !== 'reset' && type !== 'image' && type !== 'button', `<lightning-input> The type attribute value "${type}" is invalid. Use <lightning:button> instead.`);
    if (this.isTypeRadio) {
      assert(!this.required, `<lightning-input> The required attribute is not supported on radio inputs directly. It should be implemented at the radio group level.`);
    }
  }

  /**
   * Label is a required attribute.
   * Throw error if an invalid value is passed to the label attribute
   */
  validateRequiredAttributes() {
    const {
      label
    } = this;
    assert(typeof label === 'string' && label.length, `<lightning-input> The required label attribute value "${label}" is invalid.`);
  }
  _setInputValue(value) {
    if (this._inputDragonDecorated) {
      // The underlying input has been modified to dispatch an 'input' event when a direct value set
      // is used to allow for Dragon Natural Speaking (which sets the value directly on the inputs instead
      // dispatching an input event against the input). Since we're in a programatic set here (ie. set
      // not resulting from a direct user interaction) we want a default setter behaviour that doesn't
      // dispatch any events.
      setDecoratedDragonInputValueWithoutEvent(this._inputElement, value);
    } else {
      this._inputElement.value = value;
    }
  }
  _dispatchChangeEvent() {
    // TODO: investigate removing this in a future update
    // possibly phase out the interactingState entirely
    this.interactingState.enter();
    const detail = {};
    if (this.isTypeCheckable) {
      this._updateCheckedAndValidityAttribute(this._inputElement.checked);
      detail.checked = this._checked;
    }
    if (!this.isTypeCheckable) {
      if (!this.isTypeNumber) {
        detail.value = this._inputElement.value;
      }
      if (this.isTypeMobileDateTime) {
        detail.value = normalizeDateTimeToUTC(detail.value, this.timezone);
      } else if (this.isTypeMobileTime) {
        detail.value = normalizeTime(detail.value);
      }
      this._updateValueAndValidityAttribute(detail.value);
    }
    this._dispatchChangeEventWithDetail(detail);
  }
  _isDesktopBrowser() {
    return formFactor === 'Large';
  }
  _updateValueAndValidityAttribute(value) {
    this._value = value;
    this._updateProxyInputAttributes('value');
  }
  _updateCheckedAndValidityAttribute(value) {
    this._checked = value;
    this._updateProxyInputAttributes('checked');
    reflectAttribute(this, 'checked', this._checked);
  }
  _updateProxyInputAttributes(attributes) {
    if (this._constraintApiProxyInputUpdater) {
      this._constraintApiProxyInputUpdater(attributes);
    }
  }
  _updateInputDisplayValueIfTypeNumber() {
    // Displayed value depends on the format number, so if we're not showing the raw
    // number we should update the value
    if (this._rendered && this.isTypeNumber && !this._showRawNumber && this._inputElement) {
      this._setInputValue(this._displayedValue);
    }
  }

  /**
   * Updates the class list on the host element based on the variant
   */
  updateClassListForVariant() {
    classListMutation(this.classList, {
      'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
      'slds-form-element_horizontal': this.variant === VARIANT.LABEL_INLINE
    });
  }
  _normalizeDateTimeString(value) {
    let result = value;
    if (this.isTypeDate) {
      result = normalizeDate(value);
    } else if (this.isTypeTime) {
      result = normalizeTime(value);
    } else if (this.isTypeDateTime) {
      result = normalizeUTCDateTime(value, this.timezone);
    }
    return result;
  }
  _updateDateOrTimePickerA11y(elem) {
    synchronizeAttrs(elem, {
      ariaLabelledByElement: this._ariaLabelledBy,
      ariaDescribedByElements: this._ariaDescribedBy,
      ariaControlsElement: this._ariaControls,
      [ARIA_LABEL]: this.computedAriaLabel
    });
  }
  _updateDateTimePickerA11y(elem) {
    synchronizeAttrs(elem, {
      // datepicker aria attributes
      dateAriaLabelledBy: this.dateAriaLabelledBy,
      dateAriaDescribedBy: this.dateAriaDescribedBy,
      dateAriaControls: this.dateAriaControls,
      dateAriaLabel: this.dateAriaLabel,
      // timepicker aria attributes
      timeAriaLabelledBy: this.timeAriaLabelledBy,
      timeAriaDescribedBy: this.timeAriaDescribedBy,
      timeAriaControls: this.timeAriaControls,
      timeAriaLabel: this.timeAriaLabel
    });
  }
  _synchronizeA11y() {
    // each of these templates are mutually exclusive and are selected
    // depending on the [type] of input.
    const datepicker = this.template.querySelector('lightning-datepicker');
    const timepicker = this.template.querySelector('lightning-timepicker');
    const datetimepicker = this.template.querySelector('lightning-datetimepicker');
    // determine which template type is present,
    // and update a11y props accordingly
    if (datepicker) {
      this._updateDateOrTimePickerA11y(datepicker);
    } else if (timepicker) {
      this._updateDateOrTimePickerA11y(timepicker);
    } else if (datetimepicker) {
      this._updateDateTimePickerA11y(datetimepicker);
    }
  }
  /*LWC compiler v3.0.0*/
}
LightningInput.delegatesFocus = true;
_registerDecorators(LightningInput, {
  publicProps: {
    placeholder: {
      config: 0
    },
    name: {
      config: 0
    },
    label: {
      config: 0
    },
    messageWhenBadInput: {
      config: 0
    },
    messageWhenPatternMismatch: {
      config: 0
    },
    messageWhenRangeOverflow: {
      config: 0
    },
    messageWhenRangeUnderflow: {
      config: 0
    },
    messageWhenStepMismatch: {
      config: 0
    },
    messageWhenTooShort: {
      config: 0
    },
    messageWhenTooLong: {
      config: 0
    },
    messageWhenTypeMismatch: {
      config: 0
    },
    messageWhenValueMissing: {
      config: 0
    },
    messageToggleActive: {
      config: 0
    },
    messageToggleInactive: {
      config: 0
    },
    ariaLabel: {
      config: 0
    },
    autocomplete: {
      config: 3
    },
    dateStyle: {
      config: 0
    },
    timeStyle: {
      config: 0
    },
    dateAriaLabel: {
      config: 0
    },
    formatFractionDigits: {
      config: 0
    },
    timeAriaControls: {
      config: 3
    },
    dateAriaLabelledBy: {
      config: 3
    },
    timeAriaLabelledBy: {
      config: 3
    },
    timeAriaDescribedBy: {
      config: 3
    },
    dateAriaControls: {
      config: 3
    },
    dateAriaDescribedBy: {
      config: 3
    },
    ariaControls: {
      config: 3
    },
    ariaLabelledBy: {
      config: 3
    },
    ariaDescribedBy: {
      config: 3
    },
    ariaInvalid: {
      config: 3
    },
    ariaHasPopup: {
      config: 0
    },
    formatter: {
      config: 3
    },
    type: {
      config: 3
    },
    isLoading: {
      config: 3
    },
    pattern: {
      config: 3
    },
    maxLength: {
      config: 3
    },
    accept: {
      config: 3
    },
    minLength: {
      config: 3
    },
    max: {
      config: 3
    },
    min: {
      config: 3
    },
    step: {
      config: 3
    },
    checked: {
      config: 3
    },
    multiple: {
      config: 3
    },
    value: {
      config: 3
    },
    variant: {
      config: 3
    },
    disabled: {
      config: 3
    },
    readOnly: {
      config: 3
    },
    required: {
      config: 3
    },
    timezone: {
      config: 3
    },
    fieldLevelHelp: {
      config: 3
    },
    accessKey: {
      config: 3
    },
    files: {
      config: 1
    },
    validity: {
      config: 1
    },
    selectionStart: {
      config: 3
    },
    selectionEnd: {
      config: 3
    }
  },
  publicMethods: ["checkValidity", "setCustomValidity", "reportValidity", "showHelpMessageIfInvalid", "focus", "blur"],
  track: {
    _timeAriaDescribedBy: 1,
    _timeAriaLabelledBy: 1,
    _timeAriaControls: 1,
    _dateAriaControls: 1,
    _dateAriaDescribedBy: 1,
    _dateAriaLabelledBy: 1,
    _value: 1,
    _type: 1,
    _pattern: 1,
    _max: 1,
    _min: 1,
    _step: 1,
    _disabled: 1,
    _readOnly: 1,
    _required: 1,
    _checked: 1,
    _isLoading: 1,
    _multiple: 1,
    _timezone: 1,
    _helpMessage: 1,
    _isColorPickerPanelOpen: 1,
    _fieldLevelHelp: 1,
    _accesskey: 1,
    _maxLength: 1,
    _minLength: 1,
    _accept: 1,
    _variant: 1,
    _numberRawValue: 1,
    _ariaInvalid: 1,
    _autocomplete: 1
  },
  fields: ["_shouldShowHelpMessage", "_helpMessageChanged", "_formatter", "_showRawNumber", "_initialValueSet", "_rendered"]
});
export default _registerComponent(LightningInput, {
  tmpl: _tmpl,
  sel: "lightning-input",
  apiVersion: 59
});
LightningInput.interopMap = {
  exposeNativeEvent: {
    change: true,
    focus: true,
    blur: true
  }
};