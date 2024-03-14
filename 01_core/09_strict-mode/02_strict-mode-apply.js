/* 2. 엄격 모드 적용 */

/*
    전역의 선두 또는 함수 몸체의 선두에 'use strict'를 추가한다.
*/


function test() {
    
    x = 10;
    // 코드의 선두에 위치시키지 않으면 strict mode가 제대로 동작하지 않는다.
    'use strict';
}

test();
console.log(x); // 10

// 'use strict';    // 전역에 선언

function test() {
    'use strict';   // 함수에 선언
    x = 10;         // ReferenceError: x is not defined
}

test();
console.log(x); 

// 즉시 실행 함수로 strict mode 실행 하는방법
(function() {
    'use strict';
})();