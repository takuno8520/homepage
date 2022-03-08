$(function () {

    //slick
    $('.slider').slick({
        slidesToShow: 1,    // 表示する画像数
        slidesToScroll: 1,  // スクロール枚数
        fade: true,         // フェードで切り替える(1枚表示の場合)
        pauseOnHover: false,// 画像を止める
        autoplay: true,     // 自動スライド
        autoplaySpeed: 3000,// 変更タイミング
        speed: 1000,        // スクロールスピード
        dots: true,         // ドットを表示する
        infinite: true,     // ループさせる
    });
    //slick
    $('.slider_sp').slick({
        slidesToShow: 1,    // 表示する画像数
        slidesToScroll: 1,  // スクロール枚数
        fade: true,        // フェードで切り替える(1枚表示の場合)
        pauseOnHover: false,// 画像を止める
        autoplay: true,     // 自動スライド
        autoplaySpeed: 3000,// 変更タイミング
        speed: 1000,        // スクロールスピード
        dots: true,         // ドットを表示する
        infinite: true,     // ループさせる
    });
});
/* html
        <section id="slider_box">
            <ul class="slider">
                <li><div><img src="img/slid/slid_1.jpeg" alt=""></div></li>
                <li><div><img src="img/slid/slid_2.jpeg" alt=""></div></li>
                <li><div><img src="img/slid/slid_3.jpeg" alt=""></div></li>
                <li><div><img src="img/slid/slid_4.jpeg" alt=""></div></li>
                <li><div><img src="img/slid/slid_5.jpeg" alt=""></div></li>
                <li><div><img src="img/slid/slid_6.jpeg" alt=""></div></li>
            </ul>
            <ul class="slider_sp">
                <li><div><img src="img/slid/slid_1.jpeg" alt=""></div></li>
                <li><div><img src="img/slid/slid_2.jpeg" alt=""></div></li>
                <li><div><img src="img/slid/slid_3.jpeg" alt=""></div></li>
                <li><div><img src="img/slid/slid_4.jpeg" alt=""></div></li>
                <li><div><img src="img/slid/slid_5.jpeg" alt=""></div></li>
                <li><div><img src="img/slid/slid_6.jpeg" alt=""></div></li>
            </ul>
            
        </section>

 */
/* css

#slider_box{
    //background-color: rgba(255, 149, 255, 0.5);
    //https://www.risewill.co.jp/blog/archives/10103
    width: 100 %;
    height: auto;
    margin - top: 8rem;

	.slider{
        width: 100 %;
        @include mq(xl) { display: block; }
        @include mq(l)  { display: block; }
        @include mq(m)  { display: block; }
        @include mq(s)  {
            display: block;
            width: 100 %;
            margin - bottom: 0;
            order: 0;
        }
        @include mq(xs) { display: none; }
        @include mq(xxs){ display: none; }
		li{
            position: relative;
            width: 100 %;
            div{
                height: 280px;
                position: relative;
                &::before{
                    display: block;
                    content: '';
                    padding - top: 100 %;
                }
                img{
                    object - fit: cover; // この一行を追加するだけ！
                    position: absolute;
                    top: 0;
                    width: 100 %;
                    height: 280px;
                }
            }
        }
		//ドットナビゲーション
		.slick - dots{
            display: flex;
            justify - content: flex - end;
            bottom: 0.3rem;
            padding - right: 0.5rem;
            @include mq(s){
                display: none!important;
            }
			li{
                width: 0.5rem;
                height: 0.5rem;
                background - color: rgba(255, 255, 255, 0.5);
                border - radius: 50 %;
				&.slick - active{
                    background - color: #F79A00;
                }
				button{
                    display: none;
                }
            }
        }
    }
	.slider_sp{
        width: 100 %;
        @include mq(xl) { display: none; }
        @include mq(l)  { display: none; }
        @include mq(m)  { display: none; }
        @include mq(s)  {
            display: none;
            width: 100 %;
            margin - bottom: 0;
            order: 0;
        }
        @include mq(xs) { display: block; }
        @include mq(xxs){ display: block; }
		li{
            position: relative;
            width: 100 %;
            div{
                height: 280px;
                position: relative;
                &::before{
                    display: block;
                    content: '';
                    padding - top: 100 %;
                }
                img{
                    object - fit: cover; //この一行を追加するだけ！
                    position: absolute;
                    top: 0;
                    width: 100 %;
                    height: 280px;
                }
            }
        }
		//ドットナビゲーション
		.slick - dots{
            display: flex;
            justify - content: flex - end;
            bottom: 0.3rem;
            padding - right: 0.5rem;
            @include mq(s){
                display: none!important;
            }
			li{
                width: 0.5rem;
                height: 0.5rem;
                background - color: rgba(255, 255, 255, 0.5);
                border - radius: 50 %;
				&.slick - active{
                    background - color: #F79A00;
                }
				button{
                    display: none;
                }
            }
        }
    }
    .display{ opacity: 1; }
}

*/