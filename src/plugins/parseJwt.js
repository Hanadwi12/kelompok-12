const parseJwt = (token) => {
    const base64Jwt = token.split('.')[1];
    const parsedJwt = JSON.parse(window.atob(base64Jwt));
    return parsedJwt;
};


export default parseJwt;