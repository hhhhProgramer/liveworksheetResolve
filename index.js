var arraypaginascopia = [["choose:Rice are grown in India/*Rice is grown in India.",261,117,22,382,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:*These accounts are revised every week/These accounts is revised every week by someone.",323,116,24,389,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:The floor are cleaned every day by someone/*The floor is cleaned every day.",369,113,26,391,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:*Lots of text messages are written by Anna/Lots of text messages is written by Anna.",413,116,23,385,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:*Pineapples are bought in Costa Rica and sold in France/Pineapples is bought in Costa Rica and is sold in France.",476,120,27,385,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:*The exams are corrected by the teacher at the weekend/The exams is corrected at the weekend by the teacher.",543,121,27,384,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:Short stories is read in the Literature class by the students/*Short stories are read in the Literature class by the students.",610,116,30,389,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:*An email was sent to the partners/An email were sent to the partners by them.",259,555,24,382,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:An expensive vase were broken by someone/*An expensive vase was broken.",301,555,26,385,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:The floor were cleaned yesterday/*The floor was cleaned yesterday.",347,558,21,384,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:*The old house was sold to a couple from New York by the Smiths/The old house were sold to a couple from New York.",409,558,26,385,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:An intelligent building is built in Dubai/*An intelligent building was built in Dubai.",478,561,24,381,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:*The new Adidas trainers were created by a famous designer/The new Adidas trainers was created by a famous designer.",544,555,24,390,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:The information about the robbery were published in the newspaper/*The information about the robbery was published in the newspaper.",616,553,33,391,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:are catched/*were caught/was caught",722,265,25,187,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:is bought/*was bought/were bought",759,246,21,203,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:was gave/*was given/were given",792,162,23,223,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:*was put out/were put out/is putted out",826,224,21,212,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["choose:*is allowed/were allowed/be allowed",861,196,28,224,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["is cleaned",1049,650,22,166,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["are served",1092,669,25,185,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["are brought",1141,641,20,184,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["are given",1189,626,19,190,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0],["are spoken",1235,816,19,121,"",0,"Arial","14","0000CC","255","255","255","0.5","666666","center","","1","4",0]];

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