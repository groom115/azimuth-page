import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Profile from './Components/profile';

function App() {
  return (
    <div className="App">
      <div className='mx-10 my-10'>
        <Header />
        <div className=' grid grid-cols-[2fr_3fr] gap-8 w-full mt-6 h-screen'  >
          <div className="min-w-[300px]" style={{ flex: 1 }}>
            <img
              src="images/map.png"
              alt="oops"
              className="w-full h-full object-cover"
            // style={{ alignSelf: 'center' }}
            />
          </div>
          <div className=''>
            <Profile />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
