//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
import '@splidejs/react-splide/css/core'
//コンポーネント
import Image from 'next/image'
//フック
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
//画像
import blue from '@/images/image_blue.png'
import blueSp from '@/images/image_blue_sp.png'
import green from '@/images/image_green.png'
import greenSp from '@/images/image_green_sp.png'
import yellow from '@/images/image_yellow.png'
import yellowSp from '@/images/image_yellow_sp.png'
import red from '@/images/image_red.png'
import redSp from '@/images/image_red_sp.png'
import purple from '@/images/image_purple.png'
import purpleSp from '@/images/image_purple_sp.png'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Slideshow() {

  //コンポーネントの出力
  return (
    <Splide className={styles.slideshow}
    hasTrack={ false }
    options={{
      type: "loop", // ループ
      autoplay: true, // 自動再生
      interval: 3000, // 自動再生の間隔
      pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
      pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
      padding: "calc((100% - 1200px) / 2)", // 左右の隙間
      classes: {
        pagination: "splide__pagination slideshow__pagination",
        page: "splide__pagination__page slideshow__page",
      },
    }}
    >
      <SplideTrack className={styles.track}>
        <SplideSlide className={styles.slide}>
            <Image
              src={blue}
              alt="blue"
              placeholder="blur"
              className={styles.pcOnly}
              style={{transition:'0.1s'}}
              priority
            /> 
            <Image
              src={blueSp}
              alt="blue"
              placeholder="blur"
              className={styles.spOnly}
              style={{transition:'0.1s'}}
              priority
            /> 
        </SplideSlide>
        <SplideSlide className={styles.slide}>
            <Image
              src={green}
              alt="green"
              placeholder="blur"
              className={styles.pcOnly}
              style={{transition:'0.1s'}}
            /> 
            <Image
              src={greenSp}
              alt="green"
              placeholder="blur"
              className={styles.spOnly}
              style={{transition:'0.1s'}}
            /> 
        </SplideSlide>
        <SplideSlide className={styles.slide}>
            <Image
              src={yellow}
              alt="yellow"
              placeholder="blur"
              className={styles.pcOnly}
              style={{transition:'0.1s'}}
            /> 
            <Image
              src={yellowSp}
              alt="yellow"
              placeholder="blur"
              className={styles.spOnly}
              style={{transition:'0.1s'}}
            /> 
        </SplideSlide>
        <SplideSlide className={styles.slide}>
            <Image
              src={red}
              alt="red"
              placeholder="blur"
              className={styles.pcOnly}
              style={{transition:'0.1s'}}
            /> 
            <Image
              src={redSp}
              alt="red"
              placeholder="blur"
              className={styles.spOnly}
              style={{transition:'0.1s'}}
            /> 
        </SplideSlide>
        <SplideSlide className={styles.slide}>
            <Image
              src={purple}
              alt="purple"
              placeholder="blur"
              className={styles.pcOnly}
              style={{transition:'0.1s'}}
            /> 
            <Image
              src={purpleSp}
              alt="purple"
              placeholder="blur"
              className={styles.spOnly}
              style={{transition:'0.1s'}}
            /> 
        </SplideSlide>
      </SplideTrack>
      <div className="splide__arrows">
        <button className={`splide__arrow splide__arrow--prev ${styles.slideshowArrow}`} data-modifier="prev">
          <FontAwesomeIcon icon={faAngleLeft} className={styles.icon}/>
        </button>
        <button className={`splide__arrow splide__arrow--next ${styles.slideshowArrow}`} data-modifier="next">
          <FontAwesomeIcon icon={faAngleRight} className={styles.icon}/>
        </button>
      </div>
      <div className={styles.slideshowFooter}>
        <button className={`splide__toggle ${styles.toggle}`}>
          <span className={`splide__toggle__play ${styles.play}`}>
            <FontAwesomeIcon icon={faPlay} className={styles.icon}/>
          </span>
          <span className={`splide__toggle__pause ${styles.pause}`}>
            <FontAwesomeIcon icon={faPause} className={styles.icon}/>
          </span>
        </button>
        <span className={styles.divider}></span>
        <ul className={`splide__pagination ${styles.pagination}`}></ul>
      </div>
    </Splide>
  )
}