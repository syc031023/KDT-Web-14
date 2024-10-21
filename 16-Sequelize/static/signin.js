function clickSignin(userid, userpw) {
    const form = document.forms["signin-form"];
    const loginResult = document.querySelector(".loginResult");

    const data = {
        userid: form.userid.value,
        userpw: form.userpw.value,
    };

    axios({
        method: "POST",
        url: `/signin`,
        data: data,
    }).then((res) => {
        console.log(res.data);
        if(res.data.isSuccess) {
            // loginResult.textContent = `${res.data.userid}님! 로그인 성공!`;
            // loginResult.classList.remove("error");
            // loginResult.classList.add("success");
            alert(`${res.data.userid}님! 로그인 성공!`);
            window.location.href = `profile/${res.data.id}`;
        } else {
            // loginResult.textContent = `아이디 또는 패스워드 오류`;
            // loginResult.classList.remove("success");
            // loginResult.classList.add("error");
            alert(`아이디 또는 패스워드 오류`);
        }
    });
    
}