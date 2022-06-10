import './App.css';
import React from 'react';
import Nav from './component/Nav'
import Header from './component/Header'
import Carousel from './component/Carousel'
import SpecialOfferings from './component/SpecialOfferings'
import CategoryName from './component/CategoryName'
import Products from './component/Products'
import Data from './Data.js'
import SecondHeading from './component/SecondHeading'
import Reviews from './component/Reviews'
import AboutUs from './component/AboutUs'

class App extends React.Component {
  constructor(){
    super()
    this.state={category:1,page:1}
    this.handleClick=this.handleClick.bind(this)
    this.handlePage=this.handlePage.bind(this)
  }
  handleClick(id){
    this.setState({category:id})
  }
  handlePage(num){
    this.setState({page:num})
  }
  render(){
    if(window.innerWidth>=500) return (<div>PLease view on a mobile device</div>)
    if(this.state.page == 1) {
      return (
        <div class="fitToScreen">
          <Header />
          <div className="App">
            <Carousel />
            <SpecialOfferings />
            <CategoryName 
              handleClick={this.handleClick}
              category={this.state.category}
            />
            <Products 
              category={this.state.category} 
              data={Data[this.state.category-1]} 
            />
            {/* <div>Next</div> */}
          </div>
          <Nav handleClick={this.handlePage} page={this.state.page}/>
        </div>
      );
    } else if(this.state.page == 2){
      return(
        <div>
          <Header />
          <div className="App">
            <SecondHeading title="Customer Reviews"/>
            <Reviews />
          </div>
          <Nav handleClick={this.handlePage} page={this.state.page}/>
        </div>
      )
    }else{
      return(
        <div>
          <Header />
          <div className="App">
            <SecondHeading title="About Us"/>
            <AboutUs />
          </div>
          <Nav handleClick={this.handlePage} page={this.state.page}/>
        </div>
      )
    }
  }
}

export default App;
