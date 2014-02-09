
angular.element.prototype.addClass = function(cssClasses) {
  var x, el, existingClasses;
  if (cssClasses) {
    for(x=0; x<this.length; x++) {
      el = this[x];
      if(el.setAttribute) {

        if(cssClasses.indexOf(' ') < 0) {
          el.classList.add(cssClasses)
        } else {
          existingClasses = (' ' + (el.getAttribute('class') || '') + ' ')
                                  .replace(/[\n\t]/g, " ");

          angular.forEach(cssClasses.split(' '), function(cssClass) {
            cssClass = cssClass.trim();
            if (existingClasses.indexOf(' ' + cssClass + ' ') === -1) {
              existingClasses += cssClass + ' ';
            }
          });

          el.setAttribute('class', existingClasses.trim());
        }
      }
    }
  }
  return this;
};