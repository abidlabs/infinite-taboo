var data;
	$.ajax({
	  type: "GET",  
	  url: "https://abidlabs.github.io/infinite-taboo/out_data/data1.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		data = $.csv.toArrays(response);
		setCount(data.length);
	  }   
	});

function setCount(count){
	$('#card-count').html(count)
}
