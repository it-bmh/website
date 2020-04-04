---
pageClass: frontpage
layout: FrontPage
---
<header class="frontpage__header">
    <main class="frontpage__header__content">
        <h1 class="frontpage__header__jsme-specialiste">
            Jsme specialisté 
            na bezvýkopové sanační 
            práce v potrubích
        </h1>
        <h3 class="frontpage__header__uz-temer-30-let">
            Už téměř 30 let zajišťujeme opravy a rekonstrukce trubních systémů. Pro bezvýkopovou sanaci kanalizačního nebo vodovodního potrubí vždy navrhujeme to nejlepší technologické řešení. Na míru.
        </h3>
        <router-link class="frontpage__header__button--kontaktujte-nas" to="/kontakt">Kontaktujte nás</router-link>
        <img class="frontpage__header__img" src="/img/frontpage/1.jpg" alt="">
    </main>
</header>
<main class="frontpage__content">
    <section class="section section--narrow nase-nabidka-proc-zvolit">
        <header class="section__header header--default">
            <h5 class="section__subtitle">Naše nabídka</h5>
            <h2 class="section__title title--big">Proč zvolit bezvýkopovou metodu?</h2>
        </header>
    </section>
    <section class="section section--wide section--centered">
        <div class="info-box info-box--image-left info-box--blue info-box--image-small info-box--dense-header">
            <img class="info-box__img" src="/img/frontpage/2.jpg" alt=""/>
            <main class="info-box__content">
                <h4 class="info-box__content__header">Proč pro sanaci kanalizace, vodovodního potrubí nebo revizní šachty zvolit bezvýkopovou metodu</h4>
                <p class="info-box__content__text">Konvenční obnova potrubí - tj. kopání a výměna celého potrubí - je časově a personálně značně nákladná. Bezvýkopové technologie umožňují velmi efektivní způsob opravy kanalizací i vodovodů, a představují tak plnohodnotnou alternativu, která v budoucnosti téměř nahradí klasické výkopové práce.</p>
            </main>
        </div>
    </section>
    <WhyNoDiggingSection />
    <section class="section section--narrow co-nabizime">
        <header class="section__header header--default">
            <h5 class="section__subtitle">Naše nabídka</h5>
            <h2 class="section__title title--big">Co nabízíme?</h2>
        </header>
        <main class="section__content">
            <div class="service-link service-link--kanalizace service-link--image-left service-link--white">
                <header class="service-link__header">
                    <h3 class="service-link__title">Kanalizace</h3>
                </header>
                <img class="service-link__img" src="/img/frontpage/3.jpg" alt=""/>
                <main class="service-link__content">
                    <h4 class="service-link__content__header">Rekonstrukce a opravy kanalizací</h4>
                    <p class="service-link__content__text">Provádíme bezvýkopové opravy a rekonstrukce kanalizací. Používáme k tomu rukávcové inverzní metody <b>INSAK</b> a <b>UV liner</b>. Zaměřujeme se jak na celé stavby, tak na lokální opravy a čištění kanalizací.</p>
                    <router-link to="/sluzby/kanalizace" class="service-link__content__cta">zjistit více</router-link>
                </main>
            </div>
            <div class="service-link service-link--vodovody service-link--image-right service-link--blue">
                <header class="service-link__header">
                    <h3 class="service-link__title">Vodovody</h3>
                </header>
                <img class="service-link__img" src="/img/frontpage/4.jpg" alt=""/>
                <main class="service-link__content">
                    <h4 class="service-link__content__header">Rekonstrukce a opravy vodovodů</h4>
                    <p class="service-link__content__text">Opravy a rekonstrukce vodovodů realizujeme buď pomocí bezvýkopové metody cementace nebo za použití unikátního UV rukávce <b>SAERTEX-LINER H₂O</b>, který je speciálně určený k sanaci potrubí na pitnou vodu.</p>
                    <router-link to="/sluzby/vodovody" class="service-link__content__cta">zjistit více</router-link>
                </main>
            </div>
            <div class="service-link service-link--revizni-sachty service-link--image-left service-link--white">
                <header class="service-link__header">
                    <h3 class="service-link__title">REVIZNI ŠACHTY</h3>
                </header>
                <img class="service-link__img" src="/img/frontpage/5.jpg" alt=""/>
                <main class="service-link__content">
                    <h4 class="service-link__content__header">Rekonstrukce revizních šachet</h4>
                    <p class="service-link__content__text">Opravujeme a rekonstruujeme revizní nebo kanalizační šachty různého typu (kruhové i hranaté s proměnlivým průřezem). Využíváme při tom inovativní bezvýkopovou technologii Vertiliner nebo klasickou zednickou metodu.</p>
                    <router-link to="/sluzby/revizni-sachty" class="service-link__content__cta">zjistit více</router-link>
                </main>
            </div>
            <div class="service-link service-link--robotika service-link--image-right service-link--blue">
                <header class="service-link__header">
                    <h3 class="service-link__title">ROBOTIKA</h3>
                </header>
                <img class="service-link__img" src="/img/frontpage/6.jpg" alt=""/>
                <main class="service-link__content">
                    <h4 class="service-link__content__header">Monitoring a lokální bezvýkopové opravy</h4>
                    <p class="service-link__content__text">Vlastníme 5 unikátních robotů s nejmodernější technologií. Každý robot se specializuje na určitý druh činnosti a je na to vybaven specifickým nástrojem či kamerou. Roboty ovládá operátor z kabiny vozu.</p>
                    <router-link to="/sluzby/monitoring-a-lokalni-opravy" class="service-link__content__cta">zjistit více</router-link>
                </main>
            </div>
        </main>
    </section>
    <ReferencesSection/>
    <AboutUsSection/>
</main>

<Contact />
