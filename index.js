var data;
var count;

$.ajax({
  type: "GET",  
  url: "https://abidlabs.github.io/infinite-taboo/out_data/data1.csv",
  dataType: "text",       
  success: function(response)  
  {
	data = $.csv.toArrays(response);
	count = data.length
	setCount();
	setUrl();
  }   
});

function setCount(){
	$('#card-count').html(count)
}

function setUrl(){
	seed = Math.floor(Math.random() * (count + 1));
	$('#see-card-button').attr("href", 'card.html?seed=' + seed)
}

