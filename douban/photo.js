var	init_voiceInput=function(){
	//en--for english
	//es--for spanish
	//zh-CN--for chinese
	//fr--for franch
	var tt=$(".photo_wrap");
	var voice_input="<input class='voice_input' type='text' x-webkit-speech lang='es' />";
		tt.append(voice_input);

	// var googleTts = new window.GoogleTTS();

	// googleTts.play("!esta","es", function(err) {
 //                if (err) {
 //                    console.log(err.toString());
 //                }
 //            });
	


	$(".voice_input").bind("webkitspeechchange",function(){
		var parent=$(this).parent();
		var des=parent.find("a:first");
			des=des.attr("title");
		var speech_word=$(this).val();
		bgFileHandler({method: 'play',text:des});
		console.log("期待字符串========>"+des);
		console.log("用户读出的字符串===>"+speech_word);
		console.log("距离："+levenshteinDistance(des,speech_word));
	});

	},
	bgFileHandler=function(msg){
		var msg=msg||{method: 'heartBeat'};
		var deferred = $.Deferred(); 
		var promise = deferred.promise();
		chrome.extension
			  .sendMessage(msg, function(response) {
			  		deferred.resolve(response);
			});
		return promise;
	}, 
	levenshteinDistance= function(string1, string2) {
		var intersection = 0;
		  var length1 = string1.length - 1;
		  var length2 = string2.length - 1;
		  if(length1 < 1 || length2 < 1) return 0;
		  var bigrams2 = [];
		  for(var i = 0; i < length2; i++) {
		    bigrams2.push(string2.substr(i,2));
		  }
		  for(var i = 0; i < length1; i++) {
		    var bigram1 = string1.substr(i, 2);
		    for(var j = 0; j < length2; j++) {
		      if(bigram1 == bigrams2[j]) {
		        intersection++;
		        bigrams2[j] = null;
		        break;
		  }}} 
		  return (2.0 * intersection) / (length1 + length2);  
	},
	get_image=function(){
		//http://www.douban.com/photos/album/83978505/
		//http://img3.douban.com/view/photo/thumb/public/p1828361681.jpg
		//http://img3.douban.com/view/photo/photo/public/p1828361681.jpg
		//http://img3.douban.com/view/photo/large/public/p1828361681.jpg
	},
	get_tts=function(word){
// Request URL:http://translate.google.com.hk/translate_tts?ie=UTF-8&q=como%20esta&tl=es&total=1&idx=0&textlen=9
// Request Method:GET
// Status Code:200 OK (from cache)
// Query String Parametersview sourceview URL encoded
// ie:UTF-8
// q:como esta
// tl:es
// total:1
// idx:0
// textlen:9
		var xhr = new XMLHttpRequest();
		var deferred = $.Deferred(); 
		var promise = deferred.promise();

		xhr.onerror = function(e) {
			deferred.reject(xhr, e);
        }

	    xhr.onload = function(e) {
	        if (xhr.status == 200) {
	            deferred.resolve(xhr);
	        }
	    };

		xhr.open('GET', 'http://translate.google.com.hk/translate_tts?ie=UTF-8&q=!hola&tl=es&total=1&idx=0&textlen=4', true);
	    xhr.send();

	    return promise;
	},
	upload_img=function(){
// http://www.douban.com/j/photos/addphoto

// ------------KM7cH2ae0Ij5GI3Ij5ei4gL6cH2GI3
// Content-Disposition: form-data; name="Filename"
// IMG_0154.JPG

// ------------KM7cH2ae0Ij5GI3Ij5ei4gL6cH2GI3
// Content-Disposition: form-data; name="upload_auth_token"
// 55895127:c046d80f5b5ef101623d66051a2daede919fb2ad
// 55895127:c046d80f5b5ef101623d66051a2daede919fb2ad

// ------------KM7cH2ae0Ij5GI3Ij5ei4gL6cH2GI3
// Content-Disposition: form-data; name="ck"
// BLWP

// ------------KM7cH2ae0Ij5GI3Ij5ei4gL6cH2GI3
// Content-Disposition: form-data; name="albumid"
// 83978505

// ------------KM7cH2ae0Ij5GI3Ij5ei4gL6cH2GI3
// Content-Disposition: form-data; name="category"
// photo

// ------------KM7cH2ae0Ij5GI3Ij5ei4gL6cH2GI3
// Content-Disposition: form-data; name="file"; filename="IMG_0154.JPG"
// Content-Type: application/octet-stream


// ------------KM7cH2ae0Ij5GI3Ij5ei4gL6cH2GI3
// Content-Disposition: form-data; name="Upload"
// Submit Query
// ------------KM7cH2ae0Ij5GI3Ij5ei4gL6cH2GI3--

	},
	router = function (){
			init_voiceInput();
	};



router();