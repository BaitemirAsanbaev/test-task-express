const fs = require("fs")

class Services {
    async getAllUsers(req, res, next) {
        try {
            await fs.readFile('db.json', 'utf-8', (err, data) => {
                if (err) {
                    next(err)
                }
                return res.json(JSON.parse(data))
            })
        } catch (e) {
            next(e)
        }
    }

    async createUser(req, res, next) {
        try {
            await fs.readFile('db.json', 'utf8', (err, data) => {
                if (err) {
                    next(err);
                }
                const modifiedData = data.slice(0, -1);
                const {id, name, username, email, age, verified, role, address, phone, avatar} = req.body
                const newUserJson =
`,
{
   "id":${id},
   "name": "${name}",
   "username":"${username}",
   "email": "${email}",
   "age": ${age},
   "verified": ${verified},
   "role": "${role}",
   "address": "${address}",
   "phone": "${phone}",
   "avatar": "${avatar}"
    }
]`
                fs.writeFile('db.json', modifiedData + newUserJson, 'utf8', (err) => {
                    if (err) {
                        next(err);
                    }
                    return res.status(200).json({message: "successfully created user"})
                });
            });
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new Services()