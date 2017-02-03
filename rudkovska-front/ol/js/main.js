'use strict';

var tmpl = _.template(document.getElementById('comment-template').innerHTML);

var commentsModel = [
	{
		name: 'Самуил',
		data: '13 октября 2011 г.',
		message: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!',
	},
	{
		name: 'Лилия Семёновна',
		data: '14 октября 2011 г.',
		message: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
	},
	{
		name: 'Лилия Семёновна',
		data: '14 октября 2011 г.',
		message: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?',
	}
];

init();

function drawComments() {
	document.getElementById('msgs-box').innerHTML = tmpl({
		comments: commentsModel
	});
};

function addComment(e) {
	e.preventDefault();

	var date = new Date();
	var now = date.toLocaleString("ru", {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	//	hour: 'numeric',
	//	minute: 'numeric'
	});

	var comment = {
		name: 'userName',
		message: commentForm['comment'].value,
		data: now
	};

	commentsModel.push(comment);
	commentForm['comment'].value = '';
	drawComments();
};

function init() {
	drawComments();
};




