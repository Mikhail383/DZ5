document.write('1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.' + '</br>');

function expect1(a, b, c) {
    return c == 0 ? "Деление на ноль!" : (a - b) / c
}

document.write(expect1(8, 4, 2));

document.write('</br>' + '2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.' + '</br>');

function expect2(a) {
    return [a ** 3, a ** 2]
}

document.write(expect2(2) + '</br>');
document.write(expect2(3));

document.write('</br>' + '3.Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.' + '</br>');

function min3(a, b) {
    return a < b ? a : b
}
function max3(a, b) {
    return a > b ? a : b
}
document.write(min3(20, 33));
document.write(max3(20, 33));

document.write('</br>' + '4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.' + '</br>');

function askNumber(message) {
    do {
        var number = prompt(message)
    } while (number % 1 != 0 && number != "")
    return number
}
function Array4(){
    let array = [],
        a = askNumber("Начальное число"),
        b = askNumber("Конечное число"),
        min = min3(a, b),
        max = max3(a, b);
    for (let i = min; i <= max; i++)
        array.push(i)
    if (a == max)
        array.reverse()
        return array
}
function print(arr) {
    document.write(arr)
}

print(Array4());


document.write('</br>' + '5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.' + '</br>');

function isEven(a) {
    if (a % 1 != 0 || (a == "" && a != 0)) return `${a} - число не целое`;
    return (a % 2 === 0);
}

document.write(isEven(prompt('Введите число для проверки')));

document.write('</br>' + '6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.' + '</br>');

let array6 = [1, 2, 3, 4, 5, 6, 7, 8, -100, -50, -25, -12, -3];

function ArrayToEven(array6) {
    let resultArray = [];
    for ( let item of array6) {
        
        if (isEven(item)) resultArray.push(item);
    }
    return resultArray;
}

document.write(`Вывод массива только c четными числами ${ArrayToEven(array6)}`);

document.write('</br>' + '7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы): ' + '</br>');

function pyramid(a) {
    for (let i = 1; i <= a; i++) {
        let symb = arguments[1] != undefined && arguments[1].length == 1 && arguments[1] != " " ? arguments[1] : i,
        text = new Array(i + 1).join(symb);
    }
}
let $7a = askNumber("Высота пирамиды"),
    $7b = prompt("Свой символ");
    pyramid($7a, $7b);

document.write('</br>' + '8. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:' + '</br>');

function greateTriangle(a) {
let array = new Array(a);
for (let i = 0; i < a; i++) {
    array[i] = new Array(a - i).join(" ") + new Array(i * 2 + 2).join("*");

}
return array;
}

function printArray(array) {
    for (let string of array)
    document.write(string)
}
function printReverseArray (array) {
    array.reverse();
    printArray(array);
}
printArray(greateTriangle(askNumber("Введите высоту")));
printReverseArray(greateTriangle(askNumber("Введите высоту перевернутого треугольника")));

document.write('</br>' + '9. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000.' + '</br>');

function greateArrFib(maxNumber) {
    let array = [0, 1],
        newVal1 = 1;
    for (let i = 1; newVal1 < maxNumber; i++, newVal1 = array[i] + array[i - 1]) {
        array.push(newVal1);

    }
    
    return array;
}

document.write(greateArrFib(1000));

document.write('</br>' + '10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию.' + '</br>');

function sumDigits(a) {
    let result = 0;
    if (a > 9) {
        a = String(a);
        for (let i = 0; i < a.length; i++)
            result += Number(a[i])
        a = sumDigits(result)
    }
    return a;
}

document.write(sumDigits(askNumber("Введите число для суммирования его цифр")));


document.write('</br>' + '11. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.' + '</br>');

function $10printArray(array) {
    document.write(array.shift());
    if (array.length > 0)
        $10printArray(array)
}
$10printArray([1, 3, 7, 23, 65, 4, 33, 63, 333, 34, 56])

document.write('</br>' + '12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введённые данные в следующем виде:' + '</br>' + '*****************************' + '</br>' + '* Домашняя работа: «Функции» *' + '</br>' + '* Выполнил: студент гр. W4017 *' + '</br>' + '* Иванов Иван Иванович *' + '</br>' + '*****************************' + '</br>' + 'Размер рамки должен определятся автоматически по самой длинной строке. Рамку вывести в консоль.');

function makeLabel() {
    let arrText = [];
        arrText[0] = arrText[4] = "";
        arrText[1] = "* Домашняя работа: «Функции» *";
        arrText[2] = "* Выполнил: студент гр. W4017 *";
        arrText[3] = "* ";
        let surname = prompt("Введите фамилию");
        let name = prompt("Ваше имя");
        let patronymic = prompt("Ваше отчество");
        let group = prompt("Номер группы");
        
    arrText[2] += group;
    arrText[3] += (surname + " " + name + " " + patronymic);

    let maxLenght = 0;
    for (let string of arrText)
    if (string.length && string.length > maxLenght)
        maxLenght = string.length
    maxLenght += 2;

    arrText[0] = arrText[4] = new Array(maxLenght + 1).join("*");
    for (let i = 1; i <= 3; i++)
    arrText[i] += (new Array(maxLenght - arrText[i].length - 2 + 1).join(" ") + " *")
    return arrText;
}

printArray(makeLabel());