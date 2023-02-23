class Comment {
    constructor(text){       //описання властивостей об'єкту 
        this.text = text;     //слово this вказує конкретний екземпляр класу - всі дії будуть відбуватися саме для екземпляру, а не всього класу
        this.likeQuantity = 0;

    }
    addlike() {                //метод, який додає лайки на коментар
        this.likeQuantity +=1; //або this.likeQuantity = this.likeQuantity +1;
    }
}


const firstComment = new Comment ('This is comment'); //створити новий екземпляр класу 
console.log(firstComment);
console.log(firstComment.likeQuantity); //можна накож вивести властивості 

firstComment.addlike();     //викликали метод класу 
console.log(firstComment);
console.log(firstComment.likeQuantity); 



const secondComment = new Comment ('This is comment 2'); 
const thirdComment = new Comment ('This is comment 3'); 

console.log(firstComment);
console.log(secondComment);
console.log(thirdComment);