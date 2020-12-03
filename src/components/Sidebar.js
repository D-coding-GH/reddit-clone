import React from 'react'
import sbImage1 from './images2/nottheonion.png';
import sbImage2 from './images2/technews.png';
import sbImage3 from './images2/upliftingNews.png';
import sbImage4 from './images2/savedyouaclick.png';
import sbImage5 from './images2/community5.png';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="Container">
            <div className="sBarTop">
            <h1>Top News Communities</h1>
            </div>
            <div className="topNews1">
                <div id ="nottheonion">
                    <p>1</p>
                    <object id="sbimage1" data={sbImage1} type="image/svg+xml">
                        image
                    </object>
                    <p>r/nottheonion</p>
                </div>
            </div>
            <div className="topNews1">
                <div id ="technews" >
                   <p>2</p>
                   
                    <object id="sbimage1" data={sbImage2} type="image/svg+xml">
                        image
                    </object>
                    <p>r/technews</p>
                </div>
            </div>
            <div className="topNews1">
                <div id ="uplift">
                <p>3</p>
                    <object id="sbimage1" data={sbImage3} type="image/svg+xml">
                        image
                    </object>
                    <p>r/UpLiftingNews</p>
                </div>
            </div>
            <div className="topNews1">
                <div id ="saveClick">
                <p>4</p>
                    <object id="sbimage1" data={sbImage4} type="image/svg+xml">
                        image
                    </object>
                    <p>r/savedyouaclick</p>
                </div>
            </div>
            <div className="topNews1">
                <div id ="offBeat" >
                <p>5</p>
                    <object id="sbimage1" data={sbImage5} type="image/svg+xml">
                        image
                    </object>
                    <p>r/offbeat</p>
                </div>
            </div>
            <div className="viewAll">
                <button id ="viewAllcentre">VIEW ALL</button>
            </div>
            <div className="sideBarBase">
                <div className="top">
                    <button>Top</button>
                </div>
                <div className="nearYou" >
                    <button>Near You</button>
                </div>
                <div className="gaming" >
                    <button>Gaming</button>
                </div>
                <div className="sports" >
                    <button>Sports</button>
                </div>

            </div>


        </div>
    )
}

export default Sidebar



















