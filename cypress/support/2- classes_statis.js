class Comment {
    constructor(text){       //описання властивостей об'єкту 
        this.text = text;     //слово this вказує конкретний екземпляр класу - всі дії будуть відбуватися саме для екземпляру, а не всього класу
        this.likeQuantity = 0;

    }
    addlike() {                //метод, який додає лайки на коментар
        this.likeQuantity +=1; //або this.likeQuantity = this.likeQuantity +1;
    }

    static mergeComment(first,second){           //статичний метод, який доступний для класу, а для екземплярів НЕ доступний
        return (`${first}` + `${second}`);
    }
}


const firstComment = new Comment ('This is comment 1'); 
const secondComment = new Comment ('This is comment 1'); 

let merged = Comment.mergeComment(firstComment.text, secondComment.text);

console.log(merged);
