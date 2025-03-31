import React, { Children, useState } from 'react'
import { GameDetails } from './GameDetails'

export const HeaderMenu = ({title, selected, children}) => {

    const [active, setActive] = useState(false)

    return (
        <section onMouseOver={() => {setActive(true)}} onMouseOut={() => {setActive(false)}} className={selected ? 'selected' : ''}>
            {title}
            {active &&
                <div className='dropDown'>{children}</div>
            }
        </section>
    )
}

export const DropDownItem = ({title}) => {
    return (
        <div className='item'>{title}</div>
    )
}

export const LeftSection = ({title, children, background = null}) => {
    return (
        <section className='left-section' style={{background: background}}>
            <section className='title'>{title}</section>
            {children}
        </section>
    )
}

export const MainMenu = ({children}) => {
    return (
        <section id="main-menu">
            <div>Sua loja</div>
            <div>Novidades e tendências</div>
            <div>Categorias</div>
            <div>Loja de pontos</div>
            <div>Notícias</div>
            <div>Laboratório</div>
            <section className="filler no-hover-background"></section>
            <div className='no-hover-background small-padding'>
                <div className='search-container'>
                    <input className='search-input' placeholder='Buscar'/>
                    <div>
                        <img src='https://store.fastly.steamstatic.com/public/images/v6/search_icon_btn.png'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const MainContent = ({title, children}) => {
    return (
        <section className='main-content'>
            <div className='title'>{title}</div>
            {children}
        </section>
    )
}

export const SlidingPanel = ({children}) => {

    const [currentPanel, setCurrentPanel] = useState(0)

    const nextPanel = () => {
        if (currentPanel == Children.count(children) - 1) {
            setCurrentPanel(0);
        } else {
            setCurrentPanel(currentPanel + 1);
        }
    }

    const prevPanel = () => {
        if (currentPanel == 0) {
            setCurrentPanel(Children.count(children) - 1);
        } else {
            setCurrentPanel(currentPanel - 1);
        }
    }

    return (
        <section className='sliding-panel'>
            <div className='panels'>
                <div className='slide-left-button' onClick={prevPanel}><div></div></div>
                {React.cloneElement(children[currentPanel], { key: currentPanel })}
                <div className='slide-right-button' onClick={nextPanel}><div></div></div>
            </div>
            <div className='bottom'></div>
        </section>
    )

}

export const HighlightedGame = ({gameId}) => {

    const [mainImage, setMainImage] = useState(GameDetails[gameId].cover)

    return (
        <section className='highlighted-game'>
            <div style={{width: "480%"}}>
                <img width={"100%"} src={mainImage}/>
            </div>
            <div>
                <section className='title'>{GameDetails[gameId].title}</section>
                <div className='screenshots'>
                    {
                        GameDetails[gameId].screenshots.map((src) => (
                            <div onMouseOver={() => setMainImage(src)} onMouseOut={() => setMainImage(GameDetails[gameId].cover)}>
                                <img width={"100%"} src={src}/>
                            </div>
                        ))
                    }
                </div>
                <div style={{height: "60px"}}>
                    <section className='status'>{GameDetails[gameId].status}</section>
                    <div className='tag'>Popular</div>
                </div>
                <section className='price'>R$ {GameDetails[gameId].price}</section>
            </div>
        </section>
    )
}