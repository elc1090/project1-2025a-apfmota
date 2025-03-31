import { HighlightedGame, LeftSection, MainContent, MainMenu, SlidingPanel } from "./ComponentsUtil"

export const SteamBody = () => {
    return (
        <main>
            <section id="left-sections">
                <section id="gift-card-section">
                    <img alt="Vales-presente" src="https://store.fastly.steamstatic.com/public/images//gift/steamcards_promo_03.png?v=1"/>
                    <div>Vales-presente Steam</div>
                    <span>Presenteie com o prazer de jogar</span>
                </section>
                <LeftSection title={"Visto recentemente"} background="radial-gradient(circle at 0%, rgba(83,111,134,0) 20%, rgba(83,111,134,0.25) 100%)">
                    <div>Assassin's Creed Shadows</div>
                </LeftSection>
                <LeftSection title={"Recomendado"}>
                    <div>Por amigos</div>
                    <div>Por curadores</div>
                    <div>Marcadores</div>
                </LeftSection>
                <LeftSection title={"Ver categorias"}>
                    <div>Mais vendidos</div>
                    <div>Lançamentos</div>
                    <div>Em breve</div>
                    <div>Ofertas</div>
                    <div>Títulos de RV</div>
                    <div>Compatíveis com controle</div>
                    <div>Ótimos no Deck</div>
                </LeftSection>
                <LeftSection title={"Navegar por gênero"}>
                    <div>Gratuitos pra jogar</div>
                    <div>Acesso antecipado</div>
                    <div>Aventura</div>
                    <div>Ação</div>
                    <div>Casual</div>
                    <div>Corrida</div>
                    <div>Esportes</div>
                    <div>Estratégia</div>
                    <div>Indie</div>
                    <div>Multijogador Massivo</div>
                    <div>RPG</div>
                    <div>Simulação</div>
                </LeftSection>
            </section>
            <section id="main-section">
                <MainMenu/>
                <MainContent title={"Destaques e recomendados"}>
                    <SlidingPanel>
                        <HighlightedGame gameId={"MonterHunterWilds"}/>
                        <HighlightedGame gameId={"SplitFiction"}/>
                    </SlidingPanel>
                </MainContent>
            </section>
        </main>
    )
}