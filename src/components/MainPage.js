import React from 'react';
import './App.model.css'



class MainPage extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      popular:[
        {id: 1, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true"},
        {id: 2, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true"},
        {id: 3, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true"},
        {id: 4, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true"},
        {id: 5, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true"},
        {id: 6, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true"},
        {id: 7, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true"},
        {id: 8, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true"},
        {id: 9, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true"},
        {id: 10, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true"},
        {id: 11, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true"},
        {id: 12, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p12.PNG?raw=true"}
      ],
      trending:[
        {id: 1, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t1.PNG?raw=true"},
        {id: 2, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true"},
        {id: 3, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true"},
        {id: 4, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true"},
        {id: 5, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true"},
        {id: 6, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true"},

      ],
      tv:[
        {id: 1, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv1.PNG?raw=true"},
        {id: 2, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv2.PNG?raw=true"},
        {id: 3, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv3.PNG?raw=true"},
        {id: 4, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv4.PNG?raw=true"},
        {id: 5, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv5.PNG?raw=true"},
        {id: 6, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv6.PNG?raw=true"},
        {id: 7, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv7.PNG?raw=true"},
        {id: 8, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv8.PNG?raw=true"},
        {id: 9, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv9.PNG?raw=true"},
        {id: 10, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv10.PNG?raw=true"},
        {id: 11, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true"},
        {id: 12, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv12.PNG?raw=true"}
      ],
      action:[
        {id: 1, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m1.PNG?raw=true"},
        {id: 2, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true"},
        {id: 3, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m3.PNG?raw=true"},
        {id: 4, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m4.PNG?raw=true"},
        {id: 5, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m5.PNG?raw=true"},
        {id: 6, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m6.PNG?raw=true"}
      ],
      originals:[
        {id: 1, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true"},
        {id: 2, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true"},
        {id: 3, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true"},
        {id: 4, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true"},
        {id: 5, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o5.PNG?raw=true"},
        {id: 6, image: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true"}
      ],
        }
  }
  render(){
  return (
   <div>
    <section class="main-container" >
      <div class="location" id="home">
          <h2 id="home">Popular on Netflix</h2>
          <div class="box">
          {
            this.state.popular.map(i => <div key={i.id}>
              <img src={i.image}/>
            </div>
          )}
          </div>
      </div>


      <h2 id="myList">Trending Now</h2>
      <div class="box">
        {
          this.state.trending.map(i => <div key={i.id}>
          <img src={i.image}/>
        </div>
        )}
      </div>

      <h2 id="tvShows">TV Shows</h2>
      <div class="box">
        {
        this.state.tv.map(i => <div key ={i.id}>
        <img src={i.image}/>
        </div>
        )}
      </div>


      <h2 id="movies">Blockbuster Action & Adventure</h2>
      <div class="box">
        {
        this.state.action.map(i => <div key ={i.id}>
       <img src={i.image}/>
       </div>
        )}
      </div>

      <h2 id="originals">Netflix Originals</h2>
      <div class="box">
        {
this.state.originals.map(i => <div key={i.id}>
        <img src={i.image}/>
        </div>
        )}
      </div>
      </section>
    </div>
  );
 }
}

export default MainPage;
