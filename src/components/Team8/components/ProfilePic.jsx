const ProfilePic = (props) => {
    return (
        <>
        <h1>{props.name}</h1>
        <img src={props.pic} alt="profilePic"/>
        </>
    );
}
export default ProfilePic