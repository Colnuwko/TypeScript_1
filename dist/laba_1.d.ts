declare let merging_a_string: (str1: string, str2: string, str3: string) => string;
declare const result: string;
declare let one: boolean;
declare let number: number;
declare let string: string;
declare enum Season {
    Winter = "\u0417\u0438\u043C\u0430",
    Spring = "\u0412\u0435\u0441\u043D\u0430",
    Summer = "\u041B\u0435\u0442\u043E",
    Autumn = "\u041E\u0441\u0435\u043D\u044C "
}
declare let symbol: symbol;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1: string;
    e2: string;
}
declare const data: ToJsonStringify;
declare const jsonStringify: string;
declare const someObject: any;
