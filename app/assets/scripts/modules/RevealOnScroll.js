import $ from 'jquery';
// Waypoints makes working with scroll events a piece of cake (since waypoints doesn't have the main file so it needs to be pointed towards node_modules manually.)
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        // The trigger element
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        /* 0%:   trigger the handler right after the top of the element touch the top of viewport
         * 100%: trigger the handler right after the top of the element touch the bottom of viewport
         */
        offset: that.offsetPercentage,
      });
    });
  }
}

export default RevealOnScroll;
