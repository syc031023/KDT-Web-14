import React, { Component } from 'react';


export default class Practice1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            input: { id: 0, name: '', title: '' },
            searchInfo: { type: 'name', content: '' },
            searchArr: [],
        };
    }

    handleFocus = () => {
        this.myInput.focus();
    }

    addContent = () => {
        const { input, info } = this.state;

        if (input.name.trim().length === 0 || input.title.trim().length === 0) {
            this.handleFocus();
            return;
        }

        const id = input.id + 1;
        const newInfo = { id: id, name: input.name, title: input.title };
        this.setState({
            input: { ...input, id: id },
            info: info.concat(newInfo),
        });

    };

    deleteInfo = (targetId) => {
        const newInfo = this.state.info.filter((value) => value.id !== targetId);
        this.setState({ info: newInfo });
    };

    search = () => {
        const { searchInfo, info } = this.state;

        if (searchInfo.content.length === 0) {
            this.setState({ searchArr: [] });
            return;
        }

        let newSearchInfo = [];
        if (searchInfo.type === 'name') {
            newSearchInfo = info.filter((value) => value.name.includes(searchInfo.content));
        } else {
            newSearchInfo = info.filter((value) => value.title.includes(searchInfo.content));
        }

        this.setState({ searchArr: newSearchInfo });
    };

    handleChangeInput = (field, value) => {
        this.setState((prevState) => ({
            input: { ...prevState.input, [field]: value },
        }));
    };

    handleChangeSearch = (field, value) => {
        this.setState((prevState) => ({
            searchInfo: { ...prevState.searchInfo, [field]: value },
        }));
    };



    render() {
        const { info, input, searchInfo, searchArr } = this.state;

        return (
            <div className="contents" style={{ width: "600px" }}>
                <form style={{ border: "1px solid black", padding: "10px" }}>
                    작성자:
                    <input
                        type="text"
                        placeholder="작성자"
                        value={input.name}
                        style={{ margin: "5px" }}
                        onChange={(e) => this.handleChangeInput('name', e.target.value)}
                    />
                    제목:
                    <input
                        type="text"
                        placeholder="제목"
                        value={input.title}
                        style={{ margin: "5px" }}
                        ref={(ref) => { this.myInput = ref }}
                        onChange={(e) => this.handleChangeInput('title', e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                this.handleFocus();
                                this.addContent();
                            }
                        }}
                    />
                    <button type="button" onClick={this.addContent}>작성</button>
                </form>
                <div style={{ padding: "10px" }}>
                    <select
                        name="name"
                        id="name"
                        style={{ margin: "10px" }}
                        value={searchInfo.type}
                        onChange={(e) => this.handleChangeSearch('type', e.target.value)}
                    >
                        <option value="name">작성자</option>
                        <option value="title">제목</option>
                    </select>
                    <input
                        type="text"
                        placeholder="검색어"
                        style={{ margin: "10px", width: "200px" }}
                        value={searchInfo.content}
                        onChange={(e) => this.handleChangeSearch('content', e.target.value)}
                    />
                    <button onClick={this.search}>검색</button>
                    <button onClick={() => this.setState({ searchArr: info })}>전체</button>
                </div>

                <table border={1} style={{ width: "80%", margin: "20px" }}>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>제목</td>
                            <td>작성자</td>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map((info) => (
                            <tr key={info.id} onDoubleClick={() => this.deleteInfo(info.id)}>
                                <td>{info.id}</td>
                                <td>{info.title}</td>
                                <td>{info.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {searchArr.length === 0 ? (
                    <h4>검색 결과가 없습니다.</h4>
                ) : (
                    <table style={{ width: "80%", margin: "20px" }}>
                        <thead>
                            <tr>
                                <td>번호</td>
                                <td>제목</td>
                                <td>작성자</td>
                            </tr>
                        </thead>
                        <tbody>
                            {searchArr.map((info) => (
                                <tr key={info.id} onDoubleClick={() => this.deleteInfo(info.id)}>
                                    <td>{info.id}</td>
                                    <td>{info.title}</td>
                                    <td>{info.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}
