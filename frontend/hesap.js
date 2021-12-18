var deger;
var eski;
var yeni;
var toplam = "";
var isl = 5;
var sonuc = "";

function sayi_gir(x) {
    switch (x) {
        case 1:
            deger = x;
            toplam = toplam + deger.toString();
            ekrana_yaz(toplam)
            break;
        case 2:
            deger = x;
            toplam = toplam + deger.toString();
            ekrana_yaz(toplam)
            break;
        case 3:
            deger = x;
            toplam = toplam + deger.toString();
            ekrana_yaz(toplam)
            break;
        case 4:
            deger = x;
            toplam = toplam + deger.toString();
            ekrana_yaz(toplam)
            break;
        case 5:
            deger = x;
            toplam = toplam + deger.toString();
            ekrana_yaz(toplam)
            break;
        case 6:
            deger = x;
            toplam = toplam + deger.toString();
            ekrana_yaz(toplam)
            break;
        case 7:
            deger = x;
            toplam = toplam + deger.toString();
            ekrana_yaz(toplam)
            break;
        case 8:
            deger = x;
            toplam = toplam + deger.toString();
            ekrana_yaz(toplam)
            break;
        case 9:
            deger = x;
            toplam = toplam + deger.toString();
            ekrana_yaz(toplam)
            break;
        case 0:
            deger = x;
            toplam = toplam + deger.toString();
            ekrana_yaz(toplam)
            break;

        case "*":
            if (isl == 5) {
                eski = toplam;
                toplam = "";
                isl = 0;

            }
            break;

        case "böl":
            if (isl == 5) {
                eski = toplam;
                toplam = "";
                isl = 1;

            }
            break;

        case "+":
            if (isl == 5) {
                eski = toplam;
                toplam = "";
                isl = 2;

            }
            break;

        case "-":
            if (isl == 5) {
                eski = toplam;
                toplam = "";
                isl = 3;

            }

            break;

        case "=":
            islem(isl);
            isl = 5;
            break;

        case "esc":
            deger = "";
            toplam = "";
            eski = "";
            document.getElementById("input").value = "0";
            break;

        default:
            break;
    }

}

function ekrana_yaz(deger) {
    document.getElementById("input").value = deger;
    
}

function islem(isl) {

    switch (isl) {
        case 0:
            sonuc = parseInt(eski) * parseInt(toplam);
            deger = sonuc;
            toplam = sonuc;
            ekrana_yaz(deger)
            break;
        case 1:
            sonuc = parseInt(eski) / parseInt(toplam);
            deger = sonuc;
            toplam = sonuc;
            ekrana_yaz(deger)
            break;
        case 2:
            sonuc = parseInt(eski) + parseInt(toplam);
            deger = sonuc;
            toplam = sonuc;
            ekrana_yaz(deger)
            break;
        case 3:
            sonuc = parseInt(eski) - parseInt(toplam);
            deger = sonuc;
            toplam = sonuc;
            ekrana_yaz(deger)
            break;


        default:
            break;
    }
}

function proceed () {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', '/a');
    form.style.display = 'hidden';
    document.body.appendChild(form)
    form.submit();
}