import Layout from '../components/myLayoutAfter';
import Select,{components} from 'react-select';
import React from 'react';
import { typeOptions, occOptions, pairOptions } from '../data'
import { Post, Get } from '../components/http'
import  Router  from 'next/router';
import fetch from 'isomorphic-unfetch';
import { Alert } from '../components/warnAlert'
import './config'
import { Relationship,GroupHeading } from '../components/Relationship';




const inputStyle ={
    marginBottom: 40,
    outlineStyle: 'none' ,
    border: '1px solid #ccc',
    borderRadius: '3px',
    padding: '6px 6px',
    width: '70%',
    fontFamily: "Microsoft soft",
    position:'relative',
    left:"15%"
};
const labelStyle={
    
    position:'relative',
    left:"15%"
};

const boxStyle={
    position:'relative',
    left:'20%',
    width:"60%",
    marginBottom:'20px',
    padding:'30px',
    border:'2px solid  #ffd633',
    borderRadius:'2px'

};
const bannerStyle ={
    position:'relative',
    left:'20%',
    textAlign:'center',
    marginTop:"20px",
    width:"60%",
    padding: '10px 10px',
    border:'2px solid  #ffd633',
    backgroundColor:"#ffd633",
    borderRadius:'2px'
};


class editEntity extends React.Component{
    constructor(props){
        super(props);
        this.state={
            eType:'',
            moreAlt: 'none',
            moreRe2: 'none',
            moreRe1: 'block',
            date:'',
            occ:'',
            function: '',
            eName: '',
            eTitle: '',
            alterName: '',
            alterType: '',
            sDate: '',
            eDate:'',
            bPlace:'',
            dPlace:'',
            reId:'none',
            reName0: 'none',
            relPair0: 'none',
            reId1:'none',
            reName1: 'none',
            relPair1: 'none',
            sumNote:'',
            fullNote:'',
            ePrepared: '',
            showMore: 'none',
            alertNum: 0,
            aId:'none',
            eId: 'none'
           
        };
        this.relJson = [],
        this.props.data.map((item)=>{
            const value = item.eId
            const label = `${item.eName},${item.sDate},${item.bPlace}`
        
            const rel = {}
            rel.label = label,
            rel.value = value
            this.relJson.push(rel)
        })
        this.reNameJson = []
        this.reId = []
        this.relPairJson = []
        this.funcJson = []
        this.funcJson1 = []
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleMutiSelect = this.handleMutiSelect.bind(this);
        this.errCheck = this.errCheck.bind(this)
    }
    
    componentDidMount(){
        const router = window.location.pathname
        const router1 = router.split('/')
        const eId = router1[2]
       
        const data1 = {
            eId : eId
        }
        Get('check_entity', data1).then(res=>{
            console.log(res)
            this.setState({
                eType:res.eType,
                eTitle: res.eTitle,
                eName : res.eName,
                alterType: res.alterType,
                alterName: res.alterName,
                sDate: res.sDate,
                eDate: res.eDate,
                bPlace: res.bPlace,
                dPlace: res.dPlace,
                sumNote: res.sumNote,
                fullNote: res.fullNote,
                ePrepared: res.ePrepared,
                eId: res.eId,
                aId:res.aId,
            })
            res.relationship.map((item,index)=>{
                const item1 = `${item.eName},${item.sDate},${item.bPlace}`
                const item2 = item.relPairs
                this.reNameJson.push(item1)
                this.relPairJson.push(item2)
                this.reId.push(item.reId)
                let name = `reName${index}`
                let name1 = `relPair${index}`
                console.log(name,name1)
                this.setState({
                    [name]: this.reId[index],
                    [name1] : this.relPairJson[index]
                })
            })

            res.function.map((item,index)=>{  
                let option = item.function
                this.funcJson1.push(option)
                this.funcJson.push(option)
                if(index !== res.function.length-1){
                    this.funcJson.push(",")
                }
            })
            this.setState({
                occ:this.funcJson1
            })
        })
    }
    handleChange(e){
        let name = e.target.name
        let val = e.target.value
        this.setState({[name]: val});
    }
    handleMutiSelect(selectOption){
        if(selectOption!==null){
            let option = [];
           
            selectOption.forEach(element => {
                option.push(element.label)
            });
            
            this.setState({
                occ: option
            })
        }else{
            this.setState({
                occ: ''
            })
        }
       
    }
    handleSelect(name, val){
        console.log(name,  val)
        this.setState({
            [name] : val
        })
       
    }

    handleClick(e){
        if(e.target.name=='addAlt'){
            this.setState({
                moreAlt: 'block'
            });
        }
        else if(e.target.name=='deleteAlt'){
            this.setState({
                moreAlt: 'none'
            });
        }else if(e.target.name=='add1'){
            if(this.state.moreRe1 == 'none'){
                this.setState({
                    moreRe1: 'block'
                });
            }else{
                this.setState({
                    moreRe2: 'block'
                });
            } 
        } else if(e.target.name=='delete2'){
            this.setState({
                moreRe2: 'none' 
            });
        }else if(e.target.name=='delete1'){
            this.setState({
                moreRe1: 'none' 
            });
        }
       
    }
    errCheck(section){
        let date1 = new Date(this.state.sDate);
        let date2 = new Date(this.state.eDate);
        let err = 0
        if(section == "basic"){
            if(date1.getTime()>date2.getTime()){
                alert("check birth date and death date")
                err = 1
            }
        }
        return err
    
    }

    handleSubmit(e){
        e.preventDefault();
        let uId = localStorage.getItem('uId')
        // this.errCheck()
       
        const data = {
            eType:this.state.eType,
            eTitle: this.state.eTitle,
            eName : this.state.eName,
            alterType: this.state.alterType,
            alterName: this.state.alterName,
            function: this.state.occ,
            sDate: this.state.sDate,
            eDate: this.state.eDate,
            bPlace: this.state.bPlace,
            dPlace: this.state.dPlace,
            sumNote: this.state.sumNote,
            fullNote: this.state.fullNote,
            ePrepared: this.state.ePrepared,
            eId: this.state.eId,
            reId: this.state.reName0,
            relPair: this.state.relPair0,
            reId1: this.state.reName1,
            relPair1: this.state.relPair1,
            euId : uId, 
        }
        console.log(data)
        if(e.target.name == "save"){
            Post('save_entity',data).then(res=>{
                console.log(res)
                if(res == 'true'){
                    Router.push({
                        pathname:'/'
                    })
                }
            })
        }else{
            Post('submit_entity',data).then(res=>{
                if(res == 'true'){
                    Router.push({
                        pathname:'/'
                    })
                }
            })
        }
       
    }

    render(){
        return(
            <div>
    
                <Layout /> 
                <div style={bannerStyle}>
                    <label>Basic Information</label>
                </div> 
                <form onSubmit={this.handleSubmit} >
                    <div style={boxStyle}>
                    <div className="form-group">
                       <label style={labelStyle}>Type</label><br/>
                        <Relationship name = "eType" placeholder= {this.state.eType} onChange={this.handleSelect} options={typeOptions}/>
                    </div>
                        <div className="form-group">
                            <label style={labelStyle}>Name</label><br/>
                            {this.state.type=='Person'?
                            <input type="text" style = {inputStyle} name= "eName" required ="required"
                            value={this.state.eName} 
                            onChange={this.handleChange}/>:
                            <input type="text" style = {inputStyle} name= "eName" required ="required"
                            value={this.state.eName} 
                            onChange={this.handleChange}/>
                            }
                        
                    
                            
                        </div>
                        <div className="form-group">
                            <label style={labelStyle}>Title of the entity</label><br/>
                            <input style = {inputStyle} type="text" name = "eTitle" required ="required"
                            value={this.state.eTitle}
                            onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label style={labelStyle}>Alternative Name</label><br/>
                            <input style = {inputStyle} type="text" name = "alterName" required ="required"
                            value={this.state.alterName}
                            onChange={this.handleChange}/> 
                        </div>   
                        <div className="form-group">  
                            <label style={labelStyle}>Alternative Type</label><br/>
                            <input style = {inputStyle} type="text" name = "alterType" required ="required"
                            value={this.state.alterType}
                            onChange={this.handleChange}/> 
                        </div>
                        <div className="form-group">
                        {this.state.type=='Person'?
                        <label style={labelStyle}>Birth date</label>:
                        <label style={labelStyle}>Date from</label>}
                        <br/>
                        <input type="text" style = {inputStyle} name= "sDate" required ="required"
                        value={this.state.sDate} 
                        onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        {this.state.type=='Person'?
                        <label style={labelStyle}>Death date</label>:
                        <label style={labelStyle}>To</label>}
                        <br/>
                        <input style = {inputStyle} type="text" name = "eDate" 
                        value={this.state.eDate} required ="required"
                        onChange={this.handleChange}/>
                    </div>
                   
                        {this.state.type=='Person'?
                            <div className="form-group">
                                <label style={labelStyle}>Birth Place</label><br/>
                                <input style = {inputStyle} type="text" name = "bPlace" 
                                value={this.state.bPlace} required ="required"
                                onChange={this.handleChange}
                               />
                            </div>:
                            <div className="form-group">
                                <label style={labelStyle}>Place  of  Existence</label><br/>
                                <input style = {inputStyle} type="text" name = "bPlace" 
                                value={this.state.bPlace}  required ="required"
                                onChange={this.handleChange}/>
                            </div>
                        }
                        {
                        this.state.type=='Person'?
                            <div className="form-group">
                                <label style={labelStyle}>Death Place</label><br/>
                                <input style = {inputStyle} type="text" name = "dPlace" 
                                value={this.state.dPlace} required ="required"
                                onChange={this.handleChange}/>
                            </div>:
                            <div className="form-group">
                                <label style={labelStyle}>Place of Last Existence</label><br/>
                                <input style = {inputStyle} type="text" name = "dPlace" 
                                value={this.state.dPlace} required ="required"
                                
                                onChange={this.handleChange}/>
                            </div>
                        }

                    </div> 
                   
                   
                       
                       
                    <div>
                        <div style={bannerStyle}>
                            <span>Detail Information</span>
                        </div> 
                        <div style={boxStyle}>
                            <div className ="form-group"  >
                                <label style={labelStyle}>Occupation</label><br/>
                                <div  style = {{width:'70%',left:'15%',position:'relative',marginBottom:40}}>
                                <Select                                   
                                    className="basic-single"
                                    classNamePrefix="select"
                                    required ="required"
                                    isClearable="true"                            
                                    isSearchable="true"
                                    isMulti= "true"
                                    name="occ"
                                    onChange = {this.handleMutiSelect}
                                    options={occOptions}
                                    value={this.state.value}
                                    placeholder = {this.funcJson}
                                    components={{ GroupHeading }}
                                    styles={{
                                        groupHeading: base => ({
                                            ...base,
                                            flex: '1 1',
                                            color: 'white',
                                            margin: 0,
                                        }),
                                        }}
                                    />
                                
                                    </div>                                                                              
                                </div>
                                
                                <div className="form-group">
                                    <label style={labelStyle}>Summary Note</label><br/>
                                    <textarea className ="form-control" rows="5" 
                                    style = {inputStyle} type="text" name = "sumNote" required ="required"
                                    value={this.state.sumNote}
                                    onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label style={labelStyle}>Full Note</label><br/>
                                    <textarea className ="form-control" rows="5" 
                                    style = {inputStyle} type="text" name = "fullNote" required ="required"
                                    value={this.state.fullNote}
                                    onChange={this.handleChange}/>
                                </div>
                            
    
                            </div> 
                            <div style={bannerStyle}>
                                <label>Relationship</label>
                            </div>
                            <div style={boxStyle}>
                                <div style={{display:this.state.moreRe1}}>
                                    <div className ="form-group"  >
                                        <label style={labelStyle}>Related Entity</label><br/>
                                        <Relationship name = "reName0" placeholder={this.reNameJson[0]} onChange={this.handleSelect} options={this.relJson}/>
                                        <label style={labelStyle}>Relationship</label><br/>
                                        <Relationship name = "relPair0" placeholder={this.relPairJson[0]} onChange={this.handleSelect} options={pairOptions}/> 
                                    </div>
                                </div>
                                <div style ={{textAlign:'center',marginBottom:'20px',marginTop:'20px'}}>
                                    <button name='add1' type="button" className="btn btn-info" style={{borderRadius:"4px"}} onClick={this.handleClick}>Add</button>
                                    <button name='delete1' type="button" className="btn btn-primary" style={{borderRadius:"4px",marginLeft:"50px"}} onClick={this.handleClick}>Delete</button>                                                                           
                                </div>
                            </div>
                      
                     
                            <div style={{display: this.state.moreRe2}}>
                                <div style={boxStyle}>
                                <div className ="form-group"  >
                                    <label style={labelStyle}>Related Entity</label><br/>
                                    <Relationship name = "reName1" placeholder={this.reNameJson[1]} onChange={this.handleSelect} options={this.relJson}/>
                                    <label style={labelStyle}>Relationship</label><br/>
                                    <Relationship name = "relPair1" placeholder={this.relPairJson[1]} onChange={this.handleSelect} options={pairOptions}/> 
                                <div style ={{textAlign:'center',marginBottom:'20px'}}>
                                    
                                    <button name='delete2' type="button" className="btn btn-primary" style={{borderRadius:"4px",marginLeft:"50px"}} onClick={this.handleClick}>Delete</button>                                                                           
                                </div>
                                </div>
                                </div>
                            </div>
    
                            <div>
                                <div className="form-group">
                                    <label style={labelStyle}>Prepared by</label><br/>
                                    <input style = {inputStyle} type="text" name = "ePrepared" 
                                    value={this.state.ePrepared}
                                    onChange={this.handleChange}/>
                                </div>
                                <div style ={{textAlign:'center',marginBottom:'20px'}}>
                                <button type="submit" name="submit" className="btn btn-info btn-lg" style={{borderRadius:"4px",marginTop:"20px"}}>Submit entity</button>
                                <button type="submit" name="save" className="btn btn-danger btn-lg" style={{borderRadius:"4px",marginTop:"20px",marginLeft:"50px"}}>Save entity</button>
                                </div>
                             
                            </div>
                   
                        </div>}
                </form>
            </div>
                       

        );
        
    }
} 

editEntity.getInitialProps = async function(context) {
    var url = global.url
    var method = 'get_all_rel'

    const res = await fetch(url+method);
    const data = await res.json();
  
    console.log(data)
  
    return {
        data
    };
  };
export default editEntity;