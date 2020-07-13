export function createdStyles(className: string, cssRule: string) {
  this.className = className;
  this.cssRule = cssRule;
}

function yieldCss() {
  return `.${this.className}{${this.cssRule};}`;
}

function yieldStyles() {
  return {
    className: this.className,
    cssRule: this.cssRule,
  };
}

createdStyles.prototype.toString = function() {
  return this.className;
};

createdStyles.prototype.yieldStyles = yieldStyles;
createdStyles.prototype.yieldCss = yieldCss;

const test = new createdStyles("myClassName", "color: blue");
console.log(test.yieldCss()); // .myClassName{color: blue;}
console.log(test.yieldStyles()); // { className: 'myClassName', cssRule: 'color: blue' }
console.log(`${test}`); // myClassName
console.log(test); // createdStyles { className: 'myClassName', cssRule: 'color: blue' }
