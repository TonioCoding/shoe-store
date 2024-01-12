/* eslint-disable react/prop-types */


const MembershipCard = (props) => {
  return (
    <div>
        <div className="w-[50vw] h-[70vh] cursor-pointer flex justify-center items-center">
            <img src={props.imgUrl} alt="img" className="object-cover object-center"/>
        </div>
    </div>
  )
}

export default MembershipCard