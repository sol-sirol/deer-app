import logo from "./assets/logo.jpg";
import AnimatedSection from "./components/AnimatedSection";

function App() {
  return (
    <div className="app">
      <AnimatedSection variant="logo">
        <img className="app__logo" src={logo} />
      </AnimatedSection>

      <header>
        <AnimatedSection>
          <h1>Магазин разливного пива «Литровка» в Чаплыгине</h1>
          <p>Свежее недорогое пиво на розлив с отличным вкусом!</p>
        </AnimatedSection>
      </header>

      <section>
        <AnimatedSection>
          <h2>Акции и скидки</h2>
        </AnimatedSection>

        <AnimatedSection variant="section">
          <div className="promo">
            <h3>Первое посещение – 20% скидка</h3>
            <p>
              Приходите в «Литровку» впервые и получите{" "}
              <strong>20% скидку</strong> на первую покупку.
            </p>
            <p>Акция действует для всех новых клиентов.</p>
          </div>
        </AnimatedSection>
        <AnimatedSection variant="section">
          <div className="promo">
            <h3>Бесплатная доставка от 3000 рублей</h3>
            <p>
              Закажите на сумму от <strong>3000 рублей</strong> и получите
              доставку в подарок. Успейте воспользоваться выгодным предложением!
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection variant="section">
          <div className="promo">
            <h3>Скидка на все разливное пиво</h3>
            <p>Скидка 10% на все разливное пиво после 20:00 с ПН по ЧТ</p>
          </div>
        </AnimatedSection>
      </section>

      <section>
        <AnimatedSection>
          <h2>Почему выбирают «Литровку»?</h2>
        </AnimatedSection>

        <AnimatedSection variant="section">
          <ul>
            <li>
              <strong>Низкие цены</strong> – лучшее соотношение качества и
              стоимости
            </li>
            <li>
              <strong>Свежесть</strong> – регулярные поставки, пиво не
              застаивается
            </li>
            <li>
              <strong>Удобное расположение</strong> – центр Чаплыгина, рядом с
              [ориентир]
            </li>
            <li>
              <strong>Акции и скидки</strong> – 20% за первое посещение!
            </li>
          </ul>
        </AnimatedSection>
      </section>

      <section>
        <AnimatedSection>
          <h2>Наше разливное пиво</h2>
        </AnimatedSection>

        <AnimatedSection variant="section">
          <p>У нас всегда в наличии:</p>
          <ul>
            <li>Светлое пиво – легкое и освежающее</li>
            <li>Темное пиво – насыщенный вкус и аромат</li>
            <li>Пшеничное пиво – мягкое с фруктовыми нотами</li>
            <li>Специальные сорта – попробуйте новинки!</li>
          </ul>
          <p>Цены от **XX рублей за литр** – уточняйте в ассортименте!</p>
        </AnimatedSection>
      </section>

      <section>
        <AnimatedSection>
          <h2>Как нас найти?</h2>
        </AnimatedSection>

        <AnimatedSection variant="section">
          <p>
            Мы находимся в <strong>центре Чаплыгина</strong> по адресу:{" "}
            <strong>[улица, дом]</strong>.
          </p>
          <p>
            Рядом с [ориентир, например: «рядом с парком Победы» или «через
            дорогу от ТЦ»].
          </p>
          <p>
            Работаем <strong>ежедневно с 12:00 до 23:00</strong>. Ждем вас!
          </p>
        </AnimatedSection>
      </section>

      <footer>
        <p>
          ™ 2025 «Литровка» – магазин разливного пива в Чаплыгине. Работаем с
          12:00 до 23:00.
        </p>
        <p>
          Телефон: <a href="tel:+7XXX-XXX-XX-XX">+7XXX-XXX-XX-XX</a> (звоните
          или пишите в WhatsApp).
        </p>
      </footer>

      {/* <BeerDiscount /> */}
    </div>
  );
}

export default App;
