var questions_list = [
    {
        ques : "Is there any sideeffects of not taking carbohydrates for a month?",
        ans : "Yes,diet doesn't mean of not taking carbohydrates but its about taking all nutrients with less carbohydrates instead of zero carbohydrates."
    },
    {
        ques : "what is photosynthesis?",
        ans : "the process by which green plants and some other organisms use sunlight to synthesize nutrients from carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a by-product."
    },
    {
        ques : "what is hydrolysis?",
        ans : "the chemical breakdown of a compound due to reaction with water."
    },
    {
        ques : "Is there any sideeffects of not taking carbohydrates for a month?",
        ans : "Yes,diet doesn't mean of not taking carbohydrates but its about taking all nutrients with less carbohydrates instead of zero carbohydrates."
    },
    {
        ques : "what is photosynthesis?",
        ans : "the process by which green plants and some other organisms use sunlight to synthesize nutrients from carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a by-product."
    },
    {
        ques : "what is hydrolysis?",
        ans : "the chemical breakdown of a compound due to reaction with water."
    }
];
var len = questions_list.length;
var original = document.querySelector(".question");
var original_ans = document.querySelector(".answer");
var clone;
var id=2;
for(var i = 0 ; i<len ; i++)
{
    clone = original.cloneNode(true);
    clone.setAttribute("id",""+id);
    document.querySelector(".questions").appendChild(clone);
    var ques_num = document.getElementById(""+id);
    var ques_p = ques_num.querySelector(".text");
    var j = questions_list[i];
    ques_p.textContent=j.ques;


    clone = original_ans.cloneNode(true);
    clone.setAttribute("id","ans"+id);
    document.querySelector(".questions").appendChild(clone);

    var ans_num = document.getElementById("ans"+id);
    var ans_p = ans_num.querySelector(".text");
    ans_p.textContent=j.ans;
    id++;
}

var sec = document.querySelector(".questions");
var plus;
var minus;
var ans;
var pre_minus;
var pre_plus;
var pre_ans;
var clos;
var prev=0;
var pre; 
var x;
var doc;/*
function change()
{
    pre = document.getElementById(prev);
    pre_plus = pre.querySelector(".plus-icon");
    pre_minus = pre.querySelector(".minus-icon");
    pre_ans = document.getElementById("ans"+prev);

    pre_minus.classList.toggle("hidden");
    pre_plus.classList.toggle("hidden");
    pre_ans.classList.toggle("hidden");
}*/

sec.addEventListener("click",function(event){
     x =event.target.parentElement.parentElement.parentElement.id;
    doc = document.getElementById(x);
    plus = doc.querySelector(".plus-icon");
    minus = doc.querySelector(".minus-icon");
    ans = document.getElementById("ans"+x);
    minus.classList.toggle("hidden");
    plus.classList.toggle("hidden");
    ans.classList.toggle("hidden");
    pre_plus = document.querySelectorAll(".plus-icon");
    pre_minus= document.querySelectorAll(".minus-icon");
    pre_ans = document.querySelectorAll(".answer");
    pre_ans.forEach(function(item){
        if(item!=ans){

            item.classList.add("hidden");
        }
    });
    pre_plus.forEach(function(item){
        if(item!=plus){

            item.classList.remove("hidden");
        }
    });
    pre_minus.forEach(function(item){
        if(item!=minus){
            item.classList.add("hidden");
        }
    });

});
