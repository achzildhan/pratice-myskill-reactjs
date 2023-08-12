import { Component } from 'react';
import './App.css';
import ReactGA from "react-ga";
import $ from "jquery";
import Header from './component/header';
import About from './component/about';
import Contact from './component/contact';
import Resume from './component/resume';
import Portfolio from './component/portfolio';
import Footer from './component/footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({
          resumeData : data
        });
      }.bind(this), 
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return(
      <div className='App'>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portofolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    )
  }
}

export default App;
