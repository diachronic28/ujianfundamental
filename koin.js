function cekkoin(koin) {
    var output1 = 0
    var output2 = 0
    if (koin % 25 < koin) {
        output1 += parseInt(koin / 25);
        output2 = koin % 25;
        koin = output2;
    }
    if (koin % 10 < koin) {
        output1  += parseInt(koin / 10);
        output2 = koin % 10;
        koin = output2;
    }
    if (koin % 5 < koin) {
        output1 += parseInt(koin / 5);
        output2 = koin % 5;
        koin = output2;
    }
    output1 += koin / 1;
    return output1
}


console.log(cekkoin(49))
console.log(cekkoin(31))
console.log(cekkoin(50))