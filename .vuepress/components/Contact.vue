<template>
    <div class="contact">
        <h4>Kontaktujte nás</h4>

        <div class="contact-boxes">
            <div class="box">
                <b>BMH spol. s r.o.</b><br><br>
                IČ 42869668 <br>
                Zapsána u Krajského soudu<br>
                v Ostravě, oddíl C, vložka 1897
            </div>

            <div class="box">
                e-mail bmh@bmh.cz <br>
                telefon (+420) 585 313 549<br>
                fax  (+420) 585 150 649
            </div>

            <div class="box">
                <b>Olomouc</b><br>
                Ondřejova 592/11A<br>
                779 00 Olomouc <br>
                Czech Republic
            </div>

            <div class="box">
                <b>Praha</b><br>
                Vyskočilova 1481/4<br>
                140 00 Praha 4 - Michle<br>
                Czech Republic
            </div>
        </div>
        <div class="certification">
            <h4>Certifikace</h4>
            <div class="certification-boxes">
                <div class="box">
                    ČSN EN ISO 9001:2008<br>
                    ČSN EN ISO 14001:2004
                </div>
                <div class="box">
                    CERTIFIKÁT č. 204/C5a/2010/090-024314 Systém INSAK®<br>
                    CERTIFIKÁT č. 090-020136 Krátký sanační rukáv<br>
                    CERTIFIKÁT č. 090-020139 Sanační klobouk
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .contact
        font-size 0.8em

    .contact-boxes
    .certification-boxes
        display flex
        justify-content space-between
        align-items flex-end

    .box
        display inline-block
        margin-right 10px

    .certification
        margin-top 10px
</style>
