function StudentGrade(){

	const input_name = document.querySelector('.name').value;

	let test_socre =parseInt( document.querySelector('.test').value)

	let exam_score  =parseInt(document.querySelector('.exam').value)

	if(input_name == '' || test_socre == ''  || exam_score == '' ){
		const notice = document.createElement('div');
			notice.className = 'notification divv has-background-warning';
			notice.innerHTML = "Please input your Name  Test Socre And Your 	Eaxm Score";
			const card = document.querySelector('.card-content');
			const card_content = document.querySelector('.shift')
			card.insertBefore(notice,card_content)

		setTimeout(()=>{
			notice.remove()
		},5000)


	}else{
		if(test_socre <=100 && exam_score <=100){
			const total_socre = (test_socre + exam_score ) /2;
			if(total_socre >70){
				displa = document.createElement('div')
				displa.className = 'notification has-background-primary  mt-6 is-size-5 notice'
				displa.innerHTML = input_name+' Your Total Score is  ' +total_socre+ ' and your Grade is A naira';
				const cards = document.querySelector('.card-content');
				const diss = document.querySelector('.tax');
				cards.insertBefore(displa,diss)
				setTimeout(()=>{
					displa.remove()
				},115000)

			}
			else if(total_socre >=60 || total_socre >=69 ){
				displa = document.createElement('div')
				displa.className = 'notification has-background-primary  mt-6 is-size-5 notice'
				displa.innerHTML = input_name+' Your Total Score is  ' +total_socre+ ' and your Grade is B naira';
				const cards = document.querySelector('.card-content');
				const diss = document.querySelector('.tax');
				cards.insertBefore(displa,diss)
				setTimeout(()=>{
					displa.remove()
				},115000)

			}
			else if(total_socre >=50 || total_socre >=59 ){
				displa = document.createElement('div')
				displa.className = 'notification has-background-primary  mt-6 is-size-5 notice'
				displa.innerHTML = input_name+' Your Total Score is  ' +total_socre+ ' and your Grade is C naira';
				const cards = document.querySelector('.card-content');
				const diss = document.querySelector('.tax');
				cards.insertBefore(displa,diss)
				setTimeout(()=>{
					displa.remove()
				},115000)

			}
			else if(total_socre >=45 || total_socre>=49  ){
				displa = document.createElement('div')
				displa.className = 'notification has-background-primary  mt-6 is-size-5 notice'
				displa.innerHTML = input_name+' Your Total Score is  ' +total_socre+ ' and your Grade is D naira';
				const cards = document.querySelector('.card-content');
				const diss = document.querySelector('.tax');
				cards.insertBefore(displa,diss)
				setTimeout(()=>{
					displa.remove()
				},115000)

			}
			else if(total_socre >=40 || total_socre >=44 ){
				displa = document.createElement('div')
				displa.className = 'notification   notice has-background-primary  mt-6 is-size-5'
				displa.innerHTML = input_name+' Your Total Score is  ' +total_socre+ ' and your Grade is E naira';
				const cards = document.querySelector('.card-content');
				const diss = document.querySelector('.tax');
				cards.insertBefore(displa,diss)
				setTimeout(()=>{
					displa.remove()
				},115000)

			}
			else if(total_socre >=0 || total_socre >=39 ){
				displa = document.createElement('div')
				displa.className = 'notification notice has-background-primary  mt-6 is-size-5'
				displa.innerHTML = input_name+' Your Total Score is  ' +total_socre+ ' and your Grade is F naira';
				const cards = document.querySelector('.card-content');
				const diss = document.querySelector('.tax');
				cards.insertBefore(displa,diss)
				setTimeout(()=>{
					displa.remove()
				},115000)

			}




		}

	}





}


function CLear(){
	const clear  = document.querySelector('.notice')
	clear.remove()
}









const btn  = document.querySelector('.btn');
btn .addEventListener('click', StudentGrade)


const btns  = document.querySelector('.clear');
btns .addEventListener('click', CLear)