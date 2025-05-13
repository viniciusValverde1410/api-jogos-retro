import RecordModel from "../models/record.model.js"

class RecordController {
    async findAll(req, res) {
        try {
            const records = await RecordModel.findAll();
            return res.status(200).json(records);
        } catch (error) {
            console.error("Error finding all records", error)
            return res.status(500).json({ message: "Error finding all records", error })
        }
    }
    async create(req, res) {
        try {
            const { score, screenshot, userId, gameId } = req.body

            // console.log(name, platform);
            // Estava dando erro, lembra de no postman colocar type JSON
            
            if (!score || !screenshot || !userId || !gameId) {
                return res.status(400).json({
                    error: "Score, ScreenShot, UserId and gameId fields are required!"
                });
            }

            const data = {
                score,
                screenshot,
                userId,
                gameId,
            }

            const newRecord = await RecordModel.create(data);

            return res.status(201).json({
                messsage: "New Record sucessufully create! DuoLingo singing!!",
                newRecord,
            })

        } catch (error) {
            console.error("Error creating a new record:", error);
            res.status(500).json({ error: "Error creating a new record" });
        }
    }
}

export default new RecordController();