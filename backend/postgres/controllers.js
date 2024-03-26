const pool = require("../postgresdb");

const getBlogsData = (req, res) => {
    pool.query("SELECT * FROM bikesblogdata", (err, result) => {
        if (err) {
            console.error("Error fetching blogs data:", err);
            res.status(500).json({ error: err });
            return;
        }
        console.log("Blogs data fetched successfully");
        res.status(200).json(result.rows);
    });
};

const addBlogsData = (req, res) => {
    const { title, description, specifications, image } = req.body;
    console.log(req.body);

    const sql = `INSERT INTO bikesblogdata (title, description, specifications, image)
                 VALUES ($1, $2, $3, $4)`;
    pool.query(sql , [title, description, specifications, image] , (err) => {
        if (err) {
            console.error('Error adding blog data:', err);
            res.status(500).send('Error adding blog data');
            return;
        }
        res.send('Data created');
    });
};

const deleteBlogsData = async (req,res) => {
    const delId = req.params;
    console.log(delId.id)
    try {
        const result = await pool.query('DELETE FROM bikesblogdata WHERE id = $1', [delId.id]);
        res.send(JSON.stringify("deleted"))
      } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ error: 'An error occurred while deleting data' });
      }
}

const getSingleData = (req, res) => {
    console.log(req.params)
    console.log('req from edit')
    var dataId  = req.params;
    // console.log(dataId)
    const sql = `SELECT * FROM bikesblogdata WHERE id = $1`;
    pool.query(sql, [dataId.id], (err, result) => {
        if (err) {
            console.error('Error retrieving single data:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Data not found' });
            return;
        }
        res.status(200).json(result.rows[0]);
        const required = JSON.parse(result.rows[0].specifications)
        
    });
};

const updateBlogData = async (req, res) => {
    
    console.log('request received for update')
    const updateId = req.params;

    try {
        const { title, description, specifications, image } = req.body;
        await pool.query(
            'UPDATE bikesblogdata SET title = $1, description = $2, specifications = $3, image = $4 WHERE id = $5',
            [title, description, specifications, image, updateId.id]
        );
        res.send(JSON.stringify("Data edited successfully"));
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).send("Error updating data");
    }
};





module.exports = {
    getBlogsData,addBlogsData,getSingleData,updateBlogData,deleteBlogsData,
};