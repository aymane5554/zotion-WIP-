import '../assets/App.css';
import Sidebar from '../components/sidebar';
export default function Home(){
    return(
        <>
        <Sidebar/>
        <div id="main">
                <p id="header">
                    Organize your <span style={{textDecoration: "underline"}}>LIFE</span><br/> by organizing your <span style={{textDecoration: "underline"}}>THOUGHTS</span>
                </p>
                <center>
                    <a href="/New" style={{textDecoration: "none",color: "#1F3823"}}><button id="add">Journal</button></a>
                </center>
        </div>
        </>
    )
}