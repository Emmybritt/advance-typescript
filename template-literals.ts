let str: string;
str = "Hello World";

let strLiteral: "hello";
strLiteral = "hello";

let templeateStril: `Example: ${string}`;
templeateStril = "Example: 1";

type CSSValue = number | `${string}px` | `${string}em` | `${string}rem`;

type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary";
type Style = `${Size}-${Color}`;
/**
 * @author 'Emmy Britt'
 * @param style is a combination of
 * Size: 'small' or 'medium' or 'large'
 * Color: 'primary' or 'secondary'
 * e.g 'small-secondary', 'medium-secondary'
 */
function applyStyle(style: Style) {
	// ...
}

applyStyle("small-secondary");
