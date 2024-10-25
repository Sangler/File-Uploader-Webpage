﻿document.addEventListener("DOMContentLoaded", () => {
	const btnUpdate = document.querySelector('.message');
	const btnEdit = document.querySelector('.button--orange');
	const btnSave=document.querySelector('.button--blue.save')
	const card = document.querySelector('.profile');
	const closeBtn = document.querySelectorAll('.close');

    //	Check file size before submit  \\
//	Check file size before submit  \\
    	btnSave.addEventListener('click', function (e) {
	        e.preventDefault();
	        //	Check file size before submit  \\
	        const input = document.querySelector('input[type="file"]');
	        //debugging: console.dir(input)
	        const file = input.files[0]; //from DOM object property
		if (file){
			const supportedTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
			if (!supportedTypes.includes(file.type)) { //validate file type before submit
				alert("Not supported format! Only JPEG JPG, PNG, and GIF images are allowed.");
				return;
			}
			// Check size   Kb *  byte
			if (file.size > 256*1024) {
				alert('File size too large');
				return;
			}
		}
		document.querySelector('.profile-form').submit();
	
	});

	btnEdit.addEventListener('click',function (e) {
	  e.preventDefault();
	  card.classList.add('active');
	});

	btnUpdate.addEventListener('click',function (e) {
	  e.preventDefault();
	  document.querySelector(".popup").style.display ="none";
	  card.classList.add('active');
	});

	closeBtn.forEach(function (element, index) {
	  element.addEventListener('click',function (e) {
	      e.preventDefault();
	      card.classList.remove('active');
	  });
	});


	const Img = document.querySelector("#ava");
	Img.addEventListener('click',()=>{
		document.querySelector(".popup").style.display ="inline-block";

	})
	document.querySelector('.popup span').onclick =() =>{
		document.querySelector(".popup").style.display ="none";
	}



});
