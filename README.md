 ## - Live Link : https://assignmant-9.web.app/

 ## Features : 
 - Gaming Event Management for a website involves the planning and execution of online gaming events or activities. This can include online tournaments, virtual conventions, streaming events, and more. Key aspects of website-based gaming event management include:
 
<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

Ans. B: ReferenceError: greetign is not defined

Explanation: In the provided code, you intended to declare a variable called greeting, but there is a typographical error in the variable name. You wrote greetign instead of greeting. Due to this typo, JavaScript will throw a ReferenceError because greetign is not defined as a variable, and attempting to access it will result in an error.



<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`


Ans. A: NaN

Explanation: In the given code, the sum function takes two parameters, a and b, and attempts to add them together. However, when you call sum(1, "2"), JavaScript tries to add a number (1) and a string ("2"). When you perform addition with a number and a string, JavaScript coerces the string into a number if possible. In this case, "2" can be converted to a number, resulting in 1 + 2, which equals 3. However, because JavaScript found a non-numeric string, it returns NaN (Not-a-Number) as the result. So, the correct answer is "A: NaN."



<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`


Ans. A: ['🍕', '🍫', '🥑', '🍔']

Explanation: In the code, the info object's favoriteFood property is initially set to the first element of the food array, which is "🍕". Then, the value of info.favoriteFood is changed to "🍝". However, this change does not affect the original food array. Therefore, when you log the food array, it remains unchanged, and the correct answer is option A.



<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

Ans. B: Hi there, undefined

Explanation: The sayHi function expects one argument, name, which is used in the template string. However, when you call sayHi() without providing any argument, JavaScript assigns the value undefined to the name parameter inside the function. Therefore, the template string becomes "Hi there, undefined," and that is what will be logged to the console.



<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

Ans. B: 2

Explanation: In the code, the forEach method iterates through the nums array, and for each element num, it checks if num is truthy (non-zero). For the values in the array [0, 1, 2, 3], only 1, 2, and 3 are truthy, while 0 is falsy. Therefore, the if (num) condition is met for 1, 2, and 3, and the count variable is incremented by 1 for each of them. So, count becomes 2, and that is what will be logged to the console.# event-manageMant-a9
# event-manageMant-a9
