export default function Card({src, isVisible, isFinished}) {
    const className = `card ${isVisible? 'card-show':''} ${isFinished? 'card-finished':''}`;
    return(
        <li className={className}>
            <img src={src} width="204" height="144" alt=""/>
        </li>
    )
}