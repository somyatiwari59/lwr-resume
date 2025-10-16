import { LightningElement, track } from "lwc";

export default class DesktopHeader extends LightningElement {
  @track candidateInfo = {
    name: "Somya Tiwari",
  };
  handleClick(event) {
    const button = event.currentTarget.dataset.button;
    if (button === "print") {
      this.dispatchEvent(new CustomEvent("printviewtoggle"));
    }
    if (button === "twitter") {
      this.openInNewTab("https://twitter.com/somyatiwari59");
    }
    if (button === "linkedin") {
      this.openInNewTab("https://linkedin.com/in/somyatiwari59");
    }
    if (button === "trailhead") {
      this.openInNewTab("https://trailblazer.me/id/somyatiwari59");
    }
    if (button === "call") {
      this.openInNewTab("tel:+919826010181");
    }
  }
  openInNewTab(url) {
    window.open(
      url,
      "_blank",
      "menubar=no,location=no,status=no,scrollbars=yes"
    );
  }
  isMobile;
  renderedCallback() {
    console.log(this.isMobile);
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    console.log(this.isMobile);
  }
  get totalExperience(){
    const startDate = new Date(2019, 5, 3); // Month is 0-indexed, so 5 represents June.
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    // Adjust the calculation if the current date's day is less than the start date's day
    if (currentDate.getDate() < startDate.getDate()) {
        months--;
    }
    // Handle negative months
    if (months < 0) {
        years--;
        months += 12; // Adjust the months and decrease year by 1
    }
    return `${years} Years and ${months} Months`;
  }
  get showPrivateInfo() {
    const params = new URLSearchParams(window.location.search);
    for (let param of params) {
        // Decode the parameter value
        let decodedValue;
        try {
            decodedValue = atob(param[0]);
        } catch (e) {
            continue;  // If decoding fails, continue to the next parameter
        }
        if (decodedValue === "showEncryptedData") {
            return true;
        }
    }
    return false;
}


}
