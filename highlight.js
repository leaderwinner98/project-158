AFRAME.registerComponent('highlight', {
    schema: {
      selectedItemId: { type: 'string', default: '' }
    },
  
    init: function() {
      // Handle mouseenter and mouseleave events
      this.el.addEventListener('mouseenter', this.handleMouseEnterEvents.bind(this));
      this.el.addEventListener('mouseleave', this.handleMouseLeaveEvents.bind(this));
    },
  
    // Handle mouseenter events to select a thumbnail
    handleMouseEnterEvents: function(event) {
      const el = event.detail.intersectedEl;
  
      // Reset previously selected item's color
      if (this.data.selectedItemId) {
        const prevEl = document.querySelector(`#${this.data.selectedItemId}`);
        prevEl.setAttribute('material', 'color: white');
      }
  
      // Update selectedItemId and change color
      this.data.selectedItemId = el.id;
      el.setAttribute('material', 'color: blue');
    },
  
    // Handle mouseleave events to deselect a thumbnail
    handleMouseLeaveEvents: function(event) {
      const el = event.detail.intersectedEl;
  
      // Change the color of the card back to white when leaving
      if (el.id === this.data.selectedItemId) {
          el.setAttribute('material', 'color: white');
          this.data.selectedItemId = '';
      }
    }
  });
