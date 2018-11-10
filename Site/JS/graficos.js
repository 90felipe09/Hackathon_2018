(function(){

  var Graph = function(index, element, canvas) {
    this.reference = canvas;
    this.$element = $(canvas);

    this.circle = $(element);
    this.index = index;

    this.canvasSize = null;
    this.centre = null;
    this.radius = null;
    this.startY = null;

    this.init();
  };

  // Alias Prototype
  var proto = Graph.prototype;

  /**
   *
   *
   */
  proto.init = function() {
    this.createChildren()
        .enable();
  };

  /**
   *
   *
   */
  proto.createChildren = function() {
    this.$ring = $('.js-graphItem');
    this.canvas = Snap(this.reference);



    return this;
  };

  /**
   *
   *
   */
  proto.enable = function() {
    this.getValue();
  };

  /**
   *
   *
   */
  proto.setValues = function() {
    this.canvasSize = this.$element.height();
    this.centre = this.canvasSize / 2;
    this.radius = (this.canvasSize * 0.8 / 2) - (20 * this.index);
    this.startY = this.centre - this.radius;

    return this;
  };


  /**
   *
   *
   */
  proto.getValue = function() {
    this.setValues();
    var val = this.circle.attr('data-val');
    val = parseInt(val, 10);
    var percent = val / 100;
    var color = this.circle.attr('data-color');

    this.animate(percent, color);
  };

  /**
   *
   *
   */
  proto.animate = function(percent, color) {
    var self = this;


    var path = "";
    var arc = this.canvas.path(path);

    var endpoint = percent*360;

    Snap.animate(0, endpoint, function(val){

      arc.remove();

      path = self.formPath(val);

      arc = self.canvas.path(path);
      arc.attr({
        stroke: color,
        fill: 'none',
        strokeWidth: 20
      });



    }, 2000, mina.easeinout);

  };


  proto.formPath = function(val) {
    var d = val;
    var dr = d - 90;
    var radians = Math.PI*(dr)/180;
    var endx = this.centre + this.radius * Math.cos(radians);
    var endy = this.centre + this.radius * Math.sin(radians);
    var largeArc = d >180 ? 1 : 0;

    if (endx === 99.99999999999999) {
      var path = "M"+ this.centre + "," + this.startY + " A" + this.radius + "," + this.radius +" 0 "+largeArc+",1 99.99999," + endy + ' Z';
    } else {
      var path = "M"+ this.centre + "," + this.startY + " A" + this.radius + "," + this.radius +" 0 "+largeArc+",1 " + endx + "," + endy;
    }
    return path;
  };


  $('.js-graphItem').each(function(index, element){
    this.text = new Graph(index, element, '#svg');
  });

})();
