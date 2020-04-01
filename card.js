var data;
	$.ajax({
	  type: "GET",  
	  url: "out_data/data1.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		data = $.csv.toArrays(response);
		console.log(data);
	  }   
	});