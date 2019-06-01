window.onload=function () {
    //轮播图
    let index = 0,next=0,current=0;
    let left_btn = document.querySelector('.left-button');
    let right_btn = document.querySelector('.right-button');
    let banner = document.querySelectorAll('.picture>ul>li');
    let bottom = document.querySelectorAll('.bottom-button>ul>li');
    let w=banner[0].offsetWidth;
    let flag=true;
    // function change(index){
    //     banner.forEach(function (ele) {
    //         ele.style.zIndex=1;
    //     })
    //     bottom.forEach(function (elems) {
    //         elems.classList.remove('hot');
    //     })
    //     banner[index].style.zIndex=2;
    //     bottom[index].classList.add('hot');
    // }
    // //左右按钮
    // left_btn.onclick = function(){
    //     index--;
    //     if(index<0) index=banner.length-1;
    //     change(index);
    // }
    // right_btn.onclick = function(){
    //     index++;
    //     if(index===banner.length) index=0;
    //     change(index);
    // }
    // //底部按钮
    // for(var j=0;j<bottom.length;j++){
    //     bottom[j].nth=j;
    //     bottom[j].onclick=function(){
    //         change(this.nth);
    //         index=this.nth;
    //     }
    // }

    //动画效果
    function change(){
        bottom.forEach(function (elems) {
            elems.classList.remove('hot');
        })

    }
    left_btn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next<0){
           next=banner.length-1
        }
        banner[next].style.left=-w+'px';
        animate(banner[current],{left:w});
        animate(banner[next],{left:0},function () {
            flag=true
        });
        bottom[current].classList.remove('hot');
        bottom[next].classList.add('hot');
        current=next;
    }
    right_btn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next==banner.length){
            next=0;
        }
        banner[next].style.left=w+'px';
        animate(banner[current],{left:-w});
        animate(banner[next],{left:0},function () {
            flag=true;
        });
        bottom[current].classList.remove('hot');
        bottom[next].classList.add('hot');
        current=next;
    }
    for(var j=0;j<bottom.length;j++){
        bottom[j].nth=j;
        bottom[j].onclick=function(){
            if(this.nth==current){
                return;
            }
            animate(banner[this.nth],{left:0},function () {
                flag=true;
            });
            if(current>this.nth){
                banner[this.nth].style.left=-w+'px';
                animate(banner[current],{left:w});
                animate(banner[this.nth],{left:0},function () {
                    flag=true;
                });
            }else{
                banner[this.nth].style.left=w+'px';
                animate(banner[current],{left:-w});
                animate(banner[this.nth],{left:0},function () {
                    flag=true;
                });
            }
            bottom[current].classList.remove('hot');
            bottom[this.nth].classList.add('hot');
            current=this.nth;
            next=this.nth;
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

    let viewh = window.innerHeight;
    let imgs =document.querySelectorAll('.lazyload');
    let positionarr=[];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionarr.push(parent.offsetTop + ele.offsetTop);
    });
    window.onscroll=function () {
        let scrolltop = document.documentElement.scrollTop;
        for(let i=0;i<positionarr.length;i++){
            if(scrolltop+viewh>=positionarr[i]+50){
                if(!imgs[i].src){
                    imgs[i].src=imgs[i].getAttribute('aa');
                }

            }

        }

    }


}
