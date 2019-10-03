import React, {useReducer} from 'react';

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]:action.value
        // 객체에 새로운 키,값 페어를 추가하는 로직임!
    }
}

const Info = () =>{
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickName: ''
    })
    const {name, nickName} = state;
    const onChange = e => {
        console.log(e.target);
        dispatch(e.target)
        // action값에는 어떠한 유형의 값도 전달이 가능하다
    }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickName" value={nickName} onChange={onChange} />
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