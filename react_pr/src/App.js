import './App.css';
import Grid from './components/Grid';
import {images, visibleItems, finishedItems} from "./data.js";

function App() {
  return (
    <div className="App">
      <section className='game container'>
        <Grid images={images} visibleItems={visibleItems} finishedItems={finishedItems}/>
        {/* <ul className='cards'>
          <Card src={images[0].url} width="204" height="144" alt="котяра"/>
          <Card src={images[1].url} width="204" height="144" alt="котяра"/>
          <Card src={images[2].url} width="204" height="144" alt="котяра"/>
          <Card src={images[3].url} width="204" height="144" alt="котяра"/>
          <Card src={images[4].url} width="204" height="144" alt="котяра"/>
          <Card src={images[5].url} width="204" height="144" alt="котяра"/>
        </ul> */}
      </section>
    </div>
  );
}

export default App;