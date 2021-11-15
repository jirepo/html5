/**
 * 자바스크립트 공통 함수입니다. 
 * @author 홍길동<hong@gmail.com>
 * @version 1.1.0 
 * @since   1.0.0 
 * @copyright Copyrightⓒ2008 Gildong All rights reserved.
 * @license Apache-2.0
 */



/**
 * 사용자 정보 객체 
 * @class User
 */
let User = { 
  /**
   * 사용자 이름
   * @type {string} 
   */
  name: "Latte", 
  /**
   * 함수 모음 객체 
   * @class fn
   * @memberof User
   */
  fn : {
    /**
     * 이름을 구한다.
     * @returns {string} 이름 반환
     * @memberof User.fn
     */
    getName : function() {
      return ""
    },
    /**
     * 타입에 맞는 사용자 주소를 반환한다. 
     * @param {string} adrType 주소 타입
     * @returns {string} 사용자 주소
     */
    getAddress: function(adrType) { 
      return "Seoul";
    }
  }
}


