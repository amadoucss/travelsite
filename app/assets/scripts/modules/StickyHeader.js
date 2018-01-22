import $ from 'jquery';
// Waypoints makes working with scroll events a piece of cake (since waypoints doesn't have the main file so it needs to be pointed towards node_modules manually.)
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.arrowUp = $(".arrow-up");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.arrowUpLinks = $(".arrow-up a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      // Waypoint object exists in the web browser's global window's scope so we don't need to apply it to the RevealOnScroll.js
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
    this.arrowUpLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      /* The trigger element:
       * the first element of the jquery array object is the pointer to the native DOM element
       */
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
          that.arrowUp.addClass("arrow-up--is-visible");
        } else {
          that.siteHeader.removeClass("site-header--dark");
          that.arrowUp.removeClass("arrow-up--is-visible");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%",
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%",
      });
    });
  }
}

export default StickyHeader;
