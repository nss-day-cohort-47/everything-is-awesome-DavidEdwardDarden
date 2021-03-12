console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})



//dropdown filter for material 
const materialElement = document.querySelector("#materialSelector")
materialElement.addEventListener("change", (event) => {
	if(event.target.id === "materialSelector") {
		const materialValue = (event.target.value);
		filterLegos(materialValue);
	}else if (event.target.id === "showAll"){
		makesLegoList(useLegos())
	}
})


//filter mater
const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();