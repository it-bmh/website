---
pageClass: frontpage
layout: FrontPage
---
<header class="frontpage__header">
    <main class="frontpage__header__content">
        <h1 class="frontpage__header__jsme-specialiste">
            Jsme specialisté na bezvýkopové sanační práce v potrubích
        </h1>
        <h3 class="frontpage__header__uz-temer-30-let">
            Zajišťujeme opravy a rekonstrukce trubních systémů a používáme přitom ty nejmodernější dostupné technologie. Jsme česká firma a máme 30 let zkušeností. Pro bezvýkopovou sanaci kanalizačního nebo vodovodního potrubí vždy navrhujeme to nejlepší technologické řešení. Na míru.
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
                <p class="info-box__content__text">Konvenční obnova potrubí - tj. kopání a výměna celého potrubí - je časově a personálně značně nákladná. Bezvýkopové technologie umožňují velmi efektivní způsob opravy kanalizací i vodovodů, a představují tak skvělé řešení, které v mnohém předčí klasické výkopové práce.</p>
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
            <InfoBox
                title="Rekonstrukce a opravy kanalizací"
                text="Provádíme bezvýkopové opravy a rekonstrukce kanalizací. Používáme k tomu rukávcové metody <b>INSAK</b> a <b>UV liner</b>. Zaměřujeme se jak na celé stavby, tak na lokální opravy a čištění kanalizací."
                ctaUrl="/sluzby/kanalizace"
                ctaText="Zjistit více"
                imageUrl="/img/frontpage/3.jpg"
                :imageLeft="true"
                :imageBig="true"
                :isWhite="true"
                :extendedHeader="true"
            />
            <InfoBox
                title="Rekonstrukce a opravy vodovodů"
                text="Opravy a rekonstrukce vodovodů realizujeme buď pomocí bezvýkopové metody cementace nebo za použití unikátního UV rukávce <b>SAERTEX-LINER H₂O</b>, který je speciálně určený k sanaci potrubí na pitnou vodu."
                ctaUrl="/sluzby/vodovody"
                ctaText="Zjistit více"
                imageUrl="/img/frontpage/4.jpg"
                :imageRight="true"
                :imageBig="true"
                :isBlue="true"
                :extendedHeader="true"
            />
            <InfoBox
                title="Rekonstrukce revizních šachet"
                text="Opravujeme a rekonstruujeme revizní nebo kanalizační šachty různého typu (kruhové i hranaté s proměnlivým průřezem). Využíváme při tom inovativní bezvýkopovou technologii Vertiliner nebo klasickou zednickou metodu."
                ctaUrl="/sluzby/revizni-sachty"
                ctaText="Zjistit více"
                imageUrl="/img/frontpage/5.jpg"
                :imageLeft="true"
                :imageBig="true"
                :isWhite="true"
                :extendedHeader="true"
            />
            <InfoBox
                title="Monitoring a lokální bezvýkopové opravy"
                text="Vlastníme 5 unikátních robotů s nejmodernější technologií. Každý robot se specializuje na určitý druh činnosti a je na to vybaven specifickým nástrojem či kamerou. Roboty ovládá operátor z kabiny vozu."
                ctaUrl="/sluzby/monitoring-a-lokalni-opravy"
                ctaText="Zjistit více"
                imageUrl="/img/frontpage/6.jpg"
                :imageRight="true"
                :imageBig="true"
                :isBlue="true"
            />
        </main>
    </section>
    <ReferencesSection/>
    <AboutUsSection/>
</main>

<Contact />
