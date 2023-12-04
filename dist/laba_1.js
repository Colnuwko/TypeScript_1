let merging_a_string = (str1, str2, str3) => {
    return str1.concat(str2, str3);
};
const result = merging_a_string("Раз строка", "Два строка", "Три строка");
console.log(result);
let one = true;
console.log(one);
let number = 1412;
console.log(number);
let string = "I am string";
console.log(string);
var Season;
(function (Season) {
    Season["Winter"] = "\u0417\u0438\u043C\u0430";
    Season["Spring"] = "\u0412\u0435\u0441\u043D\u0430";
    Season["Summer"] = "\u041B\u0435\u0442\u043E";
    Season["Autumn"] = "\u041E\u0441\u0435\u043D\u044C ";
})(Season || (Season = {}));
;
console.log(Season);
let symbol = Symbol("x");
console.log(symbol);
const data = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
};
const jsonStringify = JSON.stringify(data);
console.log(jsonStringify);
const someObject = JSON.parse(jsonStringify);
console.log(someObject);
