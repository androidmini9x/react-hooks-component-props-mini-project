import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}){

	let imoji;
	if (minutes >= 30) {
		imoji = "🍱".repeat(Math.round(minutes/10));
	}else {
		imoji = "☕️".repeat(Math.round(minutes/5));
	}

	return (
		<article>
			<h3>{title}</h3>
			<small>{date} · {imoji} {minutes} min read</small>
			<p>{preview}</p>
		</article>
	);
}

export default Article;