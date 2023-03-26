const container = document.querySelector(".wrapper"),
player = document.querySelector(".player img"),
cpu = document.querySelector(".cpu img"),
result = document.querySelector(".result"),
options = document.querySelectorAll(".option");

console.log( container, player, cpu, result, options)

options.forEach((opt, index) => {
    opt.addEventListener('click', (e) => {
        opt.classList.add("active");
        options.forEach((opt2, index2) => {
            // console.log(index, index2);

            index !== index2 && opt2.classList.remove("active");
        });

       console.log(e.target.src)
       player.src = e.target.src

       let random = Math.floor(Math.random()*3);

       let cpuOptions = ["./rock.svg","./paper.svg","./scissor.svg"];
       cpu.src = cpuOptions[random];

       let playerValue = ["R","P","S"][index];
       let cpuValue = ["R","P","S"][random];

       console.log(playerValue, cpuValue)

       let outComes = {
        PR: "You won😉",
        SP: "You won😉",
        RS: "You won😉",
        RP: "You lose☹️",
        PS: "You lose☹️",
        SR: "You lose☹️",
        PP: "Draw",
        RR: "Draw",
        SS: "Draw"
       };
       
       let res = outComes[playerValue + cpuValue]; 
       console.log(res);
       result.innerHTML = res;
    });
});