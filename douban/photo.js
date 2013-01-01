var	init_voiceInput=function(){
	var tt=$(".photo_wrap");
	var voice_input="<input type='text' x-webkit-speech lang='zh-CN' />";
		tt.append(voice_input);

	}, 
	get_image=function(){
		//http://www.douban.com/photos/album/83978505/
		//http://img3.douban.com/view/photo/thumb/public/p1828361681.jpg
		//http://img3.douban.com/view/photo/photo/public/p1828361681.jpg
		//http://img3.douban.com/view/photo/large/public/p1828361681.jpg
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