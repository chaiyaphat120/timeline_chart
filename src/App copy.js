import './App.css';
import {getDateTimeObject} from './helpers/Helpers'
function App() {
  const showTime = ()=>{
    const x1 = getDateTimeObject('2021.03.29 08:00:00:000')
    const x2 = getDateTimeObject('2021-03-29T08:00:00Z') //Monday, March 29, 2021 8:00:00 AM  //thailand
    const x3 = getDateTimeObject('2021-03-29T08:00:00')  //ไม่มี Z คือ เวลาจริงในไทย
    console.log(x1.valueOf())
    console.log(x2.valueOf())
    console.log(x3.valueOf())
    console.log(new Date(2020, 2, 4).getTime())
  }
  return (
    <div className="App">
      <button onClick={showTime}/>
    </div>
  );
}

export default App;
