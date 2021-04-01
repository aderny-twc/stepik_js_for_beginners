function testDateTime(a, b) {
    const date1 = new Date(a);
    const date2 = new Date(b);
    const dateBig = date1 > date2 ? date1 : date2;
    const day = dateBig.getDay();
    let weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    return weekDays[day];
}