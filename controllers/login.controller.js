const db = "../db.js";

const login = (req, res) => {
    const q = "SELECT * FROM admin WHERE email = ? ";
  
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
  
      if (!req.body.password)
        return res.status(400).json("Wrong password or username!");
        else 
res.status(200).json("logged in")
  
//       const token = jwt.sign({ id: data[0].id }, "secretkey");
  
//       const { password, ...others } = data[0];
  
//       res
//         .cookie("accessToken", token, {
//           httpOnly: true,
//         })
//         .status(200)
//         .json(others);
    });
  };
  
//   exports.logout = (req, res) => {
//     res.clearCookie("accessToken",{
//       secure:true,
//       sameSite:"none"
//     }).status(200).json("User has been logged out.")
//   };
module.exports = {login};