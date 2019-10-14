!function(){
	var css = `
	.nose{
		position: absolute;
		top: 23px;
		left: 50%;
		transform: translate(-50%);
		width: 0;
		border: 11px solid transparent;
		border-radius: 50%;
		border-top-color: black;
	}

	.eyes{
		width: 43px;
		height: 43px;
		background: #2e2e2e;
		border: 2px solid black;
		border-radius: 50%;
	}
	.eyes.eyeLeft{
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%);
		margin-left: -100px;
	}
	.eyes.eyeRight{
		position: absolute;
		top: 0;
		right: 50%;
		transform: translate(50%);	
		margin-right: -100px;
	}
	.eyebow{
		width: 18px;
		height: 18px;
		background: white;
		border-radius: 50%;

		position: absolute;
		top: 3px;
		border: 2px solid black;
	}
	.eyebow.leftBow{
		left: 50%;
		transform: translate(-50%);
		margin-left: -106px;
	}
	.eyebow.rightBow{
		right: 50%;
		transform: translate(50%);
		margin-right: -93px;
	}
	.face{
		width: 60px;
		height: 60px;
		border: 2px solid black;
		border-radius: 50%;
		background: #f00;

		position: absolute;
		top: 73px;
	}
	.face.faceLeft{
		left: 50%;
		margin-left: -163px;
	}
	.face.faceRight{
		right: 50%;
		transform: translate(50%);
		margin-right:-133px;
	}
	.lip{
		background: #ffec00;
		width: 55px;
		height: 22px;
		border: 2px solid black;
		position: absolute;
		top: 45px;
	}
	.lip.topLeft{
		border-bottom-left-radius: 45px 25px;
		border-top: none;
		border-right: none;
		transform: rotate(-25deg);
		right: 50%;	
	}
	.lip.topRight{
		border-bottom-right-radius: 45px 25px;
		border-top: none;
		border-left: none;
		transform: rotate(25deg);
		left: 50%;
	}
	.tongueWrapper{
		width: 128px;
		height: 103px;
		position: absolute;
		bottom: 0;	
		right: 50%;
		overflow: hidden;
		margin-right: -64px;
		z-index:-1;
	}
	.tongue{
		width: 92px;
		height: 500px;
		border: 2px solid black;
		border-radius: 300px/1050px;	
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%);
		background: #a80000;
		overflow: hidden;
	}
	.tongue::before{
		position: absolute;
		content: '';
		bottom: -3px;
		width: 70px;
		height: 80px;
		margin-left: 8px;
		border-radius: 55px/64px;
		background: #ff0051;
	}

	`
	var duration = 100
	writeCode('', css, ()=>{})
	$('.setSpeed').on('click','button',function(e){
		var $button = $(e.currentTarget)
		var speed = $button.attr('data-speed')
		console.log(speed)
		$button.addClass('active')
			.siblings('.active').removeClass('active')
		switch(speed){
			case 'slow':
				duration = 100
				break
			case 'normal':
				duration = 50
				break
			case 'fast':
				duration = 10
				break
		}
	})

	function writeCode(prefix,cssCode,fn){
		var n = 0
		var domCode = document.querySelector('.code')
		var styleCode = document.querySelector('#styleCode')

		var id = setTimeout(function run(){
			n += 1
			domCode.innerHTML = Prism.highlight(prefix + cssCode.slice(0,n), Prism.languages.css, 'css')
			styleCode.innerHTML = prefix + cssCode.slice(0,n)
			domCode.scrollTop = domCode.scrollHeight
			if(n < cssCode.length){
				setTimeout(run, duration)
			}else{
				fn && fn.call
			}
		},duration)
	}

			
}.call()

