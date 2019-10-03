import React, {useState, useEffect} from 'react';

const Info = () =>{
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    useEffect(()=>{
        console.log('렌더링 완료!!!');
        console.log([{
            name,
            nickName
        }]);
    })
    // useEffect의 dependency로 아무것도 전달하지 않았으므로 컴포넌트가 마운트되었을 때는 물론이고,
    // 어떠한 형태로든 컴포넌트가 업데이트되면 useEffect가 항상 실행된다.
    // 따라서 타자를 한자씩만 쳐도 여기서는 setName이나 setNickName이 state를 업데이트하여 컴포넌트를
    // 다시 렌더링하므로 그 때마다 useEffect가 실행되는 것

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