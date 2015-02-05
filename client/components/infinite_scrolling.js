Template.infinite_scrolling.helpers({
  moreResults: function() {
    var elements = this;
    // If, once the subscription is ready, we have less rows than we
    // asked for, we've got all the rows in the collection.
    return !(elements.count() < Session.get("itemsLimit"));
  }
});

// whenever #showMoreResults becomes visible, retrieve more results
var showMoreVisible = function () {
  var threshold, 
      target = $("#showMoreResults");
  if (!target.length){
    return;
  }
  threshold = $(window).scrollTop() + $(window).height() - target.height();
  if (target.offset().top < threshold) {
    if (!target.data("visible")) {
      // console.log("target became visible (inside viewable area)");
      target.data("visible", true);
      Session.set("itemsLimit", Session.get("itemsLimit") + config.ITEMS_INCREMENT);
    }
  } else {
    if (target.data("visible")) {
      // console.log("target became invisible (below viewable arae)");
      target.data("visible", false);
    }
  }        
};
 
// run the above func every time the user scrolls
$(window).scroll(showMoreVisible);