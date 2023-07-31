"use strict";

const btn = document.getElementById("btn");
btn.addEventListener("click", back_page);

function back_page(){
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
}
const p = document.getElementById('text');
p.textContent = '麻婆豆腐は1862年に四川省の料理店で生まれました。食堂を営む陳富春の妻の陳劉氏が材料の乏しい中、有り合わせの材料で来客（労働者）向けに「红烧豆腐（ホンシャオドウフ）」を作ったのが最初とされています。陳劉氏の顔にはあばた（麻点）があり、「陳麻婆」と呼ばれ、彼女が作る名物の豆腐料理も「陳麻婆豆腐」と呼ばれるようになりました。';

let sentence = 'I like mabo-tofu. It is hot and delicious food for me. If you have a chance to go to China, please try it!';
console.log(sentence);

console.log('麻婆豆腐を称えよ、麻婆豆腐は至高なり');