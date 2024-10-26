import '../assets/App.css';
import Sidebar from '../components/sidebar';
import { useState } from 'react';
import MyInput from '../components/myinput.js';
let line_array =
[
  {tag : "h1",width:'100%',content : "Untitled" ,isunderline :false,isitalique :false,isbold:false}
];
export default function New(){
    let [lines,setLines] = useState(line_array);
    var [last,setlast] = useState(-1);

    const btn_onclick =(m,index)=>{ 
      let newarray = [...lines];
      if(last == -1){
        index = newarray.length-1;
      }
      if(m=="oli"){
        if(lines[index].tag != "oli"){
          newarray.splice(index+1,0,{tag : "oli",num:1,width:'90%',content : "" , isunderline : false , isitalique : false , isbold:false});
          setlast(index+1);
        }
        else{
          newarray.splice(index+1,0,{tag : "oli",num:lines[index].num+1,width:'90%',content : "" , isunderline : false , isitalique : false , isbold:false});
          setlast(index+1);  
      }
      }
      else if(m=="todo"){
        if(newarray[index].content==""){
          newarray[index]={tag:"todo",width:'90%',content : "",checked:false};
          setlast(index);
        }
        else{
        newarray.splice(index+1,1,{tag:"todo",width:'90%',content : "",checked:false});
        setlast(index+1);
      }
      }
      else if(m=="uli"){
        if(newarray[index].content==""){
          newarray[index]={tag : m,width:'90%',content : "" , isunderline : false , isitalique : false , isbold:false};
          setlast(index);
        }
        else{
        newarray.splice(index+1,0,{tag : m,width:'90%',content : "" , isunderline : false , isitalique : false , isbold:false});
        setlast(index+1);
        }
      }
      else{
        if(newarray[index].content==""){
        newarray[index]={tag : m,width:'90%',content : "" , isunderline : false , isitalique : false , isbold:false};
        setlast(index);
        }
        else{
          newarray.splice(index+1,0,{tag : m,width:'90%',content : "" , isunderline : false , isitalique : false , isbold:false});
          setlast(index+1);
        }
      }
      setLines(newarray);
      
    }

    const checkbox_onclick=(e,index)=>{
      let newarr = [...lines];
      newarr[index].checked = e.target.checked;
      setLines(newarr);
    }
    const change = (e,i)=>{
      e.target.style.width = `${(e.target.value.length+1)}ch`;
      let newarr = [...lines];
      newarr[i].content = document.getElementById(`${i}`).value;
      setLines(newarr);
    }
    const check = (e,index)=>{
      let method;
      let newarray = [...lines];
      if(e.key == "Backspace" && e.target.value == '' && index > 0){
        if(lines[index].tag == "p"){
          setLines(lines.filter((e,i) => i!==index));
          setlast(index-1);}
          else{
            newarray[index].tag ="p";
            setLines(newarray);
            setlast(index);
          }
      }
      else if(e.key == "Backspace" && e.target.value == '' && index == 0){
        if(lines[index].tag == "p"){
          setLines(lines.filter((e,i) => i!==index));
          setLines(newarray);
          setlast(index);
        }
        else{
          newarray[index].tag ="p";
          setLines(newarray);
          setlast(index);
        }
      }
      else if(e.key == "Enter"){
        if(e.target.value.length == 0){
          if(newarray[index].tag == "p"){
            newarray.splice(index+1,0,{tag : "p",width:'90%',content : "" , isunderline : false , isitalique : false , isbold:false});
            setlast(index+1);
          }
          else{
            newarray[index] = {tag : "p",width:'90%',content : "" , isunderline : false , isitalique : false , isbold:false};
            setlast(index);
            
          }
        }
        else{
        if(newarray[index].tag =="oli" || newarray[index].tag == "uli" || newarray[index].tag =="todo"){
          method = newarray[index].tag;
        }
        else{
          method = "p";
        }
        if(method=="oli"){
          newarray.splice(index+1,0,{tag : "oli",num:lines[index].num+1,width:'90%',content : "" , isunderline : false , isitalique : false , isbold:false}); 
        }
        else if(method=="todo"){
          newarray.splice(index+1,0,{tag:"todo",width:'90%',content : "",checked:false})
        }
        else{
          newarray.splice(index+1,0,{tag : method,width:'90%',content : "" , isunderline : false , isitalique : false , isbold:false});
        }
        setlast(index+1);
        }
        setLines(newarray);
        
      }
      else if(e.key == "ArrowDown"){
        if(lines.length > index+1){
          setlast(index+1);
        }
      }
      else if(e.key == "ArrowUp"){
        if(0 <= index-1){
          setlast(index-1);
        }
      }
    }
    return(
        <>
        <Sidebar/>
        <div id="tags-bar">
            <button onClick={()=>btn_onclick("h1",last)}>h1</button>
            <button onClick={()=>btn_onclick("h2",last)}>h2</button>
            <button onClick={()=>btn_onclick("h3",last)}>h3</button>
            <button onClick={()=>btn_onclick("oli",last)}>1. </button>
            <button onClick={()=>btn_onclick("uli",last)}><li>list</li></button>
            <button onClick={()=>btn_onclick("todo",last)}><div id="checkbox"></div></button>
            <button><span style={{fontWeight:"900"}}>B</span></button>
            <button><span style={{fontStyle:"italic",fontFamily:"serif",fontWeight:"bold"}}>I</span></button>
            <button style={{borderBottom:"2px solid #1F3823"}}><span style={{textDecoration:"underline"}}>U</span></button>
        </div>
        <div id="journal">
        {lines.map((element,index) =>{
          if(element.tag == "oli"){
            return <MyInput inputclick={()=>setlast(index)} value={element.content} num={element.num} plast={last} width={element.width} isunderline={element.isunderline} isbold={element.isbold} isitalique ={element.isitalique}  id={index} key={index} className={element.tag} onKeyDown={(e)=>check(e,index)} onChange={(e)=>change(e,index)}/>
          }
          if(element.tag == "todo"){
            return <MyInput inputclick={()=>setlast(index)} cid={`check${index}`} onclick={(e)=>checkbox_onclick(e,index)} check={element.checked}  value={element.content}  plast={last} width={element.width} isunderline={element.isunderline} isbold={element.isbold} isitalique ={element.isitalique}  id={index} key={index} className={element.tag} onKeyDown={(e)=>check(e,index)} onChange={(e)=>change(e,index)}/>
          } 
          else{
        return <MyInput inputclick={()=>setlast(index)} value={element.content}  plast={last} width={element.width} isunderline={element.isunderline} isbold={element.isbold} isitalique ={element.isitalique}  id={index} key={index} className={element.tag} onKeyDown={(e)=>check(e,index)} onChange={(e)=>change(e,index)}/>
        }})}
        </div>
        </>
    )
}