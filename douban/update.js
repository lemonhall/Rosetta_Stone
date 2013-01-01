var	init_voiceInput=function(){
	var tt=$("#tmpl-isay-act-field");
	var voice_input="<input type='text' x-webkit-speech lang='zh-CN' />";
		tt.after(voice_input);

	var a=chrome.tts;
	console.log(a);	

	}, router = function (){
			init_voiceInput();
	};



router();