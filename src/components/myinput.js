import React,{Component} from "react";

class MyInput extends Component {
  componentDidMount(){
    if(this.props.plast!=-1){
      document.getElementById(this.props.plast).focus();
    }
  }
  componentDidUpdate(prevProps) {
    if(this.props.plast!=-1){
      document.getElementById(this.props.plast).focus();
    }
  }
  render() {
    let element_style = {
      width:this.props.width
    };
    if(this.props.isunderline){
      element_style.textDecoration = "underline";
    }
    if(this.props.isbold){
      element_style.fontWeight = "bold";
    }
    if(this.props.isitalique){
      element_style.fontStyle = "italic";
    }
    if(this.props.check){
      element_style.textDecoration = "line-through";
    }
    
    if(this.props.className == "uli"){
      return <li><input onClick={this.props.inputclick} value={this.props.value} className={this.props.className}  style={element_style} id={this.props.id} onChange={this.props.onChange} onKeyDown={this.props.onKeyDown}/></li>
    }
    else if(this.props.className == "oli"){
      return <span className="marker"><span style={{fontWeight:"900",color:"#1F3823"}}>{this.props.num}. </span><input onClick={this.props.inputclick} value={this.props.value} className={this.props.className}  style={element_style} id={this.props.id} onChange={this.props.onChange} onKeyDown={this.props.onKeyDown}/></span>
    }
    else if(this.props.className == "todo"){
      return <span className="todo-container"><input  className="check" onChange={this.props.onclick} id={this.props.cid} type="checkbox" checked={this.props.check}/> <input onClick={this.props.inputclick} value={this.props.value} className={this.props.className}  style={element_style} id={this.props.id} onChange={this.props.onChange} onKeyDown={this.props.onKeyDown}/></span>
    }
    return <input onClick={this.props.inputclick} value={this.props.value} className={this.props.className}  style={element_style} id={this.props.id} onChange={this.props.onChange} onKeyDown={this.props.onKeyDown}/>
    }
  }

export default MyInput;