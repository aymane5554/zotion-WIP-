import '../assets/side.css';
import img from '../assets/journals_transparent.png';

export default function Sidebar(){
    return (
        <div id="side-bar">
            <a href="/">
                <img src={img}/>
            </a>
        </div>
    );
}