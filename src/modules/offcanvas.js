'use strict';

export class Offcanvas {
  constructor() {
  }

  init() {
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open');
    })
  }
}
