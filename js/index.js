window.onload=function () {
    //轮播图
    let index = 0;
    let left_btn = document.querySelector('.left-button');
    let right_btn = document.querySelector('.right-button');
    let banner = document.querySelectorAll('.picture>ul>li');
    let bottom = document.querySelectorAll('.bottom-button>ul>li');
    function change(index){
        banner.forEach(function (ele) {
            ele.style.zIndex=1;
        })
        bottom.forEach(function (elems) {
            elems.classList.remove('hot');
        })
        banner[index].style.zIndex=2;
        bottom[index].classList.add('hot');
    }
    //左右按钮
    left_btn.onclick = function(){
        index--;
        if(index<0) index=banner.length-1;
        change(index);
    }
    right_btn.onclick = function(){
        index++;
        if(index===banner.length) index=0;
        change(index);
    }
    //底部按钮
    for(var j=0;j<bottom.length;j++){
        bottom[j].nth=j;
        bottom[j].onclick=function(){
            change(this.nth);
            index=this.nth;
        }
    }
    //自动播放
    let t = setInterval(right_btn.onclick,1200);
    let picture=document.querySelector('.picture');
    picture.onmouseover=function(){
        clearInterval(t);
    }
    picture.onmouseleave=function(){
        t = setInterval(right_btn.onclick,1200);
    }


    //个人博客日记
    let diaryTab=document.querySelectorAll('.diaryTab>li');
    let diary_list=document.querySelectorAll('.diary>.diary-list');

     diaryTab.forEach(function(elem,index){
        elem.onclick=function () {
            for(var i=0;i<diaryTab.length;i++){
                diaryTab[i].classList.remove('pointer');
                diary_list[i].className='diary-list unshow';
            }
            diary_list[index].className='diary-list show';
            this.classList.add('pointer');
            diaryhover();
        }

     });
     diaryTab[0].onclick();
     function diaryhover(){
         var diarylist=document.querySelectorAll('.diary>.show>.diarycatalog>ul>li');
         diarylist.forEach(function(elem,index){
             elem.onmouseenter=function () {
                 for(var i=0;i<diarylist.length;i++){
                     diarylist[i].classList.remove('diary-on');
                 }
                 this.classList.add('diary-on');
             }
         });
     }

}
