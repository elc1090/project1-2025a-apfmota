import { HeaderMenu, DropDownItem } from './ComponentsUtil';
export const SteamHeader = () => {
    return (
        <header>
            <div className="flex right">
                <div className="download-login">
                    <a href="/#" className="download">Instale o Steam</a>
                    <span><a href="/#">iniciar sessão</a></span>
                    <span className="split">|</span>
                    <span><a href="/#">idioma</a></span>
                </div>
            </div>
            <div className="flex" id="Menu">
                <div>
                    <img id="Logo" width="176" height="44" alt="Logo Steam" src="https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"/>
                </div>
                <menu>
                    <HeaderMenu title={'Loja'} selected={true}>
                        <DropDownItem title={'Início'}/>
                        <DropDownItem title={'Lista de descobrimento'}/>
                        <DropDownItem title={'Lista de desejos'}/>
                        <DropDownItem title={'Loja de pontos'}/>
                        <DropDownItem title={'Notícias'}/>
                        <DropDownItem title={'Estatística'}/>
                    </HeaderMenu>
                    <HeaderMenu title={'Comunidade'}>
                        <DropDownItem title={'Página inicial'}/>
                        <DropDownItem title={'Discussões'}/>
                        <DropDownItem title={'Oficina'}/>
                        <DropDownItem title={'Mercado'}/>
                        <DropDownItem title={'Transmissões'}/>
                    </HeaderMenu>
                    <HeaderMenu title={'Sobre'}/>
                    <HeaderMenu title={'Suporte'}/>
                </menu>
            </div>
        </header>
    )
}