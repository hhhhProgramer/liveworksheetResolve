var arraypaginascopia = [["He will be puninshed", 155, 110, 46, 813, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["My office is being painted today", 252, 106, 45, 817, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["The work has just been done", 349, 108, 45, 817, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["This camera was bought in japan", 441, 107, 47, 818, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["My daughter was taken away from me", 538, 106, 47, 817, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["I was being eaten alive by mosquitoes", 630, 103, 48, 822, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["Many promises had been made", 724, 103, 49, 822, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["The new bridge will have been completed by march", 819, 103, 49, 827, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["I$m going to be arested", 911, 101, 51, 829, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["This novel was written by an american writer", 1004, 101, 52, 827, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["The mail had been delivered in the morning", 1101, 105, 49, 820, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["The cause of the accident was being investigated by the police", 1197, 104, 50, 826, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["The meeting will be held tomorrow", 1288, 106, 55, 824, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["He was seen crossing the road", 1504, 104, 53, 831, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["The sculpture has been lost", 1599, 102, 50, 830, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["Is lunch included in the price", 1696, 106, 52, 826, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["Tom is going to be cut from the team", 1786, 101, 53, 832, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["A new bridge is being built over the river/A new bridge over the river is being built", 1887, 104, 49, 821, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["Our offer would be accepted by tom", 1978, 106, 53, 825, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["Your watch has been found", 2075, 106, 48, 823, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["This work can be done within a week", 2168, 105, 49, 821, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["His house was sold for ten thousand pounds", 2267, 107, 46, 818, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["You should have been expelled", 2361, 106, 51, 820, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["The problem is being discussed", 2451, 104, 51, 816, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0], ["Mary was being followed/Mary was being followed by somebody", 2547, 106, 50, 824, "", 0, "Indie Flower", "28", "0000CC", "255", "255", "255", "0.5", "666666", "center", "", "1", "4", 0]];

let cont = 1;
let spaceWork = document.getElementById('textResolved');

function option1() {
    document.getElementById('textResolved').innerHTML = "";
    cont = 0;

    arraypaginascopia.forEach(sheets => {

        let test = sheets[8];
        document.getElementById('textResolved').innerHTML += 'Ejercicio: ' + (cont++) + '<br><br>';
        test.forEach(x => {
            document.getElementById('textResolved').innerHTML += cont + ')<input class="input" id="' + cont + '" value = "' + x[0] + '" readonly> </input>' + '<button onclick="copy(' + cont + ')">copy</button>' + '<spam id="msg-' + cont + '"></spam>' + '<br>';
        })
    })
}

function option2() {
    cont = 0;
    repeat = -1;

    document.getElementById('textResolved').innerHTML = "";
    arraypaginascopia.forEach(resp => {

        //existen mas de dos valores como respuesta
        
        let twoResp = resp[0].split("/");

        if(twoResp.length > 1)
        {
            twoResp.forEach(element => {
                document.getElementById('textResolved').innerHTML += cont-repeat + ') <input class="input" id="' + cont + '" value = "' + element + '" readonly> </input>' + '<button onclick="copy(' + cont + ')">copy</button>' + '<spam id="msg-' + cont + '"></spam>';
                cont++;
                repeat++;
                console.log(element);
            });
            repeat--;
        }else{
            document.getElementById('textResolved').innerHTML += cont-repeat + ') <input class="input" id="' + cont + '" value = "' + resp[0] + '" readonly> </input>' + '<button onclick="copy(' + cont + ')">copy</button>' + '<spam id="msg-' + cont + '"></spam>' + '<br>';
            cont++;
        }
    })
}

function unableMessage(id) {
    let copyTextarea = document.getElementById(id);
    copyTextarea.innerText = "";
}

function copy(id) {
    let copyTextarea = document.getElementById(id);
    let message = document.getElementById("msg-" + id);
    copyTextarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
        copyTextarea.selectionStart = 0;
        copyTextarea.selectionEnd = 0;
        message.innerText = "copiado";

        setTimeout(function (msg = "msg-" + id) {
            let message = document.getElementById(msg);
            message.innerText = "";
        }, 1000);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}

if (arraypaginascopia.length <= 4) {
    option1();
} else {
    option2();
}