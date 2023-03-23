class User {

    constructor(name, gender, birth, phoneNumber, email, password, photo,farmName) {

        this._id;
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._email = email;
        this._password = password;
        this._phoneNumber = phoneNumber;
        this._farmName = farmName;
        this._photo = photo;
    }

    get id() {
        return this.id;
    }

    get name() {
        return this._name;
    }

    get gender() {
        return this._gender;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }

    loadFronJSON(json) {

        for (let name in json) {

            switch (name) {

                case '_register':

                    this[name] = new Date(json[name])

                    break;

                default:

                    this[name] = json[name];

                    break;
            }


        }

    }

    getNewID() {//Metodo de gerar um novo Id para cada usuario

        let usersID = parseInt(localStorage.getItem("usersID"));

        if (!usersID > 0) window.id = 0;

        usersID++;

        localStorage.setItem("usersID", usersID);

        return id;

    }

    save() {//Verifica se um usuario possui um id caso contrario gera um novo para o mesmo

        let users = User.getUsersStorage();

        if (this.id > 0) {

            users.map(u => {

                if (u._id == this.id) {

                    Object.assign(u, this);
                }

                return u;

            });

        } else {

            this._id = this.getNewID();

            users.push(this);

        }

        localStorage.setItem("users", JSON.stringify(users));

    }

    static getUsersStorage() {//Metodo que pega os usuários já armazenados pos cadastro

        let users = [];

        if (localStorage.getItem("users")) {

            users = JSON.parse(localStorage.getItem("users"));

        }

        return users;
    }

    remove() {

        let users = User.getUsersStorage();

        users.forEach((userData, index) => {

            if(this._id == userData._id){

                users.splice(index , 1);//spllice = metodo de remoção dos arrays

            }

        });

        users = JSON.parse(localStorage.getItem("users"));

    }

}