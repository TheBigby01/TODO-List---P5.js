var AddButton;
var TextBox;
var List;
var Buttons = [];
var mainDiv;
var n = 0;

function setup(){
	mainDiv = createDiv();
	mainDiv.addClass('container');
	TextBox = createInput();
	TextBox.parent(mainDiv);
	AddButton = createButton('+');
	AddButton.parent(mainDiv);
	AddButton.addClass('btn-large waves-effect ');
	List = createElement('ol');
	var z = createDiv();
	z.addClass('card-panel red');
	z.parent(createDiv());
	List.parent(z);
	AddButton.mousePressed(()=>{
		if(TextBox.value().length<=60){
				var x = createElement('li',TextBox.value() + "     ");
				x.parent(List);
				x.addClass('center-align flow-text');
				var y = createButton("Done").parent(x);
				y.addClass('btn');
				y.mousePressed(removeElement);
			}
	});
}

function removeElement(){
	this.parent().remove();
}
