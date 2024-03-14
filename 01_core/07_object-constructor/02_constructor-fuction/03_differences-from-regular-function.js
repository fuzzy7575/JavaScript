/* 3. 일반 함수와의 차이점 */

function Teacher(name, hobby) {
    this.name = name;
    this.hobby = hobby;
    this.getInfo = function() {
        return `${this.name}의 취미는 ${this.hobby}입니다.`
    }
}

// new 연산자와 함께 호출하면 생성자 함수로 동작한다.
// (만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다.)
const teacher = Teacher('판다', '열정적으로 수업하기');
console.log(teacher);   // 일반 함수로서 호출된 teacher는 반환문이 없으므로 undefined 반환
console.log(hobby);     //일반 함수로서 호출된 teacher 내의 this는 전역객체를 가리킨다.

/* new.target */
// (생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES6 에서 지원)
// new 연산자 없이 일반 함수로 호출시 , 함수 내부의 new.target은 undefined 이다.
function Dog(name, skill) {

    if(!new.target) {
        return new Dog(name, skill);
    }
    this.name = name;
    this.skill = skill;
}

const dog1 = Dog('뽀삐',  '앉아!!');
console.log(dog1);

const dog2 = new Dog('먼지',  '기다려~~');
console.log(dog2);

// 대부분 빌트인 생성자 함수 (Object, String, Number, Boolean, ...)는
// new 연산자와 함께 호출 되었는지 확인 후 적절한 값을 반환한다.
const obj = Object();
console.log(obj);

// String, Number, Boolean의 경우 new 연산자 없이 호출하면 객체 값이 아닌
// 문자열, 숫자, 논리 (true or false)를 반환한다. -> 데이터 타입 변환에 사용
