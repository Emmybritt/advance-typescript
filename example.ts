// type Status = "pending" | "accepted" | "rejected";

// interface StatusAttribute {
// 	pending: string;
// 	accepted: string;
// 	rejected: string;
// }

// /**
//  * @author Emmy britt
//  * @param status the status is a string that accepts
//  * either "pending" | "accepted" | "rejected"
//  */
// function doSomething(status: keyof StatusAttribute) {
// 	console.log(status);
// }

// doSomething("pending");

// const newStatus: StatusAttribute["pending"] = "jsj";

// type statNewAtt = keyof StatusAttribute;
// const val: statNewAtt = "accepted";

// const obj: StatusAttribute = {
// 	accepted: "yes",
// 	pending: "no",
// 	rejected: "yes",
// };

type Name = {
	firstName: string;
	lastName: string;
};

type Age = {
	day: 29;
	month: number;
	year: number;
};

type Person = Name | Age;

const person: Person = {
	day: 29,
	firstName: "Emmanuel",
	lastName: "Berit",
	month: 7,
	year: 1999,
};

type PointA = {
	lat: number;
	lng: number;
	alt: number;
};
type PointB = {
	lat: number;
	lng: number;
};

// type Point = PointA & PointB;

// const point: Point = {};
// Maptype

type User = {
	readonly name: string;
	readonly age: number;
};

let user: User = {
	age: 8,
	name: "Emmanuel",
};
// user.age = 20;
// user.name = "Emmanuel";
type StateName = keyof User;

type Point = { y: number; x: number; z: number };
type ReadonlyPoint = {
	readonly [key in keyof Point]: string;
};

const use: ReadonlyPoint = {
	x: "34",
	y: "30",
	z: "14",
};

type ReadonlyTypeName<T> = {
	[key in keyof T]: T[key];
};

type Book = {
	title: string;
	description: string;
	pages: number;
};

type newType = ReadonlyTypeName<Name>;

type BookType = ReadonlyTypeName<Book>;
