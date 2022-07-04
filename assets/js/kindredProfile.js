document.querySelector(".check").addEventListener("click", message)

function message(){
    console.log("click working")

    let dateInput = document.querySelector(".input-date").value
	let timeInput = (document.querySelector(".input-time").value)
	let time = timeInput.substring(0,2)

	if(dateInput === "" || timeInput === ""){
		document.querySelector(".avail-message-kin").innerHTML = "Please enter a time and date"
	}else if (time > 11 && time < 23) {
		document.querySelector(".avail-message-kin").innerHTML = "KindredSpirit is Available!"
	}else{
		document.querySelector(".avail-message-kin").innerHTML = "KindredSpirit is not available. Please find another time!"
	}
}