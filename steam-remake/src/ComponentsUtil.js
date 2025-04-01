import React, { Children, useEffect, useState } from 'react'
import { GameDetails } from './GameDetailsFile'

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

export const SlidingPanel = ({children, highlightedButtonIndex, higlightStyle}) => {

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
            <div className='bottom flex'>
                {children.map((child, index) => (
                    <div style={highlightedButtonIndex == index ? higlightStyle : {}} onClick={() => setCurrentPanel(index)} className={"selecting-button " + (index == currentPanel ? 'selected' : '')}></div>
                ))}
            </div>
        </section>
    )

}

export const HighlightedGame = ({gameId, onSale, saleLeftTime}) => {

    const [mainImage, setMainImage] = useState(GameDetails[gameId].cover)
    const [leftTime, setLeftTime] = useState(saleLeftTime());
    const [saleOver, setSaleOver] = useState(false);

    const formatedMiliseconds = () => {
        const minutes = parseInt(leftTime / 60 / 1000);
        const seconds = parseInt((leftTime - (minutes * 60 * 1000)) / 1000); 
        return minutes + ":" + (seconds >= 10 ? seconds : "0" + seconds); 
    }

    const updatedLeftTime = () => {
        const updatedLeftTime = saleLeftTime();
        setLeftTime(updatedLeftTime);
        if (updatedLeftTime < 0) {
            setSaleOver(true);
        }

    }

    const getOriginalPrice = () => {
        return `R$ ${GameDetails[gameId].price.toFixed(2).replace(".", ",")}`;
    }

    const getSalePrice = () => {
        return `R$ ${(GameDetails[gameId].price * 0.3).toFixed(2).replace(".", ",")}`;
    }

    useEffect(() => {
        setInterval(updatedLeftTime, 1000);
    }, [])

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
                <section className='price'>
                    <div className={"original " + ((onSale && !saleOver) ? 'sale' : '')}>{getOriginalPrice()}</div>
                    {onSale &&
                        <div className='sale-window'>
                            {(!saleOver) &&          
                                <section className='sale-container'>
                                    <div className='title'>Promoção por tempo limitado!</div>
                                    <div>70% de desconto se você comprar em: <span className='time'>{formatedMiliseconds()}</span></div>
                                    <div className='sale-price'>{getSalePrice()}</div>
                                </section>
                            }
                            {saleOver &&
                                <section className='sale-container'>
                                    <div className='title'>Promoção encerrada <span className='sad-face'>:(</span></div>
                                    <div>O tempo esgotou e o produto voltou ao preço original</div>
                                </section>
                            }
                        </div>
                    }    
                </section>
            </div>
        </section>
    )
}