import React, {useState, useEffect} from 'react';

const Info = () =>{
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    useEffect(()=>{
        console.log(name);
    },[name])
    // useEffect의 dependency로 name이 담긴 배열을 전달해줬기에, 마운트 된 이후로는 name의 갱신에만 반응한다.

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