(function (){
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //Se creo la siguiente variable para no tenerlo que actualizar cada año
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "08/04/", /* Aquí se pone la fecha, que se quiere llevar en el contador */ 
        competition = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if(today > competition){
        competition = dayMonth + nextYear;
    }
    //Fin de la Variable

    const countDown = new Date(competition).getTime(),
        x = setInterval(function(){

            const now = new Date().getTime(),
                distance = countDown - now;
            
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day))/ (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute))/second);

            if (distance < 0){
                document.getElementById("headline").innerText = "Es hoy!!!"
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //segundos
        },0) 
}());