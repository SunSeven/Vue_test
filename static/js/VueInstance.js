var obj = {
	foo: "foo"
};

// Prevent from modifying the current property
Object.freeze(obj) 

var elementVM = new Vue({
	el: "#element",
	// data() {
	// 	return {obj}
	// }
	data: obj
});