import React, {useState, useEffect} from 'react';

const Info = () =>{
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    useEffect(()=>{
        console.log('마운트 될 때만 실행됨!');
    },[])
    // useEffect의 dependency로 빈 배열을 전달하였으므로 컴포넌트의 어떠한 갱신에도 useEffect는 반응하지 않는다.
    // 오로지 마운트되었을 때만 실행된다.

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickName = e => {
        setNickName(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
            </div>
            <div>
                <div>
                    <b>이름 : </b>{name}
                </div>
                <div>
                    <b>닉네임 : </b>{nickName}
                </div>
            </div>
        </div>
    )
}

export default Info