import BasicDropdownComponent from 'ember-basic-dropdown/components/basic-dropdown';

export default BasicDropdownComponent.extend({
  renderInPlace: true
  /*applyReposition(trigger, dropdown, positions) {
    let { top: triggerTop } = trigger.getBoundingClientRect();
    let $window = $(self.window);
    let scroll = { top: $window.scrollTop() };
    let triggerTopWithScroll = triggerTop + scroll.top;
    let dropdownTop = triggerTopWithScroll;

    positions.style.top = `${dropdownTop}px`;
    this._super(trigger, dropdown, positions);
  }*/
});

/*

let MENU_EDGE_MARGIN = 8;
export default BasicDropdownComponent.extend({
  tagName: 'md-menu',

  position: 'target',

  offset: '0 0',

  positionMode: Ember.computed('position', function() {
    let attachment = (this.get('position') || 'target').split(' ');

    // If attachment is a single item, duplicate it for our second value.
    // ie. 'target' -> 'target target'
    if (attachment.length === 1) {
      attachment.push(attachment[0]);
    }

    return {
      left: attachment[0],
      top: attachment[1]
    };
  }),

  offsets: Ember.computed('offset', function() {
    let offsets = (this.get('offset') || '0 0').split(' ').map(parseFloat);
    if (offsets.length === 2) {
      return {
        left: offsets[0],
        top: offsets[1]
      };
    } else if (offsets.length === 1) {
      return {
        top: offsets[0],
        left: offsets[0]
      };
    } else {
      throw Error('Invalid offsets specified. Please follow format <x, y> or <n>');
    }
  }),

  positionMenu(el) {
    // containerNode = wrapper
    let containerNode = el.get(0);
    // md-menu-content / any other child.z
    let openMenuNode = containerNode.firstElementChild;
    let openMenuNodeRect = openMenuNode.getBoundingClientRect();
    // body
    let boundryNode = document.body;
    let boundryNodeRect = boundryNode.getBoundingClientRect();

    // icon that opens the menu
    let originNode = this.$()[0].querySelector('.md-menu-origin');
    let originNodeRect = originNode.getBoundingClientRect();

    let bounds = {
      left: boundryNodeRect.left + MENU_EDGE_MARGIN,
      top: Math.max(boundryNodeRect.top, 0) + MENU_EDGE_MARGIN,
      bottom: Math.max(boundryNodeRect.bottom, Math.max(boundryNodeRect.top, 0) + boundryNodeRect.height) - MENU_EDGE_MARGIN,
      right: boundryNodeRect.right - MENU_EDGE_MARGIN
    };

    let alignTarget, alignTargetRect, existingOffsets;
    let positionMode = this.get('positionMode');

    if (positionMode.top === 'target' || positionMode.left === 'target' || positionMode.left === 'target-right') {
      // TODO: Allow centering on an arbitrary node, for now center on first menu-item's child
      // Icon INSIDE the wrapper.
      alignTarget = firstVisibleChild();
      if (!alignTarget) {
        throw Error('Error positioning menu. No visible children.');
      }
      alignTarget = alignTarget.querySelector('.md-menu-align-target') || alignTarget;
      alignTargetRect = alignTarget.getBoundingClientRect();

      existingOffsets = {
        top: parseFloat(containerNode.style.top || 0),
        left: parseFloat(containerNode.style.left || 0)
      };
    }

    let position = {};
    let transformOrigin = 'top ';

    switch (positionMode.top) {
      case 'target':
        position.top = existingOffsets.top + originNodeRect.top - alignTargetRect.top;
        break;
      // Support for mdMenuBar
      case 'top':
        position.top = originNodeRect.top;
        break;
      case 'bottom':
        position.top = originNodeRect.top + originNodeRect.height;
        break;
      default:
        throw new Error(`Invalid target mode "${positionMode.top}" specified for md-menu on Y axis.`);
    }

    switch (positionMode.left) {
      case 'target':
        position.left = existingOffsets.left + originNodeRect.left - alignTargetRect.left;
        transformOrigin += 'left';
        break;
      case 'target-right':
        position.left = originNodeRect.right - openMenuNodeRect.width + (openMenuNodeRect.right - alignTargetRect.right);
        transformOrigin += 'right';
        break;
      // Support for mdMenuBar
      case 'left':
        position.left = originNodeRect.left;
        transformOrigin += 'left';
        break;
      case 'right':
        position.left = originNodeRect.right - containerNode.offsetWidth;
        transformOrigin += 'right';
        break;
      default:
        throw new Error(`Invalid target mode "${positionMode.left}" specified for md-menu on X axis.`);
    }

    let offsets = this.get('offsets');
    position.top += offsets.top;
    position.left += offsets.left;

    clamp(position);

    el.css({
      top: `${position.top}px`,
      left: `${position.left}px`
    });

    containerNode.style[this.get('constants').get('CSS').TRANSFORM_ORIGIN] = transformOrigin;


    */
