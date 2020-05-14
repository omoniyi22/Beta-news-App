import React from 'react';
const pix = require('../uploads/pixOne.jpg');
const api = require('./../Apis/firstRow');

class NewsOne1 extends React.Component {
    componentDidMount() {
        console.log(api);
    }
    render() {
        return (
            <div className='col-md-3 px-0  NewOne NewsOneDivided'>
                <div style={{ backgroundImage: `url(${pix})` }} className='newsIcon border-right pb-0 pt-1'>
                    <div className='badge py-1 px-2 ml-2 red accent-1 font-weight-light'>News - Entertainment</div>
                    <br />
                    <div className='newsIconNews py-1 px-2 pb-2 '>
                        <div className=' small newsItems fa-xs'>
                            <span className='fa fa-clock' /> {new Date().toDateString()}
                        </div>
                        <div className='newsItems  p-0  mb-2 mt-0'>News - Entertainment</div>
                        <div className='newsItemsText p fa-xs'>
                            !Shola Allyson and Tope Alabi are 2 popular gospel music and sound track singers for Yoruba
							Shola Allyson and Tope Alabi are 2 popular gospel music and sound track singers for Yoruba…
							Shola Allyson and Tope Alabi are 2 popular gospel music and sound track singers for Yoruba…
						</div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${pix})` }} className='newsIcon diff border-right pb-0 pt-0'>
                    <div className='badge py-1 px-2 ml-2 red accent-1 font-weight-light'>News - Entertainment</div>
                    <br />
                    <div className='newsIconNews py-1 px-2 pb-2 '>
                        <div className=' small newsItems fa-xs '>
                            <span className='fa fa-clock' /> {new Date().toDateString()}
                        </div>
                        <div className='newsItems  pt-0 mb-2 mt-0'>News - Entertainment</div>
                        <div className='newsItemsText p fa-xs'>
                            Shola Allyson and Tope Alabi are 2 popular gospel music and sound track singers for Yoruba
							Shola Allyson and Tope Alabi are 2 popular gospel music and sound track singers for Yoruba…
							Shola Allyson and Tope Alabi are 2 popular gospel music and sound track singers for Yoruba…
						</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default NewsOne1;
