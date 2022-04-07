var entry = prompt("UzAirwaysga hush kelibsiz! Hurmatli mijoz ismingizni kiriting") ;
var narx;
alert('Assalom ALeykum ! ' + entry + ' Hurmatli mijoz UZAirways hizmatlaridan foydalanish uchun "OK" tugmasini bosin ');
narx = prompt("Hurmatli mijoz sayohat uchun mo'ljallagan summasi ($)dollarda ");

if (narx >= 10000) {
    console.log('Siz USA ga, Shvetsariyaga sayohat qila olasiz.')
}
else if (narx >= 5000) {
    console.log('Siz Malayziya, Avstraliyaga sayohat qila olasiz.');
} 
else if (narx >= 1000) {
    console.log("Siz Russiya, Turkiyaga   sayohat qila olasiz.")
}
else if (narx >= 500) {
    console.log("Siz O'zbekiston bo'ylab sayohat qilganingiz ma'qul.")
}
