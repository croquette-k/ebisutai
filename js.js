$(function(){

    /* ローディング */
        /* vivus */
    var stroke;
    stroke =new Vivus( "loading-anm", //SVGに指定したID
    {
        start: "manual",
        type: "oneByOne",  //アニメーションのタイプ
        duration: 70, //アニメーションの時間
        forceRender: false, //パスが更新で再レンダリングさせない
    },
    function (obj) {
    obj.el.classList.add("done"); //アニメーション後にdoneクラスを付与
    }
    );

    $('.loading-anime').show();

    stroke.play();//SVGアニメーションの実行

    gsap.registerPlugin(ScrollTrigger);


});
  
  
$(window).on('load',function(){
    $(".loading").fadeOut('slow');
    $(".loading-anime").fadeOut('slow');

    gsap.from(".mainvisual1", {
        opacity: 0,
        y: 80,
        duration: 1.0,
        ease: Power4.out,
        delay: 1,
    });
    gsap.from(".mainvisual2", {
        opacity: 0,
        y: -100,
        duration: 1.5,
        ease: Power4.out,
        delay: 1,
    });
    gsap.from(".char", {
        y: 60,
        ease: Power4.out,
        stagger: 0.06,
        delay: 2,
    });

});

$(function(){

    
    /* ハンバーガーメニュー */
    $(".openbtn").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    });
    
    $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    });


    /* アコーディオン */
    $('.faq-title').on('click', function() {//タイトル要素をクリックしたら
        var findElm = $(this).next(".faq-box");//直後のアコーディオンを行うエリアを取得し
        $(findElm).slideToggle();//アコーディオンの上下動作
        
        if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
            $(this).removeClass('close');//クラス名を除去し
        }else{//それ以外は
            $(this).addClass('close');//クラス名closeを付与
        }
    });

    /* ページ内リンク */
    $('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top;	//idの上部の距離を取得
        $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        return false;
    });

    /* gsap */


    document.querySelectorAll(".fdin_up").forEach((item) => {
        gsap.from(item,{
            y: 30,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
            }
        });
    });

    const concept = gsap.timeline({
        scrollTrigger: {
            trigger: '.concept h2',
            start: 'top 75%',
          }  
        })

    concept.from(".concept h2",{
        y: 10,
        opacity: 0,
        duration: 0.5,
    })
    .from(".concept-text1", {
        y: 10,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
    },'>')
    .from(".concept-text2", {
        y: 10,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
    },'>')
    



    gsap.to(".about", {
        backgroundColor: "#073061",
        duration: 1,
        scrollTrigger: {
          trigger: '.about',
          start: 'top 50%',
          toggleActions: "play reverse play reverse",
        }
    });

    document.querySelectorAll(".feature-img").forEach((item) => {
        gsap.fromTo(item,{
            opacity: 0,
            y: 20,
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'top 75%',
            }
        });
    });
    document.querySelectorAll(".feature-line").forEach((item) => {
        gsap.fromTo(item,{
            scale: 0,
        },
        {
            scale: 1,
            duration: 1,
            scrollTrigger: {
            trigger: item,
            start: 'top 75%',
        }
        });
    });
    document.querySelectorAll(".feature-title .rect").forEach((item) => {
        gsap.fromTo(item,{
            x: "-101%"
        },
        {
            x: "101%",
            duration: 1,
            ease: "Power3.inOut",
            scrollTrigger: {
            trigger: item,
            start: 'top 75%',
        }
        });
    });
    document.querySelectorAll(".feature-title .rect2").forEach((item) => {
        gsap.fromTo(item,{
            x: "101%"
        },
        {
            x: "-101%",
            duration: 1,
            ease: "Power3.inOut",
            scrollTrigger: {
            trigger: item,
            start: 'top 75%',
        }
        });
    });
    document.querySelectorAll(".feature-title .label").forEach((item) => {
        gsap.fromTo(item,{
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 0.3,
            delay: 0.5,
            scrollTrigger: {
            trigger: item,
            start: 'top 75%',
        }
        });
    });
    document.querySelectorAll(".feature-body").forEach((item) => {
        gsap.fromTo(item,{
            opacity: 0,
            x: -32,
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.75,
            delay: 0.5,
            scrollTrigger: {
            trigger: item,
            start: 'top 75%',
        }
        });
    });
    document.querySelectorAll(".feature-body2").forEach((item) => {
        gsap.fromTo(item,{
            opacity: 0,
            x: 32,
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.75,
            delay: 0.5,
            scrollTrigger: {
            trigger: item,
            start: 'top 75%',
        }
        });
    });
    

    gsap.set(".frame1", {
        scaleX: 0,
        "height" : 0
    });
    gsap.set(".frame2", {
        scale: 0,
    });

    gsap.set(".howto-wrapper", {
        opacity: 0,
    });

    const frame = gsap.timeline({
        scrollTrigger: {
            trigger: '.howto-frame',
            start: 'top 75%',
          }  
        })

    frame.to(".frame1", {
        scaleX: 1,
        "height" : "1px",
        duration: 0.5,
        ease: "Power4.out"
    })
    .to(".frame2", {
        scaleX: 1,
        duration: 0.5,
    },'<')
    .to(".frame2", {
        scale: 1,
        duration: 1,
    })
    .to(".howto-wrapper", {
        opacity: 1,
        duration: 0.5,
    })


    gsap.from(".scene-img1",{
        y: 30,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".scene-img1",
          start: 'top 75%',
        }
    });
    gsap.from(".scene-img2",{
        y: 30,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".scene-img2",
          start: 'top 75%',
        }
    });
    gsap.from(".scene-img3",{
        y: 30,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".scene-img3",
          start: 'top 75%',
        }
    });


    gsap.from(".sns-link img",{
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".sns-link img",
          start: 'top 75%',
        }
    });













    /* concept */
    /* vivus */

    new Vivus( 'concept-top', { // svgに指定するid名
        duration: 100, // アニメーションの長さ
        forceRender: false, //パスが更新で再レンダリングさせない
    });

});