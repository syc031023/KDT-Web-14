const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "user",
    password: "1234",
    database: "kdt",
    connectionLimit: 15,
});

const getSignup = async () => {
    const query = "SELECT * FROM user";
    const result = await pool.query(query);
    console.log(result);
    return result;
};

const postSignup = async (userid, name, userpw) => {
    const query = "INSERT INTO user (userid, name, pw) VALUE (?, ?, ?)";
    const result = await pool.query(query, [userid, name, userpw]);
    console.log(result);
    return result;
};

const postSignin = async (userid, userpw) => {
    const query = "SELECT * FROM user WHERE userid = ? AND pw = ?";
    const [result] = await pool.query(query, [userid, userpw]);
    console.log("result: ", result);
    return result;
};

// 회원정보 한명 가져오기 (페이지 렌더링)
const getProfile = async (id) => {
    const query = "SELECT * FROM user WHERE id = ?";
    const [result] = await pool.query(query, [id]);
    console.log(result);
    return result;
};

const editProfile = async (data) => {
    const query = "UPDATE user SET userid = ?, name = ?, pw = ? WHERE id = ?";
    const values = [data.userid, data.name, data.userpw, data.id];
    console.log(values);
    
    const [result] = await pool.query(query, values);
    return result;
}

const deleteProfile = async (id) => {
    const query = "DELETE FROM user WHERE id = ?";

    const [result] = await pool.query(query, [id]);
    return result;
}

module.exports = {getSignup, postSignup, postSignin, getProfile, editProfile, deleteProfile};
