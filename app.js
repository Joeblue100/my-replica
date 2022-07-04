    
    const countdown = new Date("July 5, 2022 8:00:00");

    const x = setInterval(() => {
        
        const today = new Date();

        const difference = countdown - today;

        const hours = Math.floor((difference %(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60))/(1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60))/ 1000);

        const time = `${hours}: ${minutes}: ${seconds}`;
        document.querySelector(".countdown").innerHTML = time;

        if(difference < 0){
            clearInterval(x);
            document.querySelector(".countdown").innerHTML = "EXPIRED!!!";
        }

    }, 1000);