import PropTypes from "prop-types"
// const nombre = 'Lucas';

export const FirstApp = ( {title='No title' , subtitle='No subtitle'} ) => {
    // console.log(props);

    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string
}

// FirstApp.defaultProps={
//     name:'Name',
//     subtitle:'No subtitle',
//     title:'No title'
// }