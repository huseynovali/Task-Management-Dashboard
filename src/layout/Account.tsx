import user from '../assets/Profil.png'
function Account() {
  return (
    <div className='absolute top-0 right-0 py-8'>
      <div className="left"></div>
      <div className="right rounded-full w-[52px] h-[52px]">
        <img src={user} alt="" />
      </div>
    </div>
  )
}

export default Account