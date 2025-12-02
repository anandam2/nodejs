let cafeReview={
    name: 'jhon',
    comment: 'Great coffee and ambiance!'
}
function thankYou(reviewObj) {
    let upperName = reviewObj.name.toUpperCase();
    let shortComment = reviewObj.comment.substring(0, 20);
    console.log(`Thank you, ${upperName}!`);
    console.log(`Your comment: "${shortComment}..."`);
}
thankYou(cafeReview);