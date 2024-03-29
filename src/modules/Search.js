import $ from "jquery";
class Search {
  //1. describe and create/iniate our objeck
  constructor() {
    this.openButtom = $(".js-search-trigger");
    this.closeButtom = $(".search-overlay__close");
    this.searchOverlay = $(".search-overlay");
    this.events();
    this.isOverlayOpen = false;
  }
  // 2. events
  events() {
    this.openButtom.on("click", this.openOverlay.bind(this));
    this.closeButtom.on("click", this.closeOverlay.bind(this));
    $(document).on("keydown", this.keyPressDispatcher.bind(this));
  }
  // 3. methods
  keyPressDispatcher(e) {
    if (e.keyCode === 83 && !this.isOverlayOpen) {
      this.openOverlay();
      this.isOverlayOpen = true;
    }

    if (e.keyCode === 27 && this.isOverlayOpen) {
      this.closeOverlay();
      this.isOverlayOpen = false;
    }
  }
  openOverlay() {
    this.searchOverlay.addClass("search-overlay--active");
    $("body").addClass("body-no-scroll");
  }
  closeOverlay() {
    this.searchOverlay.removeClass("search-overlay--active");
    $("body").removeClass("body-no-scroll");
  }
}

export default Search;
