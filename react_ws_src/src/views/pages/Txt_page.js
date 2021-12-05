import React, { Component} from 'react'
import { Link } from 'react-router'

import {updateTotalVisitCount} from '../../api'

import X2JS from 'x2js'

export default class Txt_page extends Component {

	constructor (props) {
		super(props)

		this.state = {
			totalCount:0
		}

		this.renderCount = this.renderCount.bind(this)

	}
	
	componentDidMount(){
		
		updateTotalVisitCount().then(result => {

			this.setState({
				totalCount: result.data
			})
		})
		.catch(err =>{
			console.error(err)
		})

	}

	renderCount (){

		console.log('-------------')

		const currentCount = this.state.totalCount
	
		switch(currentCount%10) {
			case 1:
				  return `${currentCount}st`
			case 2:
				return `${currentCount}nd`
			case 3:
				return `${currentCount}rd`	
			default:
				return `${currentCount}th`
		}
	}

//	------------------------	------------------------	------------------------

	render () {
		// const { page } = this.props.params
		const page = this.props.params.page || 'home' 
		const page_x = app.settings.ws_conf.pgs[page]

		// console.log('Txt_page', page)

		if (!page || !page_x) return null

		return (
			<section id='Txt_page'>
				<div id='page-container'>
					<h1>{page_x.pg_name}</h1>
					
					<div dangerouslySetInnerHTML={{__html: page_x.txt.__cdata}} />

					<h2> Welcome, You are the {this.renderCount()} visitor!</h2>

					<div className='btns'>
					{
						(new X2JS()).asArray(page_x.btns.b).map(function (b, i) {
							console.log(b)
							return (
								<div>
									<Link to={b.u} key={i} >
										<button type='submit' className='button'>
											<span>{b.txt} <span className='fa fa-caret-right'></span></span>
										</button>
									</Link>

									
								</div>
							)
						})
					}
					</div>
				</div>
			</section>
		)
	}

}

Txt_page.propTypes = {
	params: React.PropTypes.any
}

Txt_page.contextTypes = {
  router: React.PropTypes.object.isRequired
}

