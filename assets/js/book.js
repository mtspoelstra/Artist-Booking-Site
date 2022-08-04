document.querySelector(".send-request").addEventListener("click", sendMessage)
document.querySelector(".check-avail").addEventListener("click", availMessage)
document.querySelector(".wtf").addEventListener("click", availMessageKin)


function sendMessage(){

    document.querySelector(".no-booking-message").innerHTML = "I'm sorry, Daniel is not accepting booking requests at this time"
    // alert("I'm sorry, Daniel is not taking any booking requests at this time")
}



function formPostRouteLE(){
    document.querySelector(".booking-request-form").setAttribute("action", "/sendLEBookingRequest")
}

function formPostRoutePI(){
    document.querySelector(".booking-request-form").setAttribute("action", "/sendPIBookingRequest")
}

function showLiveEventRequestForm(){

    if(!document.querySelector(".private-instruction-booking-req-progression").classList.contains("hidden")){
        document.querySelector(".private-instruction-booking-req-progression").classList.add("hidden")
    }

    document.querySelector(".live-event-booking-req-progression").classList.remove("hidden")

    formPostRouteLE()    
}

function showPrivateInstrctionForm(){

    if(!document.querySelector(".live-event-booking-req-progression").classList.contains("hidden")){
        document.querySelector(".live-event-booking-req-progression").classList.add("hidden")
    }

    document.querySelector(".private-instruction-booking-req-progression").classList.remove("hidden")

    formPostRoutePI()
}

// document.querySelector(".tester").addEventListener("click", tester)

// function tester(){
//     console.log("I've been clicked")
// }
