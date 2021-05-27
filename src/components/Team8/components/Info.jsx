const Info = (props) => {
    const education= props.education
    const language= props.language
    const unique= props.unique
    return (
        <>
        <h4>Education: </h4>
        <p>{education}</p>
        <h4>Favorite Language: </h4>
        <p>{language}</p>
        <h4>Unique Skills: </h4>
        <p>{unique}</p>
        </>
    );
}
export default Info