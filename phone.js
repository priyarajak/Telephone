// console.log("JavaScript File");
// var key1 = [".", ",", "!"];
// var key2 = ["a", "b", "c"];
// var key3 = ["d", "e", "f"];
// var key4 = ["g", "h", "i"];
// var key5 = ["j", "k", "l"];
// var key6 = ["m", "n", "o"];
// var key7 = ["p", "q", "r", "s"];
// var key8 = ["t", "u", "v"];
// var key9 = ["w", "x", "y", "z"];

// var text = document.getElementById("text");
// var longPress = false;
// var c = 0;
// var firstClick = false;
// $("#1").on({
//     mousedown: function () {
//         console.log("1 clicked");
//         $(this).data('timer', setTimeout(function () {
//             text.innerHTML += "1";
//             longPress = true;
//             var x = text.innerHTML;
//             console.log(x);
//             console.log("1 clicked timeout");

//         }, 1000))

//     },
//     mouseup: function () {
//         clearTimeout($(this).data('timer'));
//         // if (!longPress) {
//         //     text.innerHTML += key1[c % 3];
//         //     c++;
//         //     $(this).data('timer', setTimeout(function () {
//         //         c = 0;
//         //     }, 1000))
//         // }
//         // longPress = false;
//     }
// })

// $("#1").on('click', function(){
//     // $("#text").text(function(index, text){
//     //     return text.replace(/r/gi, '');
//     // });
//     text.innerHTML+=key1[c%3];
//     c++;
//     setTimeout(function () {
//         text.innerHTML=text.innerHTML.slice(0,-1);
//     },100)
//     setTimeout(function () {
//         c=0;
//         text.innerHTML+=key1[c%3];
//     },1000)
// })

// $("#2").on({
//     mousedown: function () {
//         console.log("2 clicked");
//         $(this).data('timer', setTimeout(function () {
//             text.innerHTML += "2";
//             longPress = true;
//         }, 1000))
//     },
//     mouseup: function () {
//         clearTimeout($(this).data('timer'));
//         // if (!longPress) {
//         //     text.innerHTML += key2[c % 3];
//         //     c++;
//         //     $(this).data('timer', setTimeout(function () {
//         //         c = 0;
//         //     }, 1000))
//         // }
//         // longPress = false;
//     }
// })
// $("#2").on('click', function(){
//     // $("#text").text(function(index, text){
//     //     return text.replace(/r/gi, '');
//     // });
//     text.innerHTML+=key2[c%3];
//     c++;
//     setTimeout(function () {
//         text.innerHTML=text.innerHTML.slice(0,-1);
//     },100)
//     setTimeout(function () {
//         c=0;
//         text.innerHTML+=key2[c%3];
//     },1000)
// })
// $("#3").on({
//     mousedown: function () {
//         console.log("3 clicked");
//         $(this).data('timer', setTimeout(function () {
//             text.innerHTML += "3";
//             longPress = true;
//         }, 1000))
//     },
//     mouseup: function () {
//         clearTimeout($(this).data('timer'));
//         if (!longPress) {
//             text.innerHTML += key3[c % 3];
//             c++;
//             $(this).data('timer', setTimeout(function () {
//                 c = 0;
//             }, 1000))
//         }
//         longPress = false;
//     }
// })
// $("#4").on({
//     mousedown: function () {
//         console.log("4 clicked");
//         $(this).data('timer', setTimeout(function () {
//             text.innerHTML += "4";
//             longPress = true;
//         }, 1000))
//     },
//     mouseup: function () {
//         clearTimeout($(this).data('timer'));
//         if (!longPress) {
//             text.innerHTML += key4[c % 3];
//             c++;
//             $(this).data('timer', setTimeout(function () {
//                 c = 0;
//             }, 1000))
//         }
//         longPress = false;
//     }
// })
// $("#5").on({
//     mousedown: function () {
//         console.log("5 clicked");
//         $(this).data('timer', setTimeout(function () {
//             text.innerHTML += "5";
//             longPress = true;
//         }, 1000))
//     },
//     mouseup: function () {
//         clearTimeout($(this).data('timer'));
//         if (!longPress) {
//             text.innerHTML += key5[c % 3];
//             c++;
//             $(this).data('timer', setTimeout(function () {
//                 c = 0;
//             }, 1000))
//         }
//         longPress = false;
//     }
// })
// $("#6").on({
//     mousedown: function () {
//         console.log("6 clicked");
//         $(this).data('timer', setTimeout(function () {
//             text.innerHTML += "6";
//             longPress = true;
//         }, 1000))
//     },
//     mouseup: function () {
//         clearTimeout($(this).data('timer'));
//         if (!longPress) {
//             text.innerHTML += key6[c % 3];
//             c++;
//             $(this).data('timer', setTimeout(function () {
//                 c = 0;
//             }, 1000))
//         }
//         longPress = false;
//     }
// })
// $("#7").on({
//     mousedown: function () {
//         console.log("7 clicked");
//         $(this).data('timer', setTimeout(function () {
//             text.innerHTML += "7";
//             longPress = true;
//         }, 1000))
//     },
//     mouseup: function () {
//         clearTimeout($(this).data('timer'));
//         if (!longPress) {
//             text.innerHTML += key7[c % 4];
//             c++;
//             $(this).data('timer', setTimeout(function () {
//                 c = 0;
//             }, 1000))
//         }
//         longPress = false;
//     }
// })
// $("#8").on({
//     mousedown: function () {
//         console.log("8 clicked");
//         $(this).data('timer', setTimeout(function () {
//             text.innerHTML += "8";
//             longPress = true;
//         }, 1000))
//     },
//     mouseup: function () {
//         clearTimeout($(this).data('timer'));
//         if (!longPress) {
//             text.innerHTML += key8[c % 3];
//             c++;
//             $(this).data('timer', setTimeout(function () {
//                 c = 0;
//             }, 1000))
//         }
//         longPress = false;
//     }
// })
// $("#9").on({
//     mousedown: function () {
//         console.log("9 clicked");
//         $(this).data('timer', setTimeout(function () {
//             text.innerHTML += "9";
//             longPress = true;
//         }, 1000))
//     },
//     mouseup: function () {
//         clearTimeout($(this).data('timer'));
//         if (!longPress) {
//             text.innerHTML += key9[c % 4];
//             c++;
//             $(this).data('timer', setTimeout(function () {
//                 c = 0;
//             }, 1000))
//         }
//         longPress = false;
//     }
// })
// $("#0").on({
//     mousedown: function () {
//         console.log("0 clicked");
//         $(this).data('timer', setTimeout(function () {
//             text.innerHTML += "0";
//             longPress = true;
//         }, 1000))
//     }
// })
var button = document.querySelectorAll('button'),
    input = document.querySelector('input'),
    busy = true,
    hold,
    is_busy,
    delay = 1000,
    change = -1,
    click = null;
for (var i = 0, len = button.length; i < len; ++i) {
    button[i].onmousedown = function (e) {
        var text = this.getAttribute('data-text').split(""),
            number = this.getAttribute('data-number');
        busy = true;
        clearTimeout(is_busy);
        if (click !== e.target) {
            busy = false;
        }
        if (change >= text.length - 1 || click !== e.target) {
            change = 0;
            click = e.target;
        } else {
            change = change + 1;
        }
        if (text[0] === '#') {
            input.value = input.value.slice(0, -1);
            hold = setTimeout(function () {
                input.value = "";
            }, delay);
            return;
        }
        hold = setTimeout(function () {
            input.value = input.value.slice(0, -1) + number;
        }, delay);
        input.value = busy ? input.value.slice(0, -1) + text[change] : input.value + text[change];
    };
    button[i].onmouseup = function (e) {
        clearTimeout(hold);
        busy = true;
        is_busy = setTimeout(function () {
            change = -1;
            busy = false;
            e.target = null;
        }, delay);
        // put caret at the end of text input
        input.focus();
        input.selectionStart = input.selectionEnd = input.value.length;
    };
    button[i].onmouseleave=function(e){
        busy=false;
        clearTimeout(is_busy);
    }
}