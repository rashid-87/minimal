
const TabCard = ({imgtab, texttab}) => {
  return (
   <div>
      <img className='tab__img' src={imgtab} alt="img-tab" />
      <h4 className="tab__text">{texttab}</h4>
      <p className="tab__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
      </p>
   </div>
  )
}

export default TabCard
