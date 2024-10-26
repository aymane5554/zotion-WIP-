import { useParams } from 'react-router-dom';
import '../assets/App.css';
import Sidebar from '../components/sidebar';
export default function Journal(){
    let {id} = useParams();
    return(
        <>
        <Sidebar/>
        <div id="main">
        {id}
        </div>
        </>
    )
}