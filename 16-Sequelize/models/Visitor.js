// @param {import('sequelize').Sequelize} Sequelize
// - sequelize 라이브러리에서 Sequelize 함수를
// @param {import('sequelize').DataTypes} DataTypes
// - 

/**
 * visitor 모델을 정의하는 함수
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const Visitor = (Sequelize, DataTypes) => {
    // Sequelize.define(param1, param2, param3);
    // param1: 모델 이름 설정 (테이블 명)
    // param2: 컬럼 정의
    // param3: 모델 옵션 정의
    return Sequelize.define(
        "visitor",
        {
            id: {
                // int not null primary key auto_increment
                type: DataTypes.INTEGER, 
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                // varchar(10) not null 
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: {
                // mediumtext
                type: DataTypes.TEXT("medium"),
            },
        },
        {
            // tableName: "visitor2", // 실제 테이블 이름 명시, 값을 안주면 param1의 모델이름 + s -> visitors로 생성
            freezeTableName: true, // 모델의 이름 그대로 테이블 이름을 고정
            timestamps: true, // 데이터가 추가되고 수정된 시간을 자동으로 컬럼으로 만들어서 기록
        }
    ); // define의 결과값 반환
};

module.exports = Visitor;

