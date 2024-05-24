let pic = document.querySelector('.right');
let cursor = document.querySelector('.cursor');
let none = document.querySelector('.button');

pic.addEventListener('mousemove', function(dets){
    cursor.style.top = (dets.y -80) + 'px';
    cursor.style.left = (dets.x -1000) + 'px';
})
pic.addEventListener('mouseleave' , function(){
    cursor.style.top = '43%';
    cursor.style.left = '45%';
})

none.addEventListener('mouseenter', function(){
    cursor.style.display = 'none';
})
none.addEventListener('mouseleave', function(){
    cursor.style.display = 'flex';
})