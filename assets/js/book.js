document.querySelector(".send-request").addEventListener("click", sendMessage)
document.querySelector(".check-avail").addEventListener("click", availMessage)
document.querySelector(".wtf").addEventListener("click", availMessageKin)


function sendMessage(){

    document.querySelector(".no-booking-message").innerHTML = "I'm sorry, Daniel is not accepting booking requests at this time"
    // alert("I'm sorry, Daniel is not taking any booking requests at this time")
}


// function availMessage(){



// 	let dateInput = document.querySelector(".input-date").value
// 	let timeInput = (document.querySelector(".input-time").value)
// 	let time = timeInput.substring(0,2)

// 	if(dateInput === "" || timeInput === ""){
// 		document.querySelector(".avail-message").innerHTML = "Please enter a time and date"
        
// 	}else if (time > 11 && time < 23) {
// 		document.querySelector(".avail-message").innerHTML = "Daniel is Available!"

// 	}else{
// 		document.querySelector(".avail-message").innerHTML = "Daniel is not available. Please find another time!"
   
// 	}
	
// 	console.log(dateInput)
// 	console.log(time)
// }

// function availMessageKin(){

// alert('click working')

	// let dateInput = document.querySelector(".input-date").value
	// let timeInput = (document.querySelector(".input-time").value)
	// let time = timeInput.substring(0,2)

	// if(dateInput === "" || timeInput === ""){
	
    //     document.querySelector(".avail-message-kin").innerHTML = "Please enter a time and date"
	// }else if (time > 11 && time < 23) {

    //     document.querySelector(".avail-message-kin").innerHTML = "KindredSpirit is Available!"
	// }else{

    //     document.querySelector(".avail-message-kin").innerHTML = "KindredSpirit is not available. Please find another time!"
	// }
	
	// console.log(dateInput)
	// console.log(time)
// }