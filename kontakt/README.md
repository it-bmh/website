<header class="page-header page-header--block page-header--contact">
    <h2 class="page-section__subtitle">Kontakt</h2>
    <h1 class="page-section__title">Kde nás najdete?</h1>
</header>

<section class="section section--centered section--contact">
    <main class="section__content contact-content">
        <div class="contact-address">
        <h6 class="address-company-name">BMH spol. s r. o.</h6>
        <span class="address-line">Ondřejova 592/11a</span>
        <span class="address-line">779 00 Olomouc</span>
        <span class="address-line">IČ: 42869668</span>
        <span class="address-line">DIČ: CZ42869668</span>
        <br>
        <span class="address-signed">Zapsána u Krajského soudu v Ostravě, oddíl C, vložka 1897</span>
        <br>
        <br>
        <span class="address-line">+420 585 313 549 (7:00 - 15:00)</span>
        <br>
        <span class="address-line">bmh@bmh.cz</span>
        </div>
        <iframe class="contact__map" src="https://en.frame.mapy.cz/s/nokomopame" frameborder="0"></iframe>
    </main>
</section>

<header class="page-header page-header--block page-header--contact contact-us">
    <h2 class="page-section__subtitle">Kontakt</h2>
    <h1 class="page-section__title">Napište nám</h1>
</header>

<section class="section section--centered section--contact">
    <main class="section__content">
        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <div class="hidden-field">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </div>
        <div>
            <div class="form-input">
                <label class="form-input__label" for="name">jméno</label>
                <input class="form-input__input" type="text" name="name" placeholder="jméno"/>
            </div>
            <div class="form-input">
                <label class="form-input__label" for="surname">příjmení</label>
                <input class="form-input__input" type="text" name="surname" placeholder="příjmení"/>
            </div>
        </div>
        <div>
            <div class="form-input">
                <label class="form-input__label" for="email">email</label>
                <input class="form-input__input" type="text" name="email" placeholder="jmeno@email.cz"/>
            </div>
            <div class="form-input">
                <label class="form-input__label" for="phone">telefon</label>
                <input class="form-input__input" type="text" name="phone" placeholder="+420 123 456 789"/>
            </div>
        </div>
        <div class="form-input input-area">
            <label class="form-input__label" for="message">VAŠE ZPRÁVA</label>
            <textarea class="form-input__input form-input__input--area" name="message"></textarea>
        </div>
        <p>
            <button class="form-button" type="submit">ODESLAT ZPRÁVU</button>
        </p>
        </form>
    </main>
</section>

<Contact/>