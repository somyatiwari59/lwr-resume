import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./baseCombobox.html";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import labelAriaSelectedOptions from '@salesforce/label/LightningCombobox.ariaSelectedOptions';
import labelDeselectOptionKeyboard from '@salesforce/label/LightningCombobox.deselectOptionKeyboard';
import labelLoadingText from '@salesforce/label/LightningCombobox.loadingText';
import labelPillCloseButtonAlternativeText from '@salesforce/label/LightningCombobox.pillCloseButtonAlternativeText';
import labelPlaceholder from '@salesforce/label/LightningCombobox.placeholder';
import { handleKeyDownOnInput } from './keyboard';
import { BaseComboboxEvents } from './baseComboboxEvents';
import { classSet } from 'lightning/utils';
import { assert, computeAriaInvalid, getRealDOMId, normalizeBoolean, normalizeString, reflectAttribute, synchronizeAttrs, isCSR } from 'lightning/utilsPrivate';
// remove-next-line-for-c-namespace
import { AutoPosition, Direction } from 'lightning/positionLibrary';
import { VARIANT } from 'lightning/inputUtils';
import AriaObserver from 'lightning/ariaObserver';
const i18n = {
  ariaSelectedOptions: labelAriaSelectedOptions,
  deselectOptionKeyboard: labelDeselectOptionKeyboard,
  pillCloseButtonAlternativeText: labelPillCloseButtonAlternativeText,
  loadingText: labelLoadingText,
  placeholder: labelPlaceholder
};
const SMALL_MIN_HEIGHT = '2.25rem';
const MEDIUM_MIN_HEIGHT = '6.75rem';
const INPUT_ELEMENT_SELECTOR = '.slds-combobox__input';
const INPUT_PART_ELEMENT_SELECTOR = '[part~="input-text"]';
const FAUX_INPUT_BUTTON_ELEMENT_SELECTOR = `${INPUT_ELEMENT_SELECTOR}.slds-input_faux`;
const VARIANT_LOOKUP = 'lookup';

/**
 * Breakpoint when viewport height doesn't fit 10 items in the dropdown
 * 834px is the height of 11 inch iPad in horizontal mode.
 */
const VIEWPORT_HEIGHT_SMALL = 834;
const ARIA_CONTROLS = 'aria-controls';
const ARIA_LABELLEDBY = 'aria-labelledby';
const ARIA_DESCRIBEDBY = 'aria-describedby';
const ARIA_LABEL = 'aria-label';
const ARIA_ACTIVEDESCENDANT = 'aria-activedescendant';
const ARIA_INVALID = 'aria-invalid';
class LightningBaseCombobox extends LightningElement {
  /**
   * Controls auto-filling of the input. Set the attribute to pass
   * through autocomplete values to be interpreted by the browser.
   * By default autocomplete is off to avoid overlap of dropdowns.
   * @type {string}
   */
  get autocomplete() {
    return this._autocomplete;
  }
  set autocomplete(value) {
    this._autocomplete = value || 'off';
  }
  constructor() {
    super();
    this.inputText = '';
    this.inputIconName = 'utility:down';
    this.inputIconSize = 'x-small';
    this.inputIconAlternativeText = void 0;
    this.inputMaxlength = void 0;
    this.showInputActivityIndicator = false;
    this.required = false;
    this.placeholder = i18n.placeholder;
    this.inputLabel = void 0;
    this.customRole = 'combobox';
    this.customAriaHasPopup = 'listbox';
    this.name = void 0;
    this.inputPill = void 0;
    this.attributionLogoUrl = void 0;
    this.attributionLogoAssistiveText = void 0;
    this._showDropdownActivityIndicator = false;
    this._items = [];
    this._disabled = false;
    this._dropdownVisible = false;
    this._hasDropdownOpened = false;
    this._highlightedOptionElementId = null;
    this._variant = void 0;
    this._dropdownHeight = 'standard';
    this._readonly = false;
    this._logoLoaded = false;
    this._inputDescribedBy = [];
    this._inputAriaControls = void 0;
    this._activeElementDomId = void 0;
    this._autocomplete = 'off';
    this._dropdownAlignment = 'left';
    this.originDisableDefaultHighlight = void 0;
    this.privateDisableDefaultHighlight = void 0;
    this._editingMode = false;
    this._connected = false;
    this.ariaObserver = null;
    this._events = new BaseComboboxEvents(this);
    this.setupAriaObserverIfAbsent();
  }
  renderedCallback() {
    this.dispatchEvent(new CustomEvent('ready', {
      detail: {
        id: this.inputId,
        name: this.name
      }
    }));
    this.syncAriaObserver();
    this.synchronizeA11y();
  }
  connectedCallback() {
    this.setupAriaObserverIfAbsent();
    if (isCSR) {
      this.overrideDropdownAlignment();
    }
    this.classList.add('slds-combobox_container');
    this._connected = true;
    this._keyboardInterface = this.dropdownKeyboardInterface();
  }
  disconnectedCallback() {
    this._connected = false;
    this._listBoxElementCache = undefined;
    this.removeAriaObserver();
  }
  setupAriaObserverIfAbsent() {
    if (!this.ariaObserver) {
      this.ariaObserver = new AriaObserver(this);
    }
  }
  removeAriaObserver() {
    if (this.ariaObserver && this.ariaObserver.disconnect) {
      this.ariaObserver.disconnect();
      this.ariaObserver = null;
    }
  }
  get dropdownAlignment() {
    return this._dropdownAlignment;
  }
  set dropdownAlignment(value) {
    this._dropdownAlignment = value;
  }
  get inputControlsElement() {
    return this._inputAriaControls;
  }
  set inputControlsElement(el) {
    this._inputAriaControls = el;
    this.connectAriaControls();
  }
  syncAriaObserver() {
    this.setupAriaObserverIfAbsent();
    const ariaObserverSyncExists = this.ariaObserver && this.ariaObserver.sync;
    if (this.isConnected && ariaObserverSyncExists) {
      this.ariaObserver.sync();
    }
  }
  connectAriaControls() {
    this.connectAriaAttribute({
      attribute: ARIA_CONTROLS,
      relatedNodeIds: this._inputAriaControls,
      relatedNodes: this.dropdownElement
    });
  }
  connectAriaAttribute(params) {
    this.setupAriaObserverIfAbsent();
    if (this.ariaObserver && this.ariaObserver.connect) {
      const relatedNodeIds = Array.isArray(params.relatedNodeIds) ? params.relatedNodeIds.map(el => getRealDOMId(el)).join(' ') : getRealDOMId(params.relatedNodeIds);
      this.ariaObserver.connect(_objectSpread(_objectSpread({}, params), {}, {
        targetSelector: INPUT_ELEMENT_SELECTOR,
        relatedNodeIds
      }));
    }
  }
  get ariaErrorMessageElements() {
    return this._ariaErrorMessageElements;
  }
  set ariaErrorMessageElements(elements) {
    this._ariaErrorMessageElements = elements;
    this.connectAriaDescribedByElements();
  }
  get inputDescribedByElements() {
    return this._inputDescribedBy;
  }
  set inputDescribedByElements(elements) {
    this._inputDescribedBy = elements;
    this.connectAriaDescribedByElements();
  }
  connectAriaDescribedByElements() {
    this.connectAriaAttribute({
      attribute: ARIA_DESCRIBEDBY,
      relatedNodeIds: this._inputDescribedBy,
      relatedNodes: this.ariaErrorMessageElements
    });
  }
  get inputLabelledByElement() {
    return this._inputLabelledBy;
  }
  set inputLabelledByElement(element) {
    this._inputLabelledBy = element;
    this.connectAriaAttribute({
      attribute: ARIA_LABELLEDBY,
      relatedNodeIds: element
    });
  }
  get rootAriaNode() {
    return this.ariaObserver.root;
  }
  set rootAriaNode(root) {
    this.setupAriaObserverIfAbsent();
    if (this.ariaObserver) {
      this.ariaObserver.root = root;
    }
  }
  get inputId() {
    return getRealDOMId(this.inputElement);
  }
  get dropdownHeight() {
    return this._dropdownHeight;
  }
  set dropdownHeight(height) {
    this._dropdownHeight = normalizeString(height, {
      fallbackValue: 'standard',
      validValues: ['standard', 'small']
    });
  }
  get showDropdownActivityIndicator() {
    return this._showDropdownActivityIndicator;
  }
  set showDropdownActivityIndicator(value) {
    this._showDropdownActivityIndicator = normalizeBoolean(value);
    if (this._connected) {
      if (this._showDropdownActivityIndicator) {
        if (this._shouldOpenDropDown) {
          this.openDropdownIfNotEmpty();
        }
      } else if (this._dropdownVisible && this.isDropdownEmpty) {
        this.closeDropdown();
      }
    }
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = normalizeBoolean(value);
    reflectAttribute(this, 'disabled', this._disabled);
    if (this._disabled && this._dropdownVisible) {
      this.closeDropdown();
    }
  }
  get readOnly() {
    return this._readonly;
  }
  set readOnly(value) {
    this._readonly = normalizeBoolean(value);
    if (this._readonly && this._dropdownVisible) {
      this.closeDropdown();
    }
  }
  get variant() {
    return this._variant || VARIANT.STANDARD;
  }
  set variant(value) {
    this._variant = normalizeString(value, {
      fallbackValue: VARIANT.STANDARD,
      validValues: [VARIANT.STANDARD, VARIANT.LABEL_INLINE, VARIANT.LABEL_STACKED, VARIANT.LABEL_HIDDEN, VARIANT_LOOKUP]
    });
  }
  get items() {
    return this._unprocessedItems;
  }
  set items(items = []) {
    this._unprocessedItems = items;
    this.updateItems(items);
    if (this._connected) {
      if (this._hasDropdownOpened) {
        // The dropdown has already been opened at least once, so process the items immediately
        this.updateItems(items);
        if (this._dropdownVisible) {
          // The dropdown is visible but there are no items to show, close it
          if (this.isDropdownEmpty) {
            this.closeDropdown();
          } else {
            // We have new items, update highlight
            this.highlightDefaultItem();

            // Since the items have changed, the positioning should be recomputed
            // remove-next-line-for-c-namespace
            this.startDropdownAutoPositioning();
          }
        }
      }
      if (this._shouldOpenDropDown) {
        this.openDropdownIfNotEmpty();
      }
    }
  }

  /**
   * Whether disable the highlighting default item behavior
   *
   * @type {boolean}
   * @memberof LightningBaseCombobox
   */
  get disableDefaultHighlight() {
    return this.originDisableDefaultHighlight;
  }
  set disableDefaultHighlight(value) {
    this.originDisableDefaultHighlight = value;
    this.privateDisableDefaultHighlight = normalizeBoolean(value);
  }
  highlightInputText() {
    if (this._connected) {
      // Safari has issues with invoking set selection range immediately in the 'focus' handler, instead
      // we'd be doing it in an animation frame. Remove the requestAnimationFrame once/if this is fixed
      // in Safari
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      requestAnimationFrame(() => {
        const {
          inputElement
        } = this;
        inputElement.setSelectionRange(0, inputElement.value.length);
      });
    }
  }
  get showAttribution() {
    return this.attributionLogoUrl;
  }
  focus() {
    if (this._connected) {
      this.inputElement.focus();
    }
  }
  focusAndOpenDropdownIfNotEmpty() {
    if (this._connected) {
      if (!this._inputHasFocus) {
        this.focus();
      }
      this.openDropdownIfNotEmpty();
    }
  }
  blur() {
    if (this._connected) {
      this.inputElement.blur();
    }
  }
  synchronizeA11y() {
    const input = this.inputElement;
    if (!input) {
      return;
    }
    synchronizeAttrs(input, {
      [ARIA_LABEL]: this.isUserInputDisabled ? this.computedButtonTriggerAriaLabel : this.inputLabel,
      [ARIA_INVALID]: this.computedAriaInvalid,
      [ARIA_ACTIVEDESCENDANT]: this.computedAriaActiveDescendant
    });
    if (this.isConnected) {
      this.connectAriaControls();
    }
  }
  itemId(index) {
    return this.inputId + '-' + index;
  }
  itemIndexFromId(id) {
    // Extracts the index from an item id.
    return parseInt(id.substring(id.lastIndexOf('-') + 1), 10);
  }
  processItem(item) {
    const itemCopy = {};

    // Supported item properties:
    // 'type' (string): option-inline, option-card
    // 'highlight' (boolean): Whether to highlight the item when dropdown opens
    // 'iconName': left icon name
    // 'iconSize': left icon size
    // 'iconAlternativeText': assistive text for the left icon
    // 'rightIconName': right icon name
    // 'rightIconSize': right icon size
    // 'rightIconAlternativeText': assistive text for the right icon
    // 'text': text to display
    // 'subText': sub-text to display (only option-card supports it)
    // 'value': value associated with the option
    // 'checked': has this been chosen by the user.  Different than selected as that is hover.
    itemCopy.type = item.type;
    itemCopy.iconName = item.iconName;
    itemCopy.iconSize = item.iconSize;
    itemCopy.iconAlternativeText = item.iconAlternativeText;
    itemCopy.rightIconName = item.rightIconName;
    itemCopy.rightIconSize = item.rightIconSize;
    itemCopy.rightIconAlternativeText = item.rightIconAlternativeText;
    itemCopy.text = item.text;
    itemCopy.subText = item.subText;
    itemCopy.value = item.value;
    // so that we do not get aria-checked="undefined"
    itemCopy.checked = item.checked || false;

    // extra metadata needed
    itemCopy.selectable = ['option-card', 'option-inline'].indexOf(item.type) >= 0;
    if (itemCopy.selectable) {
      itemCopy.index = this._selectableItems;
      itemCopy.id = this.itemId(itemCopy.index);
      this._selectableItems += 1;
      if (item.highlight) {
        this._highlightedItemIndex = itemCopy.index;
      }
    }
    return itemCopy;
  }
  get isAutocompleteEnabled() {
    return this.autocomplete && this.autocomplete !== 'off';
  }
  get isStandardOrLabelVariant() {
    return [VARIANT.STANDARD, VARIANT.LABEL_INLINE, VARIANT.LABEL_STACKED, VARIANT.LABEL_HIDDEN].includes(this.variant);
  }
  get isDefaultReadOnlyTypes() {
    return this.isStandardOrLabelVariant || this.hasInputPill;
  }

  /**
   * Returns true for comboboxes that never allow user input
   * Used to determine if input or button should be rendered
   */
  get isUserInputDisabled() {
    return this.isStandardOrLabelVariant && !this.isAutocompleteEnabled;
  }
  get _inputAriaReadOnly() {
    // For standard combobox, if the dropdown is open, we must make the input readonly,
    // so the user can type and search in the dropdown list
    // For grouped combobox, the input must remain editable because the search is done through
    // the input.
    if (this._dropdownVisible && this.isStandardOrLabelVariant) {
      return true;
    }
    return (
      // we want Autocomplete to override the "default assumptions"
      // UNLESS the parent component deliberately determines it is readOnly
      this._readonly || !this.isAutocompleteEnabled && this.isDefaultReadOnlyTypes
    );
  }

  /**
   * Do not set aria-activedescendant when editing the text in the combobox.
   * Rest of the times, set it to active element DOM id.
   */
  get computedAriaActiveDescendant() {
    return this.isUserInputDisabled || !this._editingMode ? this._activeElementDomId : undefined;
  }
  get computedAriaAutocomplete() {
    if (this.hasInputPill) {
      // no aria-autocomplete when pill is showing
      return null;
    }
    return this._inputAriaReadOnly ? 'none' : 'list';
  }
  get computedPlaceholder() {
    return this.hasInputPill ? this.inputPill.label : this.placeholder;
  }
  get computedInputValue() {
    return this.hasInputPill ? this.inputPill.label : this.inputText;
  }
  get computedButtonTriggerAriaLabel() {
    const label = this.inputLabel;
    const value = this.computedInputValue || this.computedPlaceholder;
    if (!label) {
      return value;
    }
    return `${label}, ${value}`;
  }
  handleListboxScroll(event) {
    // We don't want this to bubble up to the modal which due to event retargeting wouldn't be able
    // to know what is actually being scrolled and thus may lead to the scrolling of the modal
    event.stopPropagation();
    const listbox = event.target;
    const height = listbox.getBoundingClientRect().height;
    const maxScroll = listbox.scrollHeight - height;
    // Account for variation between browsers when it comes to calculation of margins/padding
    const buffer = 20;
    const bottomReached = listbox.scrollTop + buffer >= maxScroll;
    if (bottomReached) {
      this._events.dispatchEndReached();
    }
  }
  get listboxElement() {
    if (!this._listBoxElementCache) {
      this._listBoxElementCache = this.template.querySelector('[role="listbox"]');
    }
    return this._listBoxElementCache;
  }
  get computedUniqueElementId() {
    return this.inputId;
  }
  get dropdownElement() {
    return isCSR ? this.template.querySelector('[data-dropdown-element]') : null;
  }
  get i18n() {
    return i18n;
  }
  get computedDropdownTriggerClass() {
    return classSet('slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click').add({
      'slds-is-open': this._dropdownVisible
    }).toString();
  }
  get computedDropdownClass() {
    const alignment = this.dropdownAlignment;
    let dropdownLengthClass = '';
    if (this._dropdownVisible) {
      if (this.dropdownHeight === 'standard') {
        // When viewport height is small(i.e. 11 inch iPad), there may not be enough space to fit 10 items
        // either on top or bottom of the input. Therefore show 7 items instead.
        if (window.innerHeight <= VIEWPORT_HEIGHT_SMALL) {
          dropdownLengthClass = 'slds-dropdown_length-with-icon-7';
        } else {
          dropdownLengthClass = 'slds-dropdown_length-with-icon-10';
        }
      } else if (this.dropdownHeight === 'small') {
        dropdownLengthClass = 'slds-dropdown_length-with-icon-5';
      }
    }
    return classSet(`slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid ${dropdownLengthClass}`).add({
      'slds-dropdown_left': alignment === 'left' || alignment === 'auto',
      'slds-dropdown_center': alignment === 'center',
      'slds-dropdown_right': alignment === 'right',
      'slds-dropdown_bottom': alignment === 'bottom-center',
      'slds-dropdown_bottom slds-dropdown_right slds-dropdown_bottom-right': alignment === 'bottom-right',
      'slds-dropdown_bottom slds-dropdown_left slds-dropdown_bottom-left': alignment === 'bottom-left'
    }).toString();
  }
  get computedInputClass() {
    const classes = classSet('slds-combobox__input');
    classes.add({
      'slds-input_faux': this.isUserInputDisabled,
      //rendering button
      'slds-input': !this.isUserInputDisabled,
      //rendering input
      'slds-is-disabled': this.disabled,
      'slds-combobox__input-value': this.computedInputValue,
      'slds-input-has-icon_group-right': !this.computedInputValue && this.showInputActivityIndicator
    });
    return classes.toString();
  }
  get _shouldOpenDropDown() {
    // If items were empty and through a user interaction the dropdown should have opened, and if the
    // component still has the focus we'll open it on items update instead.
    return !this.dropdownDisabled && this._inputHasFocus && this._requestedDropdownOpen;
  }
  get dropdownDisabled() {
    return this.readOnly || this.disabled;
  }
  handleOptionClick(event) {
    if (event.target.hasAttribute('aria-selected')) {
      event.stopPropagation();
      event.preventDefault();
      this.selectOptionAndCloseDropdown(event.target);
    }
  }
  handleOptionMouseEnter(event) {
    if (event.target.hasAttribute('aria-selected')) {
      this._editingMode = false;
      this.highlightOption(event.target);
    }
  }
  handleDropdownMouseLeave() {
    this.removeHighlight();

    // This is to account for when a user makes a mousedown press on the dropdown and then leaves the dropdown
    // area, it would leave the dropdown open even though the focus would no longer be on the input
    if (!this._inputHasFocus) {
      this.closeDropdown();
    }
  }
  handleTriggerClick(event) {
    event.stopPropagation();
    this.allowBlur();
    if (this.dropdownDisabled) {
      return;
    }
    if (!this.hasInputPill) {
      // toggle dropdown only for readonly combobox, only open the dropdown otherwise
      // if it's not already opened.
      if (this._inputAriaReadOnly) {
        if (this._dropdownVisible) {
          this.closeDropdown();
        } else {
          this.openDropdownIfNotEmpty();
        }
      } else {
        this.openDropdownIfNotEmpty();
      }
      this.inputElement.focus();
    }
  }
  handlePillKeyDown(event) {
    if (this.dropdownDisabled) {
      return;
    }
    // 'Del' is IE11 specific, remove once IE11 is no longer supported
    if (event.key === 'Delete' || event.key === 'Del' || event.key === 'Backspace') {
      this.handlePillRemove();
    }
  }
  handleInputKeyDown(event) {
    if (this.dropdownDisabled) {
      return;
    }
    // For details: https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (this.hasInputPill) {
      this.handlePillKeyDown(event);
    } else {
      handleKeyDownOnInput({
        event,
        currentIndex: this.getCurrentHighlightedOptionIndex(),
        dropdownInterface: this._keyboardInterface
      });
    }
  }
  handleTextChange(event) {
    const inputValue = event.target.value;
    if (this.variant === VARIANT.STANDARD) {
      let selectedItem;
      const itemByValue = this._unprocessedItems.find(item => item.value === inputValue);
      selectedItem = itemByValue;
      if (!itemByValue) {
        const itemByLabel = this._unprocessedItems.find(item => item.value && item.text === inputValue);
        selectedItem = itemByLabel;
      }
      if (selectedItem) {
        this._events.dispatchSelect(selectedItem.value);
      }
    } else {
      this._events.dispatchTextChange(inputValue);
    }
  }
  handleFocus() {
    this._inputHasFocus = true;
    this._events.dispatchFocus();
  }
  handleInput(event) {
    // Do not dispatch any events if the pill is showing, this is specifically an IE11 problem,
    // which fires an 'input' event when the placeholder on an input is changed (which is what happens when
    // the pill is shown). The check can be removed when IE11 is no longer supported.
    if (!this.hasInputPill) {
      this._events.dispatchTextInput(event.target.value);
    }
  }
  handleBlur() {
    this._inputHasFocus = false;
    if (this._cancelBlur) {
      return;
    }
    this.closeDropdown();
    this._events.dispatchBlur();
  }
  handleDropdownMouseDown(event) {
    const mainButton = 0;
    if (event.button === mainButton) {
      this.cancelBlur();
    }
  }
  handleDropdownMouseUp() {
    // We need this to make sure that if a scrollbar is being dragged with the mouse, upon release
    // of the drag we allow blur, otherwise the dropdown would not close on blur since we'd have cancel blur
    // set
    this.allowBlur();
  }
  highlightOption(option) {
    this.removeHighlight();
    if (option) {
      option.highlight();
      this._highlightedOptionElement = option;
      this._highlightedOptionElementId = option.getAttribute('data-item-id');
      // active element is a component id getter works properly
      this._activeElementDomId = option.id;
    }
    this.synchronizeA11y();
  }
  highlightOptionAndScrollIntoView(optionElement) {
    if (this._selectableItems.length === 0 || !optionElement) {
      return;
    }
    this.highlightOption(optionElement);
    scrollIntoViewIfNeeded(optionElement, this.listboxElement);
  }
  removeHighlight() {
    const option = this._highlightedOptionElement;
    if (option) {
      option.removeHighlight();
      this._highlightedOptionElement = null;
      this._highlightedOptionElementId = null;
      this._activeElementDomId = null;
    }
  }
  selectOptionAndCloseDropdown(optionElement) {
    this.closeDropdown();
    this.inputElement.focus();
    const selectedValue = optionElement.getAttribute('data-value');
    this._events.dispatchSelect(selectedValue);
  }
  handleInputSelect(event) {
    event.stopPropagation();
  }
  openDropdownIfNotEmpty() {
    if (this._dropdownVisible) {
      // Already visible
      return;
    }
    const noOptions = !Array.isArray(this.items) || this.items.length === 0;
    // Do not dispatch the open request event if there already was a request to open
    if (noOptions && !this._requestedDropdownOpen) {
      // Dispatch dropdown open request
      this._events.dispatchDropdownOpenRequest();
    }

    // Do not open if there's nothing to show in the dropdown (eg. no options and no dropdown activity indicator)
    if (this.isDropdownEmpty) {
      // We use this attribute to flag whether an attempt has been made via user-interaction
      // to open the dropdown
      this._requestedDropdownOpen = true;
      return;
    }
    if (!this._hasDropdownOpened) {
      if (this._unprocessedItems) {
        this.updateItems(this._unprocessedItems);
      }
      this._hasDropdownOpened = true;
    }
    this._requestedDropdownOpen = false;
    this._dropdownVisible = true;

    // remove-next-line-for-c-namespace
    this.startDropdownAutoPositioning();
    this.highlightDefaultItem();
    this._events.dispatchDropdownOpen();
  }
  closeDropdown() {
    if (!this._dropdownVisible) {
      // Already closed
      return;
    }
    // remove-next-line-for-c-namespace
    this.stopDropdownPositioning();
    this.removeHighlight();
    this._dropdownVisible = false;
  }
  findOptionElementByIndex(index) {
    return this.template.querySelector(`[data-item-id="${this.itemId(index)}"]`);
  }
  allowBlur() {
    this._cancelBlur = false;
  }
  cancelBlur() {
    this._cancelBlur = true;
  }
  getCurrentHighlightedOptionIndex() {
    if (this._highlightedOptionElementId && this._highlightedOptionElementId.length > 0) {
      return this.itemIndexFromId(this._highlightedOptionElementId);
    }
    return -1;
  }
  get inputElement() {
    return isCSR ? this.template.querySelector(INPUT_ELEMENT_SELECTOR) : null;
  }

  // remove-next-line-for-c-namespace
  startDropdownAutoPositioning() {
    if (this.dropdownAlignment !== 'auto') {
      return;
    }
    if (!this._autoPosition) {
      this._autoPosition = new AutoPosition(this);
    }

    // when using dropdown-alignment='auto' positioning and standard variant lighting-combobox
    // the selector for 'target' is determined by this.isUserInputDisabled
    // when TRUE the target is a BUTTON element acting as a faux / fake INPUT element
    // when FALSE the target is an INPUT element
    // NOTE: isUserInputDisabled is NOT determined by combobox.disabled
    // instead isUserInputDisabled is determined by
    // this.isStandardOrLabelVariant && !this.isAutocompleteEnabled (which is an internal variable)
    // this means that the INPUT is often NOT present, and instead a BUTTON is
    // this selector for .start({ target }) is used to
    // position the element from so this.isUserInputDisabled
    // must be taken into account so the proper selector can be used
    // the 'element' below is always the same without IF/ELSE, so there
    // is not a need to switch between selectors
    const selectorToUse = this.isUserInputDisabled ? FAUX_INPUT_BUTTON_ELEMENT_SELECTOR : INPUT_PART_ELEMENT_SELECTOR;
    this._autoPosition.start({
      target: () => this.template.querySelector(selectorToUse),
      element: () => this.template.querySelector('div.slds-dropdown'),
      align: {
        horizontal: Direction.Left,
        vertical: Direction.Top
      },
      targetAlign: {
        horizontal: Direction.Left,
        vertical: Direction.Bottom
      },
      autoFlip: true,
      alignWidth: true,
      autoShrinkHeight: true,
      minHeight: this._selectableItems < 3 ? SMALL_MIN_HEIGHT : MEDIUM_MIN_HEIGHT,
      keepInViewport: true
    });
  }

  // remove-next-line-for-c-namespace
  stopDropdownPositioning() {
    if (this._autoPosition) {
      this._autoPosition.stop();
    }
  }
  get hasInputPill() {
    return this.inputPill && Object.keys(this.inputPill).length > 0;
  }
  get isCloseVisible() {
    if (this.disabled) {
      return false;
    }
    return this.hasInputPill;
  }
  handlePillRemove() {
    this.inputElement.focus();
    this._events.dispatchPillRemove(this.inputPill);
  }
  get computedFormElementClass() {
    const hasIcon = this.hasInputPill && this.inputPill.iconName;
    return classSet('slds-combobox__form-element slds-input-has-icon').add({
      'slds-input-has-icon_right': !hasIcon,
      'slds-input-has-icon_left-right': hasIcon
    }).toString();
  }
  get computedAriaExpanded() {
    return this._dropdownVisible ? 'true' : 'false';
  }
  updateItems(items) {
    if (!items) {
      return;
    }
    assert(Array.isArray(items), '"items" must be an array');
    this._selectableItems = 0;
    this._highlightedItemIndex = 0;
    this._items = items.map(item => {
      if (item.items) {
        // This is a group
        const groupCopy = {
          label: item.label
        };
        groupCopy.items = item.items.map(groupItem => {
          return this.processItem(groupItem);
        });
        return groupCopy;
      }
      return this.processItem(item);
    });
  }
  highlightDefaultItem() {
    this.removeHighlight();
    if (!this.privateDisableDefaultHighlight && !this._editingMode) {
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      requestAnimationFrame(() => {
        this.highlightOptionAndScrollIntoView(this.findOptionElementByIndex(this._highlightedItemIndex));
      });
    }
  }
  get isDropdownEmpty() {
    // If the activity indicator is showing then it's not empty
    return !this.showDropdownActivityIndicator && (!Array.isArray(this.items) || this.items.length === 0);
  }
  dropdownKeyboardInterface() {
    const that = this;
    return {
      getTotalOptions() {
        return that._selectableItems;
      },
      selectByIndex(index) {
        that.selectOptionAndCloseDropdown(that.findOptionElementByIndex(index));
      },
      highlightOptionWithIndex(index) {
        that.highlightOptionAndScrollIntoView(that.findOptionElementByIndex(index));
      },
      isInputReadOnly() {
        return that._inputAriaReadOnly;
      },
      shouldPreventInputDeletion() {
        return that.isAutocompleteEnabled && that.isDefaultReadOnlyTypes;
      },
      highlightOptionWithText(currentIndex, text) {
        // This only supports a flat structure, groups are not supported
        for (let index = currentIndex + 1; index < that._items.length; index++) {
          const option = that._items[index];
          if (option.selectable && option.text && option.text.toLowerCase().indexOf(text.toLowerCase()) === 0) {
            that.highlightOptionAndScrollIntoView(that.findOptionElementByIndex(index));
            return;
          }
        }
        for (let index = 0; index < currentIndex; index++) {
          const option = that._items[index];
          if (option.selectable && option.text && option.text.toLowerCase().indexOf(text.toLowerCase()) === 0) {
            that.highlightOptionAndScrollIntoView(that.findOptionElementByIndex(index));
            return;
          }
        }
      },
      isDropdownVisible() {
        return that._dropdownVisible;
      },
      openDropdownIfNotEmpty() {
        that.openDropdownIfNotEmpty();
      },
      closeDropdown() {
        that.closeDropdown();
      },
      setEditingMode(isEditing) {
        that._editingMode = isEditing;
        if (isEditing) {
          that._activeElementDomId = null;
        }
        that.synchronizeA11y();
      }
    };
  }
  get computedAriaInvalid() {
    const ariaInvalid = this.template.host.getAttribute('data-aria-invalid');
    return computeAriaInvalid(ariaInvalid, true);
  }
  isShadowRoot(node) {
    return node && node.nodeType === 11;
  }
  parentNodeContainsClass(host, className) {
    let element = host;
    while (element.parentNode) {
      element = this.isShadowRoot(element.parentNode) ? element.parentNode.host : element.parentNode;
      if (element.classList && element.classList.contains(className)) {
        return true;
      }
    }
    return false;
  }
  overrideDropdownAlignment() {
    let isModal = this.parentNodeContainsClass(this.template.host, 'slds-modal');
    if (isModal) {
      this._dropdownAlignment = 'auto';
    }
  }
  /*LWC compiler v3.0.0*/
}
LightningBaseCombobox.delegatesFocus = true;
LightningBaseCombobox.validationOptOut = ['class'];
_registerDecorators(LightningBaseCombobox, {
  publicProps: {
    autocomplete: {
      config: 3
    },
    inputText: {
      config: 0
    },
    inputIconName: {
      config: 0
    },
    inputIconSize: {
      config: 0
    },
    inputIconAlternativeText: {
      config: 0
    },
    inputMaxlength: {
      config: 0
    },
    showInputActivityIndicator: {
      config: 0
    },
    required: {
      config: 0
    },
    placeholder: {
      config: 0
    },
    inputLabel: {
      config: 0
    },
    customRole: {
      config: 0
    },
    customAriaHasPopup: {
      config: 0
    },
    name: {
      config: 0
    },
    inputPill: {
      config: 0
    },
    attributionLogoUrl: {
      config: 0
    },
    attributionLogoAssistiveText: {
      config: 0
    },
    dropdownAlignment: {
      config: 3
    },
    inputControlsElement: {
      config: 3
    },
    ariaErrorMessageElements: {
      config: 3
    },
    inputDescribedByElements: {
      config: 3
    },
    inputLabelledByElement: {
      config: 3
    },
    rootAriaNode: {
      config: 3
    },
    dropdownHeight: {
      config: 3
    },
    showDropdownActivityIndicator: {
      config: 3
    },
    disabled: {
      config: 3
    },
    readOnly: {
      config: 3
    },
    variant: {
      config: 3
    },
    items: {
      config: 3
    },
    disableDefaultHighlight: {
      config: 3
    }
  },
  publicMethods: ["highlightInputText", "focus", "focusAndOpenDropdownIfNotEmpty", "blur"],
  track: {
    _items: 1
  },
  fields: ["_showDropdownActivityIndicator", "_disabled", "_dropdownVisible", "_hasDropdownOpened", "_highlightedOptionElementId", "_variant", "_dropdownHeight", "_readonly", "_logoLoaded", "_inputDescribedBy", "_inputAriaControls", "_activeElementDomId", "_autocomplete", "_dropdownAlignment", "originDisableDefaultHighlight", "privateDisableDefaultHighlight", "_editingMode", "_connected", "ariaObserver"]
});
export default _registerComponent(LightningBaseCombobox, {
  tmpl: _tmpl,
  sel: "lightning-base-combobox",
  apiVersion: 59
});
function scrollIntoViewIfNeeded(element, scrollingParent) {
  const parentRect = scrollingParent.getBoundingClientRect();
  const findMeRect = element.getBoundingClientRect();
  if (findMeRect.top < parentRect.top) {
    if (element.offsetTop + findMeRect.height < parentRect.height) {
      // If element fits by scrolling to the top, then do that
      scrollingParent.scrollTop = 0;
    } else {
      // Otherwise, top align the element
      scrollingParent.scrollTop = element.offsetTop;
    }
  } else if (findMeRect.bottom > parentRect.bottom) {
    // bottom align the element
    scrollingParent.scrollTop += findMeRect.bottom - parentRect.bottom;
  }
}