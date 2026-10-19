//Lesson-01 Introduction to React

//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {

//add variables here

const name = 'Nelly Delgado Planche';

const age = 27;

const hobbies = ['reading', 'coding', 'volunteering', 'crafting'];

return (

<div>

<p>

Hello! My name is {name} and I am {age} years old.

</p>

<p>

Hi! After taking some time away to support my family, I’m excited to get

back into learning, exploring new technologies, and building cool

projects. I enjoy being creative, solving problems, and challenging

myself to try new things. I’m looking forward to growing my skills,

especially Git and connecting with others along the way!😊

</p>

<p> Hobbies: {hobbies.join(', ')} </p>

</div>

);

}