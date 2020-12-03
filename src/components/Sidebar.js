import React from 'react'
import sbImage1 from './images2/nottheonion.png';
import sbImage2 from './images2/technews.png';
import sbImage3 from './images2/upliftingNews.png';
import sbImage4 from './images2/savedyouaclick.png';
import sbImage5 from './images2/community5.png';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sbarContainer">
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
            <div className="topNews2">
                <div id ="technews" >
                   <p>2</p>
                   
                    <object id="sbimage1" data={sbImage2} type="image/svg+xml">
                        image
                    </object>
                    <p>r/technews</p>
                </div>
            </div>
            <div className="topNews3">
                <div id ="uplift">
                <p>3</p>
                    <object id="sbimage1" data={sbImage3} type="image/svg+xml">
                        image
                    </object>
                    <p>r/UpLiftingNews</p>
                </div>
            </div>
            <div className="topNews4">
                <div id ="saveClick">
                <p>4</p>
                    <object id="sbimage1" data={sbImage4} type="image/svg+xml">
                        image
                    </object>
                    <p>r/savedyouaclick</p>
                </div>
            </div>
            <div className="topNews5">
                <div id ="offBeat" >
                <p>5</p>
                    <object id="sbimage1" data={sbImage5} type="image/svg+xml">
                        image
                    </object>
                    <p>r/offbeat</p>
                </div>
            </div>
            <div className="viewAll">
                <div id ="viewAllcentre"></div>
            </div>
            <div className="sideBarBase">
                <div className="top">Top</div>
                <div className="nearYou" >Near You</div>
                <div className="gaming" >Gaming</div>
                <div className="sports" >sports</div>

            </div>


        </div>
    )
}

export default Sidebar



















