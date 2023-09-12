import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./tabset.html";
import { normalizeString } from 'lightning/utilsPrivate';
import { generateUniqueId } from 'lightning/inputUtils';
const tabClassPrefixByVariant = {
  scoped: 'slds-tabs_scoped',
  vertical: 'slds-vertical-tabs',
  standard: 'slds-tabs_default'
};

/**
 * Represents a list of tabs.
 * @slot default Placeholder for lightning-tab.
 */
class LightningTabset extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * Displays tooltip text when the mouse moves over the tabset.
     * @type {string}
     */
    this.title = void 0;
    this._variant = 'standard';
    this._tabHeaders = [];
    this._rerender = false;
  }
  connectedCallback() {
    this._tabByValue = {};
    this._connected = true;
    this.addEventListener('privatetabregister', this.handleTabRegister.bind(this));
    this.addEventListener('privatetabdatachange', this.handleTabDataChange.bind(this));
  }

  /**
   * in native shadow, must wait for this entire `tab-set` component to be rendered in order to
   * successfully querySelect `tab-bar` from it, in methods such as _updateTabBarHeaders
   * or _selectTab.
   * using _rerender to trigger renderedCallback and execute these methods in here
   * instead of the handleTabRegister method, where `tab-bar` is not querySelectable.
   */
  renderedCallback() {
    if (this._rerender && !this.template.synthetic) {
      this._rerender = false;
      this._updateTabBarHeaders(this._tabHeaders);
      this._selectTab(this._activeTabValue);
    }
  }
  disconnectedCallback() {
    this._connected = false;
  }

  /**
   * The variant changes the appearance of the tabset. Accepted variants are standard, scoped, and vertical.
   * @type {string}
   */
  get variant() {
    return this._variant;
  }
  set variant(value) {
    this._variant = normalizeString(value, {
      fallbackValue: 'standard',
      validValues: ['scoped', 'vertical']
    });
  }

  /**
   * Sets a specific tab to open by default using a string that matches a tab's value string. If not used, the first tab opens by default.
   * @type {string}
   */
  get activeTabValue() {
    return this._activeTabValue;
  }
  set activeTabValue(tabValue) {
    const newTabValue = tabValue && String(tabValue);
    if (!newTabValue || this._activeTabValue === newTabValue) {
      // already selected, do nothing
      return;
    }
    if (this._connected) {
      const tab = this._tabByValue[tabValue];
      if (tab) {
        this._selectTab(tabValue);
      }
    } else {
      this._activeTabValue = newTabValue;
    }
  }
  handleTabRegister(event) {
    event.stopPropagation();
    // setting this to true, will trigger _updateTabBarHeaders and _selectTab in renderedCallback
    this._rerender = true;
    const tab = event.target;
    tab.role = 'tabpanel';
    const generatedUniqueId = generateUniqueId('tab');
    if (!tab.id) {
      // We need a tab.id on the tab component to ensure that aria-controls from tab-bar can point to it
      tab.id = generatedUniqueId;
    }
    if (!tab.value) {
      tab.value = generatedUniqueId;
    }
    const tabValue = tab.value;
    tab.dataTabValue = tabValue;
    tab.ariaLabelledBy = tabValue + '__item';
    tab.classList.add(`${tabClassPrefixByVariant[this.variant]}__content`);
    tab.classList.add('slds-hide');
    tab.classList.remove('slds-show');
    const tabs = this.querySelectorAll(`[role='tabpanel']`);
    let tabIndex;
    for (tabIndex = 0; tabIndex < tabs.length; tabIndex++) {
      if (tabs[tabIndex].dataTabValue === tabValue) {
        break;
      }
    }
    event.detail.setDeRegistrationCallback(() => {
      if (!this._connected) {
        return;
      }
      const index = this._tabHeaders.findIndex(existingTab => existingTab.value === tabValue);
      if (index >= 0) {
        this._tabHeaders.splice(index, 1);
        this._updateTabBarHeaders(this._tabHeaders);
        this._tabByValue[tabValue] = undefined;
        if (this._activeTabValue === tab.value && this._tabHeaders.length > 0) {
          this._showTabContentForTabValue(this._tabHeaders[0].value);
        }
      }
    });
    this._tabHeaders.splice(tabIndex, 0, {
      value: tabValue,
      label: tab.label,
      node: tab,
      domId: tab.id,
      title: tab.title,
      iconName: tab.iconName,
      // the icon was incorrectly named assistive text..
      iconAlternativeText: tab.iconAssistiveText,
      endIconName: tab.endIconName,
      endIconAlternativeText: tab.endIconAlternativeText,
      showErrorIndicator: tab.showErrorIndicator
    });

    // need to leave this _updateTabBarHeaders here so that `tab-bar` can be updated
    // in the case of a "conditional tab". the _updateTabBarHeaders in the renderedCallback
    // has no knowledge of the new tab being added.
    // this call works here in the "conditional tab" case, as `tab-set` is already rendered.
    this._updateTabBarHeaders(this._tabHeaders);
    this._tabByValue[tabValue] = tab;

    // if no activeTabValue specified, we will default to the first registered tab
    if (!this._activeTabValue) {
      this._activeTabValue = tab.value;
    }
    if (this._activeTabValue === tab.value && this.template.synthetic) {
      this._selectTab(tabValue);
    }
  }
  _selectTab(value) {
    this._selectTabHeaderByTabValue(value);
    this._showTabContentForTabValue(value);
  }
  _showTabContentForTabValue(value) {
    const tab = this._tabByValue[value];
    if (!tab) {
      return;
    }
    if (this._activeTabValue) {
      const currentTab = this._tabByValue[this._activeTabValue];
      if (currentTab) {
        currentTab.classList.add('slds-hide');
        currentTab.classList.remove('slds-show');
      }
    }
    this._activeTabValue = tab.value;
    tab.classList.add('slds-show');
    tab.classList.remove('slds-hide');
    tab.loadContent();
  }
  handleTabSelected(event) {
    const selectedTabValue = event.detail.value;
    const tab = this._tabByValue[selectedTabValue];
    if (this._activeTabValue !== tab.value) {
      this._showTabContentForTabValue(selectedTabValue);
    }
  }
  handleTabDataChange(event) {
    const changedTab = event.target;
    const newTabValue = changedTab.value;
    const currentTabValue = changedTab.dataTabValue;
    const matchingTabHeader = this._tabHeaders.find(tabHeader => tabHeader.value === currentTabValue);
    if (matchingTabHeader) {
      matchingTabHeader.label = changedTab.label;
      matchingTabHeader.value = newTabValue;
      matchingTabHeader.title = changedTab.title;
      matchingTabHeader.iconName = changedTab.iconName;
      matchingTabHeader.iconAlternativeText = changedTab.iconAssistiveText;
      matchingTabHeader.endIconName = changedTab.endIconName;
      matchingTabHeader.endIconAlternativeText = changedTab.endIconAlternativeText;
      matchingTabHeader.showErrorIndicator = changedTab.showErrorIndicator;
    }
    this._updateTabBarHeaders(this._tabHeaders);
    if (currentTabValue !== newTabValue) {
      const tab = this._tabByValue[currentTabValue];
      if (tab) {
        tab.dataTabValue = newTabValue;
        this._tabByValue[newTabValue] = this._tabByValue[currentTabValue];
        this._tabByValue[currentTabValue] = undefined;
      }
      if (this._activeTabValue === currentTabValue) {
        this._activeTabValue = newTabValue;
      }
    }
  }

  /**
   * Need to set tabHeaders programmatically this way. If done declaratively, LWC appears to batch
   * the request to re-render the tab-bar until after all the tabs have been registered. If all tabs
   * haven't been registered, it may not carry out future operations on the tab-bar accurately.
   * Ex. it will not be able to find the selected default tab later during that tab's registration phase.
   * This would cause the active default tab to not be selected.
   *
   * @param {Array} headers
   */
  _updateTabBarHeaders(headers) {
    if (this.template.querySelector('lightning-tab-bar')) {
      this.template.querySelector('lightning-tab-bar').tabHeaders = headers.slice();
    }
  }
  _selectTabHeaderByTabValue(value) {
    const tabBar = this.template.querySelector('lightning-tab-bar');
    if (!this._connected || !tabBar) {
      return;
    }
    tabBar.selectTabByValue(value);
  }
  get computedClass() {
    return tabClassPrefixByVariant[this.variant];
  }

  /**
   * Focus currently selected tab.
   */
  focus() {
    this.template.querySelector('lightning-tab-bar').focus();
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningTabset, {
  publicProps: {
    title: {
      config: 0
    },
    variant: {
      config: 3
    },
    activeTabValue: {
      config: 3
    }
  },
  publicMethods: ["focus"],
  track: {
    _variant: 1,
    _tabHeaders: 1
  },
  fields: ["_rerender"]
});
export default _registerComponent(LightningTabset, {
  tmpl: _tmpl,
  sel: "lightning-tabset",
  apiVersion: 59
});