import Layout from '../components/myLayoutAfter';
import { IoMdCheckmark } from "react-icons/io";
import css from "../style.css"
import Router from 'next/router';
import { Post, Get } from '../components/http';
import { ShowInfo,CheckBox } from '../components/Verify';
import Alert from '../components/SuccessAlert';

class message extends React.Component{
    constructor(props){
        super(props);
        this.state = {  
            checkBasic: 'false',
            checkDetail: 'false',
            checkRel: 'false',
            feedback:'',
            uId: '',
            eId:'',
            json: [],
            funcJson :[],
            relJson:[],
            relPairJson:[],
            showAlert:"none"
        }
      
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount(){
        const uId = localStorage.getItem('uId')
        this.setState({
            uId: uId,
            eId: eId,
        })
        const data1={
            eId: eId
        }
       
        Get('check_entity', data1).then(res=>{
            var json = []
            var json1 =[]
            var json2 =[]
            this.setState({
                json: res
            })
            res.function.map(item=>{
                json.push(item.function)
            })
            res.relationship.map(item=>{
                var a = `${item.eName},${item.sDate},${item.bPlace}`
                json1.push(a)
                json2.push(item.relPairs)
            })
            this.setState({
                funcJson: json,
                relJson: json1,
                relPairJson: json2
            })
        })
       
    }
    handleChange(name,val){
        this.setState({
            [name] : val
        })
    }
    handleClick(e){
        e.preventDefault();
        var name = e.target.name
        var role = localStorage.getItem('role')
        if(name == "reject_entity"){
            const data = {
                feedback:
                    {
                    eType: this.state.eType,
                    eName: this.state.eName,
                    eDate: this.state.eDate,
                    eTitle: this.state.eTitle,
                    sDate: this.state.sDate,
                    function: this.state.function,
                    rel1: this.state.rel1,
                    rel2: this.state.rel2,
                    alterName: this.state.alterName,
                    alterType: this.state.alterType,
                    sumNote: this.state.sumNote,
                    fullNote: this.state.fullNote,
                    bPlace: this.state.bPlace,
                    dPlace: this.state.dPlace,
                    ePrepared: this.state.ePrepared,
                    feedback:this.state.feedback,   
                },
                eId: this.state.eId,
                uId: this.state.uId,
                role: role
            }
            console.log(data)
            Post(name,data).then(res=>{
                if(res == "true"){
                    alert("Reject successfully")
                    Router.push({
                        pathname:`/reEntity/${this.state.uId}`
                    })
                }else{
                    this.setState({
                        showAlert:"block"
                    })
                }
            })
        }else if(name == "approve_entity"){
            const data = {
                uId: this.state.uId,
                eId: this.state.eId,
            }
            Get(name,data).then(res=>{
                if(res == "true"){
                    Router.push({
                        pathname:`/../reEntity/${this.state.uId}`
                    })
                }else{
                    this.setState({
                        showAlert:"block"
                    })
                }
            })
        }
        
    }
    
    render(){
        return(
            <div>
                <Layout /> 
                <div style={{display:this.state.showAlert}}>
                    <Alert title="Sorry!" content="This entity is verified by others." button="Ok" url={`/../reEntity/${this.state.eId}`} />
                </div>
                <div className={css.bannerView}>
                    <label>Basic Information</label>
                </div> 

                <div className={css.boxView}>
                    <div className="form-group">
                        <label className={css.labelView}>Type</label> 
                        <label style={{position:"absolute",right:'5%'}}>If this field pass, please <IoMdCheckmark/></label>     
                        <br/>
                        <input type="text" className={css.inputView} readOnly={true} value={this.state.json.eType}/>
                        <CheckBox name="checkBasic" checked={this.state.value} value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                   
                        <ShowInfo label="Name" showVal={this.state.json.eName} />
                    </div>

                    <div className="form-group">
                        <ShowInfo label="Subname of the entity" showVal={this.state.json.eTitle} checkName="eTitle" 
                        checked={this.state.value} onChecked={this.handleChange} />       
                    </div>

                    <div className="form-group">
                        <ShowInfo label="Alternative Type" showVal={this.state.json.alterType} checkName="alterType" 
                        checked={this.state.value} onChecked={this.handleChange} />       
                    </div>
                    <div className="form-group">
                        <ShowInfo label="Alternative Name" showVal={this.state.json.alterName} checkName="alterName" 
                        checked={this.state.value} onChecked={this.handleChange} />       
                    </div>
                 
                    <div className="form-group">
                        {this.state.type=='Person'?
                            <ShowInfo label="Birth date" showVal={this.state.json.sDate} checkName="sDate" 
                            checked={this.state.value} onChecked={this.handleChange} />
                            :
                            <ShowInfo label="Date from" showVal={this.state.json.sDate} checkName="sDate" 
                            checked={this.state.value} onChecked={this.handleChange} />}
                    </div>

                    <div className="form-group">
                        {this.state.type=='Person'?
                        <ShowInfo label="Death date" showVal={this.state.json.eDate} checkName="eDate" 
                        checked={this.state.value} onChecked={this.handleChange} />
                            :
                        <ShowInfo label="To" showVal={this.state.json.eDate} checkName="eDate" 
                        checked={this.state.value} onChecked={this.handleChange} />}
                    </div>

                    <div className="form-group">
                        {this.state.type=='Person'?
                        <ShowInfo label="Birth Place" showVal={this.state.json.bPlace} checkName="bPlace" 
                        checked={this.state.value} onChecked={this.handleChange} />
                            :
                        <ShowInfo label="Place  of  Existence" showVal={this.state.json.bPlace} checkName="bPlace" 
                        checked={this.state.value} onChecked={this.handleChange} />}
                    </div>
                    <div className="form-group">
                        {this.state.type=='Person'?
                        <ShowInfo label="Death Place" showVal={this.state.json.dPlace} checkName="dPlace" 
                        checked={this.state.value} onChecked={this.handleChange} />
                            :
                        <ShowInfo label="Place of Last Existence" showVal={this.state.json.dPlace} checkName="dPlace" 
                        checked={this.state.value} onChecked={this.handleChange} />}
                    </div>
                     

                </div> 
                   
                 
                    <div>
                        <div className={css.bannerView}>
                            <span>Detail Information</span>
                        </div> 
                        <div className={css.boxView}>

                            <div className="form-group">
                                <ShowInfo label="Occupation" showVal={this.state.funcJson} checkName="function" 
                                checked={this.state.value} onChecked={this.handleChange} />       
                            </div>

                            <div className="form-group">
                                <ShowInfo label="Summary Note" showVal={this.state.json.sumNote} checkName="sumNote" 
                                checked={this.state.value} onChecked={this.handleChange} />       
                            </div>
                            <div className="form-group">
                                <ShowInfo label="Full Note" showVal={this.state.json.fullNote} checkName="fullNote" 
                                checked={this.state.value} onChecked={this.handleChange} />       
                            </div>
                        </div> 
                     
                        
                        <div className={css.bannerView}>
                                <label>Relationship</label>
                        </div>
                        {
                            this.state.relJson.map((item,index) =>(
                                <div className={css.boxView} key ={item}>  
                                    <div className ="form-group"  >
                                        <label className={css.labelView}>Related Entity</label><br/>
                                        <input type="text" className={css.inputView} readOnly={true} value={item}/><br/>
                                        <label className={css.labelView}>Relationship</label><br/>
                                        <input type="text" className={css.inputView} readOnly={true} value={this.state.relPairJson[index]}/>
                                        <input name="rel2" className="form-check-input" className ={css.checkStyle} type="checkbox" checked={this.state.value} onChange={this.handleChange}/>
                                    </div> 
                                </div>
                            ))
                        }
                            
                        <div className={css.boxView}>
                            <div className="form-group">
                                <ShowInfo label="Prepared by" showVal={this.state.json.ePrepared} checkName="ePrepared" 
                                checked={this.state.value} onChecked={this.handleChange} />       
                            </div>
                            <div className="form-group">
                                <label className={css.labelView}>Feedback:</label><br/>
                                <textarea className ="form-control" name="feedback" style = {{width:"80%",position:'relative',left:"10%"}} type="text" value={this.state.value}
                                onChange={this.handleChange} rows = "5"/>                       
                     
                            </div>
                            <div style= {{textAlign:"center"}}>
                                <button type="button" name="approve_entity" className="btn btn-info btn-lg" 
                                style={{borderRadius:"4px",marginTop:"20px"}} onClick ={this.handleClick}>Approve entity</button>
                                <button type="button" name="reject_entity" className="btn btn-danger btn-lg" 
                                style={{borderRadius:"4px",marginTop:"20px",marginLeft:"50px"}} onClick ={this.handleClick}>Reject entity</button>
                                </div>
                                
                            </div>
                   </div> 
        
            </div>         

        );
    }
   
}



export default message;

