
class BmiCalcApp extends React.Component {
  constructor(){
    super();
    this.bmiCalc = this.bmiCalc.bind(this);
    this.state = {
      weight:"initial weight",
      height:"initial height",

    };
  }



  bmiCalc() {

    const bmi = Math.round((this.state.weight/(this.state.height*this.state.height)*10000)*10)/10;
    if(bmi<18.5){this.setState({judge: 'Underweight'});
    }else if(bmi<24.9){this.setState({judge:'Normal weight'});
    }else if(bmi<30){this.setState({judge:'Overweight'});
    }else{this.setState({judge:'Obesity'});}
    this.setState({bmi: bmi});

    if(!bmi){
      alert('ERROR!!'),
        this.setState({
                        bmi:'',
                        judge:'',
        });
    }
}

  reset() {
    this.setState({ weight:'initial weight',
                    height:'initial height',
                    bmi:'',
                    judge:'',
                  });
  }






  setWeight(e) {
     this.setState({weight: e.target.value});
  }
  setHeight(e){
    this.setState({height: e.target.value});
  }



  render(){
    return (<div>
              <table>
                  <tbody>
                    <tr>
                      <td>
                          <img src="/images/taijyukei.jpg" width="100" height="100"/>
                      </td>
                      <td>
                          <ul><input type="number" value={this.state.weight} onChange={this.setWeight.bind(this)} />[kg]</ul>
                          <ul><input type="number" value={this.state.height} onChange={this.setHeight.bind(this)} />[cm]</ul>
                          <ul><button onClick={this.bmiCalc.bind(this)}>calculate</button> <button onClick={this.reset.bind(this)}>RESET</button></ul>
                          <ul>BMI: {this.state.bmi}</ul>
                          <ul>Judge: {this.state.judge}</ul>
                      </td>
                    </tr>
                  </tbody>
              </table>
            </div>
    );
  }

}



ReactDOM.render(<BmiCalcApp />, document.getElementById('content'));
