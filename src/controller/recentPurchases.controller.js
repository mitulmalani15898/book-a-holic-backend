
const recentPurchase =require("../model/Order");
const bookImages =require("../model/Book");

const recentPurchases = async (req, res) => {
    var bookIDs = [];
    const userEmail = req.params.email;
    try {
      if (userEmail === undefined) {
        return res
          .status(400)
          .json({ message: "User Email not defined", success: false });
      }

      const recentpurchase = await recentPurchase.find({ email: userEmail });
      
      if (recentpurchase.length == 0) {
        return res
          .status(404)
          .send({ message: "No recent purchase", success: false });
      }
       // Putting all course id's in dbcourse arrray
       recentpurchase.map((d, k) => {
       console.log(new Date(d.purchaseDate).getTime());
        bookIDs.push(d.bookName);
    })
    bookIDs.sort(function(a, b){return new Date(a.purchaseDate).getTime() - new Date(b.purchaseDate).getTime()});
    const urls= await bookImages.find({ title: { $in: bookIDs } });
      return res.status(200).send({ success: true, data: urls});
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  };
  exports.recentPurchases = recentPurchases;
