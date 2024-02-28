var total_price =0


function $(id){
	return document.getElementById(id);
}


function addNewItem(){

	let item_name = $("item_name").value
	let item_quantity = parseInt($("item_quantity").value)
	let item_price = parseFloat($("item_price").value)

	if(item_name.length == 0 || isNaN(item_quantity) || item_quantity<=0 || isNaN(item_price) || item_price<=0){
		alert("Your input is not valid!")
		return
	}
	
	let new_name = document.createElement("td")
	new_name.innerHTML = item_name
	let new_quantity = document.createElement("td")
	new_quantity.innerHTML = item_quantity
	let new_price = document.createElement("td")
	new_price.innerHTML = "$" + item_price

	let new_row =  document.createElement("tr")

	new_row.appendChild(new_name)
	new_row.appendChild(new_quantity)
	new_row.appendChild(new_price)
	
	$("bill").appendChild(new_row)

	
	// update price
	total_price += item_quantity*item_price
	updateTotal()

	/*
	 ... 
	 */

	new_row.onclick = function(){
		console.log("clicked")
		removeItem(item_quantity, item_price)
		new_row.remove()
	}
}

function removeItem(quantity, price){

	total_price -= price*quantity
	updateTotal()
}

function updateTotal(){
	$("total_price").innerHTML = "$" + total_price.toFixed(2)
}

function removeElement(element){
	element.remove()
}

function resetValues()
{
	location.reload() 
}


window.onload = function(){
	$("add_btn").addEventListener('click',function(){
		addNewItem()
	})
	$("reset_btn").onclick = function(){
		resetValues()
	}
}

