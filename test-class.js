
/**
 * Class representing a dot.
 * @namespace
 * @extends Point
 */
 class Dot extends Point {
  /**
   * Create a dot.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   * @param {number} width - The width of the dot, in pixels.
   */
  constructor(x, y, width) {
      // ...
  }

  /**
   * Get the dot's width.
   * @return {number} The dot's width, in pixels.
   */
  getWidth() {
      // ...
  }
}


/**
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  defaults.players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 */
 var config = {
  defaults: {
      players: 1,
      level:   'beginner',
      treasure: {
          gold: 0
      },

      /**
       * 숫자를 반환한다. 
       * @returns {number} 숫자
       */
      getNumber: function() {
        return 0;
      }
  }
};

/** 
 * MyObj이다. 
 * @namespace
 */
var MyObj = {
  /**
   * foo is now MyNamespace~foo rather than MyNamespace.foo.
   * @inner
   */
  foo: 1,
  /**
   * Inner Ojbect
   * @inner 
   * @property {string} memberId - 멤버 아이디
   */
  fn : {
    memberId : "1111"

  }
};