import { useState } from 'react'
import TabCard from './TabCard'
import tabs from './tabimg/tab.png'
import tab1 from './tabimg/tab1.png'
import tab2 from './tabimg/tab2.png'
import './tab.scss'

const Tab = () => {
  const [tab, setTab] = useState(1)
  return (
    <div className='tab'>
      <div className="container">
        <h2 className="tab__title">Tab Section</h2>
        <h3 className="tab__subtitle">This is some text inside of a div block.</h3>
        <div className="tab__wrapper">
          <button onClick={() => setTab(1)} className={`tab__button ${tab === 1 && 'tab__active'}`}>Tab Button 1</button>
          <button onClick={() => setTab(2)} className={`tab__button ${tab === 2 && 'tab__active'}`}>Tab Button 2</button>
          <button onClick={() => setTab(3)} className={`tab__button ${tab === 3 && 'tab__active'}`}>Tab Button 3</button>
        </div>
        <div className="tab__row">
          {
              tab === 1 ? <TabCard imgtab={tabs} texttab='Some Title Here'/>
            : tab === 2 ? <TabCard imgtab={tab1} texttab='Some Here Title'/>
            : <TabCard imgtab={tab2} texttab='Title Some Here'/>
          }
        </div>
      </div>
    </div>
  )
}

export default Tab
