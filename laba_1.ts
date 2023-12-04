let merging_a_string = (str1: string, str2: string, str3: string) => {
    return str1.concat(str2, str3); 
}

const result: string = merging_a_string("Раз строка", "Два строка", "Три строка")
console.log(result)


let one: boolean = true
console.log(one)

let number: number = 1412
console.log(number)

let string: string  = "I am string"
console.log(string)

enum Season {
    Winter = "Зима",
    Spring = "Весна",
    Summer = "Лето",
    Autumn = "Осень "
    };
console.log(Season)

let symbol = Symbol("x")
console.log(symbol)


interface Entity {
    id: number;
   }
   interface ToJsonStringify extends
   Entity {
    e1: string;
    e2: string;
   }
   const data: ToJsonStringify = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
   }

const jsonStringify: string = JSON.stringify(data);

console.log(jsonStringify);

const someObject = JSON.parse(jsonStringify);

console.log(someObject);