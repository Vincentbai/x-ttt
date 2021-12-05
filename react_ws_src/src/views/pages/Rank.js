import React, { Component} from 'react'

import {getAllRecords} from '../../api'

export default class PopUp_page extends Component {

    constructor(props) {
        super(props)
        this.state ={
            dataSource:[],  
        }
    }

    componentDidMount(){
        // get the dateSource from database
        getAllRecords().then(result=>{

            if(result.status === 200){
                this.setState({
                    dataSource: result.data
                })
            }else{
                console.log('Get rank recods failed! err code: 500')
            }

        }).catch(err=>{
            console.log('Get rank recods failed!')
        })

    }

    render() {

        return (

            <table style={{width:'150%',textAlign:'center',fontSize:20, marginLeft:'-30%'}}>
                <thead style={{backgroundColor:'#0038A8', color:'white', height:50}}>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>IP Adress</th>
                        <th>Country</th>
                        <th>Win</th>
                        <th>Visit</th>
                    </tr>
                </thead>    
                <tbody>
                    {
                    
                        this.state.dataSource.map((item, index) => {
                            return (
                                <tr  style={{height: 50}} key={item.password}>
                                    {/* <td>{index+1}</td> */}
                                    {index===0?'🏆':index===1?'🥈':index===2?'🥉':(<td>{index+1}</td>)}
                                    <td>{item.name}</td>
                                    <td>{item.ip}</td>
                                    <td>{item.country}</td>
                                    <td>{item.win_count}</td>
                                    <td>{item.login_count}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        )

    }

}