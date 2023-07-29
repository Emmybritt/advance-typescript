export type Name = { name: string };
export type Age = { age: number };

type Union = Name | Age | (Name & Age); //Union

type Intersect = Name & Age; //Intersect

const name = { name: "Jane" };
const age = { age: 29 };
const nameAndAge = { name: "jane", age: 29 };

let union: Union;
union = name;
union = age;
union = nameAndAge;

let intersect: Intersect;
intersect = nameAndAge;

function filter(union: Union) {
	if ("name" in union) {
		union.name;
	} else {
		union.age;
	}
	if ("val" in union) {
		union.val;
	}
	if ("name" in union && "age" in union) {
		union.age;
		union.name;
	}
}

filter(nameAndAge);
filter(age);
filter(name);
