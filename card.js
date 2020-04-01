var data;
	$.ajax({
	  type: "GET",  
	  url: "https://abidlabs.github.io/infinite-taboo/out_data/data1.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		data = $.csv.toArrays(response);
		pickRandomSample(data);
	  }   
	});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function pickRandomSample(fullData){
	var sample = fullData[Math.floor(Math.random() * fullData.length)];
	setCardData(sample)
}

function setCardData(sample){
	$("#key-word").html(sample[0])
	
	var taboo_words = sample[1].split(",")
	shuffleArray(taboo_words)
	
	var taboo_words_holders = $('#taboos-div').children()
	for (var i = 0; i < taboo_words_holders.length; i++){
		console.log(taboo_words_holders[i])
		console.log(taboo_words[i])		
		taboo_words_holders[i].innerHTML = taboo_words[i]
	}

}