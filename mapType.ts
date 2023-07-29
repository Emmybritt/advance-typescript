type State = {
	readonly name: string;
	readonly age: number;
};

type stateNames = keyof State;
type name = State["name"];
let emm: stateNames = "age";

export type Point = { y: number; x: number };
export type ReadonlyPoint = Readonly<Point>;

export type ReadOnlyType = {
	readonly [key in keyof Point]: Point[key];
};

export type Readonly<T> = {
	readonly [key in keyof T]: T[key];
};

const origin: Readonly<Point> = {
	x: 0,
	y: 0,
};
// origin.x = 30;
// origin.y = 60;

/**
 * {
 *
 * name: (value: string) => void,
 *  age: (value: number) => void,
 *  }
 */

function doSomethibg(params: State) {
	// para;
}
