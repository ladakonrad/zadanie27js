function dluzszyString(nazwa1, nazwa2) {
    let nazwa1Length = nazwa1.length;
    let nazwa2Length = nazwa2.length;
    if (nazwa1Length > nazwa2Length)
        return (nazwa1);
    else
        return (nazwa2);
}

console.log(dluzszyString('Uwielbiam JavaScript', 'Jestem świetnym programistą'));
