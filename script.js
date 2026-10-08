{
    console.log("Задание 27");
    let number = -8;
    if (number > 0) {
        console.log("Число положительное");
    } else if (number < 0) {
        console.log("Число отрицательное");
    } else {
        console.log("Число равно нулю");
    }
}

{
    console.log("Задание 28");
    let number = 30;
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("Делится");
    } else {
        console.log("Не делится");
    }
}

{
    console.log("Задание 29");
    let hour = 14;
    if (hour < 0 || hour > 23) {
        console.log("Ошибка: час должен быть от 0 до 23");
    } else if (hour >= 6 && hour <= 11) {
        console.log("Утро");
    } else if (hour >= 12 && hour <= 17) {
        console.log("День");
    } else if (hour >= 18 && hour <= 21) {
        console.log("Вечер");
    } else {
        console.log("Ночь");
    }
}

{
    console.log("Задание 30");
    let math = 75;
    let programming = 48;
    if (math >= 50 && programming >= 50) {
        console.log("Экзамены сданы");
    } else {
        console.log("Необходимо пересдать");
    }
}

{
    console.log("Задание 31");
    let year = 2028;
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(year + " — високосный год");
    } else {
        console.log(year + " — не високосный год");
    }
}

{
    console.log("Задание 32");
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
    }
    console.log("Сумма нечётных чисел: " + sum);
}

{
    console.log("Задание 33");
    let number = 45678;
    let text = String(number);
    console.log("Количество цифр: " + text.length);
}

{
    console.log("Задание 34");
    let word = "JavaScript";
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed = reversed + word[i];
    }
    console.log(reversed);
}

{
    console.log("Задание 35");
    let numbers = [-5, 10, 0, 23, -8, 15, -2];
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    console.log("Положительных чисел: " + count);
}

{
    console.log("Задание 36");
    let numbers = [2, 3, 2, 5, 3, 7, 5, 9];
    let unique = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!unique.includes(numbers[i])) {
            unique.push(numbers[i]);
        }
    }
    console.log(unique);
}

{
    console.log("Задание 37");
    function convertTemperature(celsius) {
        let fahrenheit = celsius * 1.8 + 32;
        return fahrenheit;
    }
    console.log("0°C = " + convertTemperature(0) + "°F");
    console.log("20°C = " + convertTemperature(20) + "°F");
    console.log("100°C = " + convertTemperature(100) + "°F");
}

{
    console.log("Задание 38");
    function isPrime(number) {
        if (number <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    console.log("7: " + isPrime(7));
    console.log("12: " + isPrime(12));
    console.log("17: " + isPrime(17));
    console.log("21: " + isPrime(21));
}

{
    console.log("Задание 39");
    function countVowels(text) {
        let vowels = "aeiou";
        let lowerText = text.toLowerCase();
        let count = 0;
        for (let i = 0; i < lowerText.length; i++) {
            if (vowels.includes(lowerText[i])) {
                count++;
            }
        }
        return count;
    }
    console.log("Гласных в слове education: " + countVowels("education"));
}

{
    console.log("Задание 40");
    function calculateDelivery(amount) {
        if (amount < 5000) {
            return 1500;
        } else if (amount < 15000) {
            return 800;
        } else {
            return 0;
        }
    }
    let amounts = [3000, 10000, 20000];
    for (let i = 0; i < amounts.length; i++) {
        let delivery = calculateDelivery(amounts[i]);
        let total = amounts[i] + delivery;
        console.log("Заказ: " + amounts[i] + " ₸, доставка: " + delivery + " ₸, всего: " + total + " ₸");
    }
}

{
    console.log("Задание 41");
    let students = [
        {name: "Алия", score: 95},
        {name: "Арман", score: 67},
        {name: "Данияр", score: 82},
        {name: "Мадина", score: 45}
    ];
    let sum = 0;
    let failed = 0;
    let best = students[0];
    console.log("Все студенты:");
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].name + ": " + students[i].score);
        sum = sum + students[i].score;
        if (students[i].score > best.score) {
            best = students[i];
        }
        if (students[i].score < 50) {
            failed++;
        }
    }
    console.log("Студенты с баллом 50 и выше:");
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= 50) {
            console.log(students[i].name);
        }
    }
    console.log("Лучший студент: " + best.name + " (" + best.score + ")");
    console.log("Средний балл группы: " + sum / students.length);
    console.log("Не сдали экзамен: " + failed);
}

{
    console.log("Задание 42");
    let seats = [false, true, false, false, true];
    let selectedSeat = 3;
    if (selectedSeat < 1 || selectedSeat > seats.length) {
        console.log("Неверный номер места");
    } else if (seats[selectedSeat - 1] === false) {
        seats[selectedSeat - 1] = true;
        console.log("Место " + selectedSeat + " забронировано");
    } else {
        console.log("Место " + selectedSeat + " уже занято");
    }
    console.log(seats);
}

{
    console.log("Задание 43");
    let products = [
        {name: "Ноутбук", quantity: 5},
        {name: "Мышь", quantity: 15},
        {name: "Клавиатура", quantity: 3},
        {name: "Монитор", quantity: 8}
    ];
    let totalQuantity = 0;
    let maxProduct = products[0];
    console.log("Список товаров:");
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].name + ": " + products[i].quantity);
        totalQuantity = totalQuantity + products[i].quantity;
        if (products[i].quantity > maxProduct.quantity) {
            maxProduct = products[i];
        }
    }
    console.log("Товары, которых меньше 5:");
    for (let i = 0; i < products.length; i++) {
        if (products[i].quantity < 5) {
            console.log(products[i].name);
        }
    }
    console.log("Всего единиц товаров: " + totalQuantity);
    console.log("Больше всего: " + maxProduct.name + " (" + maxProduct.quantity + ")");
    products.push({name: "Принтер", quantity: 4});
    console.log("После добавления товара:");
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].name + ": " + products[i].quantity);
    }
}

{
    console.log("Задание 44");
    let expenses = [2500, 1800, 4200, 1500, 3100, 2600, 5000];
    let sum = 0;
    let max = expenses[0];
    let min = expenses[0];
    let days = 0;
    for (let i = 0; i < expenses.length; i++) {
        sum = sum + expenses[i];
        if (expenses[i] > max) {
            max = expenses[i];
        }
        if (expenses[i] < min) {
            min = expenses[i];
        }
        if (expenses[i] > 3000) {
            days++;
        }
    }
    console.log("Общая сумма: " + sum + " ₸");
    console.log("Максимальный расход: " + max + " ₸");
    console.log("Минимальный расход: " + min + " ₸");
    console.log("Средний расход в день: " + (sum / expenses.length).toFixed(2) + " ₸");
    console.log("Дней с расходом больше 3000 ₸: " + days);
}

{
    console.log("Задание 45");
    let participants = [
        {name: "Али", age: 17, registered: true},
        {name: "Аружан", age: 16, registered: false},
        {name: "Руслан", age: 19, registered: true}
    ];
    let allowed = 0;
    console.log("Допущены к участию:");
    for (let i = 0; i < participants.length; i++) {
        if (participants[i].registered === true && participants[i].age >= 16 && participants[i].age <= 25) {
            console.log(participants[i].name);
            allowed++;
        }
    }
    console.log("Всего допущено: " + allowed);
}
